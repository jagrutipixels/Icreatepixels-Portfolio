import React, { useState, useRef } from 'react';
import { Reveal } from '../components/Reveal.tsx';
import { SEO } from '../components/SEO.tsx';
import { ContactSection } from '../components/ContactSection.tsx';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if (formRef.current) {
        formRef.current.submit();
      }
    }
  };

  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "icreatepixels",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Navi Mumbai",
      "addressRegion": "MH",
      "addressCountry": "IN"
    },
    "telephone": "7400310443",
    "email": "abhishek@icreatepixels.in",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service"
    }
  });

  return (
    <>
      <SEO 
        title="Contact icreatepixels | Let's Build Your Brand"
        description="Ready to scale? Contact our Navi Mumbai production and growth agency to request a strategy call or a quote."
        keywords="Contact icreatepixels, Navi Mumbai agency contact, hire videographer, hire SEO expert"
        schema={structuredData}
      />
      
      <div className="pt-32 pb-24 px-6 border-b border-white/10 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 text-white tracking-tight">
                Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-orange-400">Position.</span>
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed">
                We only onboard a limited number of partners per quarter to maintain uncompromising quality. Drop your details, and our strategy team will reach out within 24 hours.
              </p>
            </div>
          </Reveal>
          
          <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-4 sm:p-6 md:p-12 shadow-2xl relative">
            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent opacity-50"></div>
            
            <div className="mb-16">
              <form ref={formRef} onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" className="max-w-2xl mx-auto space-y-6">
                <input type="hidden" name="access_key" value="4697695a-87d9-4156-87cb-55969daff703" />
                <input type="hidden" name="subject" value="New Project Inquiry from icreatepixels" />
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-[#050505] border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00]/50 transition-colors`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-[#050505] border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00]/50 transition-colors`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-zinc-500">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-[#050505] border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00]/50 transition-colors resize-none`}
                    placeholder="Tell us about your brand and what you want to achieve..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#ff4d00] text-white font-bold uppercase tracking-widest text-sm py-4 rounded-sm hover:bg-[#ff4d00]/90 transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Existing sophisticated contact section elements */}
            <ContactSection />
            
          </div>
        </div>
      </div>

    </>
  );
};
