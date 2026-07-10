import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { BlogPost as BlogPostType } from '../types';
import { SEO } from '../components/SEO.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPost = async () => {
      if (!db) {
        setLoading(false);
        navigate('/blog');
        return;
      }
      try {
        const q = query(collection(db, 'blogs'), where('slug', '==', slug));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          setPost({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as BlogPostType);
        } else {
          navigate('/blog');
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        navigate('/blog');
      }
      setLoading(false);
    };
    fetchPost();
  }, [slug, navigate]);

  if (loading) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#ff4d00] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
  if (!post) return null;

  return (
    <>
      <SEO 
        title={`${post.title} | icreatepixels Blog`}
        description={post.excerpt}
        keywords={post.keywords}
      />
      
      <div className="pt-32 pb-24 px-6 relative bg-[#050505] min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/blog" className="relative z-50 cursor-pointer inline-flex items-center gap-2 text-zinc-500 hover:text-[#ff4d00] transition-colors mb-12 text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} />
            Back to Hub
          </Link>

          <Reveal>
            <div className="mb-16">
              <span className="text-[#ff4d00] text-[10px] font-black uppercase tracking-widest bg-[#ff4d00]/10 px-3 py-1 rounded-2xl mb-6 inline-block">
                {post.category}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-8 text-white tracking-tight leading-[1.1]">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 border-t border-b border-white/10 py-4">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-[#ff4d00]" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#ff4d00]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#ff4d00]" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="prose prose-invert prose-lg max-w-none text-zinc-300 prose-headings:font-serif prose-headings:font-bold prose-headings:text-white prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:mb-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:mb-2 prose-strong:text-white prose-strong:font-bold">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </Reveal>

          <Reveal delay={200} className="mt-20 pt-10 border-t border-white/10 text-center">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Ready to scale your brand?</h3>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Whether it's cinematic video production or data-backed performance marketing, our team in Navi Mumbai is ready to craft your next campaign.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#ff4d00] text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:bg-orange-600 transition-colors">
              Start a Project
            </Link>
          </Reveal>
        </div>
      </div>
    </>
  );
};
