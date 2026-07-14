import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X, Bot, User, Loader2, Search } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  sources?: { uri: string; title: string }[];
}

export const AskAI: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      role: 'model',
      text: 'Hi there! I am the icreatepixels AI assistant. Ask me anything about our video production, marketing services, or the latest industry trends!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.slice(1).map(m => ({ role: m.role, text: m.text }));
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMsg.text, history })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: data.text,
        sources: data.sources
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'Sorry, I encountered an error while trying to think. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 right-4 md:right-8 w-[calc(100vw-2rem)] md:w-[400px] h-[500px] max-h-[70vh] bg-[#111] border border-white/10 rounded-2xl shadow-2xl z-[9000] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#18181b]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#ff4d00] flex items-center justify-center text-white">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">Ask icreatepixels AI</h3>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-1">
                  <Search size={10} /> Powered by Google Search
                </p>
              </div>
            </div>
            <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-white text-black rounded-2xl rounded-tr-sm' : 'bg-[#18181b] border border-white/10 text-zinc-300 rounded-2xl rounded-tl-sm'} p-4`}>
                  {msg.role === 'model' ? (
                    <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-black prose-pre:border prose-pre:border-white/10 markdown-body">
                      <Markdown remarkPlugins={[remarkGfm]}>{msg.text}</Markdown>
                    </div>
                  ) : (
                    <p className="text-sm">{msg.text}</p>
                  )}
                  
                  {/* Sources */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Sources</p>
                      <div className="flex flex-col gap-1.5">
                        {msg.sources.map((source, idx) => (
                          <a 
                            key={idx} 
                            href={source.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[11px] text-blue-400 hover:text-blue-300 truncate transition-colors flex items-center gap-1.5"
                          >
                            <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0"></div>
                            {source.title || source.uri}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#18181b] border border-white/10 text-zinc-300 rounded-2xl rounded-tl-sm p-4 flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin text-[#ff4d00]" />
                  <span className="text-xs text-zinc-500">Searching and thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#18181b] border-t border-white/10">
            <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about marketing or production..."
                className="w-full bg-[#111] border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-[#ff4d00] transition-colors"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="absolute right-2 w-8 h-8 rounded-full bg-[#ff4d00] flex items-center justify-center text-white disabled:opacity-50 disabled:bg-zinc-700 transition-colors"
              >
                <Send size={14} className="ml-0.5" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
