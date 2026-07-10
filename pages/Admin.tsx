import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, Timestamp, query, orderBy } from 'firebase/firestore';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { BlogPost } from '../types';

export const Admin: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Blog Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState<'SEO' | 'Production' | 'Marketing'>('SEO');
  const [date, setDate] = useState('');
  const [readTime, setReadTime] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [keywords, setKeywords] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    if (!auth || !db) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchBlogs();
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchBlogs = async () => {
    try {
      const q = query(collection(db, 'blogs'), orderBy('date', 'desc'));
      const snapshot = await getDocs(q);
      const blogsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogsData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
    setLoading(false);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const resetForm = () => {
    setTitle('');
    setSlug('');
    setCategory('SEO');
    setDate('');
    setReadTime('');
    setExcerpt('');
    setContent('');
    setAuthorName('');
    setAuthorRole('');
    setKeywords('');
    setEditingId(null);
  };

  const handleEdit = (blog: any) => {
    setTitle(blog.title);
    setSlug(blog.slug);
    setCategory(blog.category);
    setDate(blog.date);
    setReadTime(blog.readTime);
    setExcerpt(blog.excerpt);
    setContent(blog.content);
    setAuthorName(blog.author?.name || '');
    setAuthorRole(blog.author?.role || '');
    setKeywords(blog.keywords);
    setEditingId(blog.id);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteDoc(doc(db, 'blogs', id));
        fetchBlogs();
      } catch (error) {
        console.error("Error deleting blog", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const blogData = {
      title,
      slug,
      category,
      date,
      readTime,
      excerpt,
      content,
      author: { name: authorName, role: authorRole },
      keywords,
      createdAt: Timestamp.now()
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, 'blogs', editingId), blogData);
      } else {
        await addDoc(collection(db, 'blogs'), blogData);
      }
      resetForm();
      fetchBlogs();
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Error saving blog");
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#ff4d00] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!user) {
    if (!auth || !db) {
       return (
         <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 text-white">
           <div className="max-w-md w-full bg-zinc-900 p-8 rounded-2xl border border-white/10 text-center">
             <h2 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-widest">Database Not Configured</h2>
             <p className="text-zinc-400 text-sm">Please set up your Firebase environment variables to access the Admin panel.</p>
           </div>
         </div>
       );
    }

    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-zinc-900 p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center uppercase tracking-widest">{isLogin ? 'Admin Login' : 'Admin Register'}</h2>
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white" required />
            </div>
            <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-full hover:bg-zinc-200 transition-colors uppercase tracking-widest text-sm">
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>
          <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-4 text-zinc-400 text-sm hover:text-white transition-colors">
            {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-500/10 text-red-500 px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-red-500/20 transition-colors">Logout</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-5 bg-zinc-900 p-6 md:p-8 rounded-3xl border border-white/10 h-max sticky top-24">
            <h2 className="text-xl font-bold mb-6 uppercase tracking-widest">{editingId ? 'Edit Blog' : 'Create New Blog'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white text-sm" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Slug</label>
                  <input type="text" value={slug} onChange={e => setSlug(e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white text-sm" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Category</label>
                  <select value={category} onChange={e => setCategory(e.target.value as any)} className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white text-sm" required>
                    <option value="SEO">SEO</option>
                    <option value="Production">Production</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Date String</label>
                  <input type="text" value={date} onChange={e => setDate(e.target.value)} placeholder="e.g. June 12, 2026" className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white text-sm" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Read Time</label>
                  <input type="text" value={readTime} onChange={e => setReadTime(e.target.value)} placeholder="e.g. 5 min read" className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white text-sm" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Excerpt</label>
                <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white text-sm" rows={2} required />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Content (Markdown)</label>
                <textarea value={content} onChange={e => setContent(e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white text-sm font-mono" rows={10} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Author Name</label>
                  <input type="text" value={authorName} onChange={e => setAuthorName(e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white text-sm" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Author Role</label>
                  <input type="text" value={authorRole} onChange={e => setAuthorRole(e.target.value)} className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white text-sm" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Keywords</label>
                <input type="text" value={keywords} onChange={e => setKeywords(e.target.value)} placeholder="Comma separated" className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white text-sm" required />
              </div>
              <div className="flex gap-4 pt-4">
                <button type="submit" className="flex-1 bg-white text-black font-bold py-3 rounded-full hover:bg-zinc-200 transition-colors uppercase tracking-widest text-sm">
                  {editingId ? 'Update Blog' : 'Publish Blog'}
                </button>
                {editingId && (
                  <button type="button" onClick={resetForm} className="px-6 border border-white/20 text-white font-bold py-3 rounded-full hover:bg-white/10 transition-colors uppercase tracking-widest text-sm">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* List */}
          <div className="lg:col-span-7">
            <h2 className="text-xl font-bold mb-6 uppercase tracking-widest">Published Blogs</h2>
            <div className="grid grid-cols-1 gap-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-zinc-900 border border-white/5 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 px-2 py-1 rounded-sm">{blog.category}</span>
                      <span className="text-xs text-zinc-500">{blog.date}</span>
                    </div>
                    <h3 className="font-bold text-lg">{blog.title}</h3>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button onClick={() => handleEdit(blog)} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors">Edit</button>
                    <button onClick={() => handleDelete(blog.id)} className="bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors">Delete</button>
                  </div>
                </div>
              ))}
              {blogs.length === 0 && (
                <div className="text-zinc-500 text-center py-12 border border-white/5 rounded-2xl border-dashed">
                  No blogs published yet.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
