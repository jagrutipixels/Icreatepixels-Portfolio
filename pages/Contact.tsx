import React, { useState, useRef } from 'react';
import { Reveal } from '../components/Reveal.tsx';
import { SEO } from '../components/SEO.tsx';
import { ContactSection } from '../components/ContactSection.tsx';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "4697695a-87d9-4156-87cb-55969daff703",
            subject: "New Project Inquiry from icreatepixels",
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
        
        const result = await response.json();
        if (result.success) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error(error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
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
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "telephone": "+91 7400310443",
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
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-6 md:p-12 shadow-2xl relative">
            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent opacity-50"></div>
            
            <div className="mb-16">
              {submitStatus === 'success' ? (
                <div className="max-w-2xl mx-auto text-center py-12 border border-green-500/20 bg-green-500/5 rounded-2xl">
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">Inquiry Received</h3>
                  <p className="text-zinc-400">Thank you for reaching out. Our strategy team will contact you within 24 hours.</p>
                  <button onClick={() => setSubmitStatus('idle')} className="mt-8 text-[#ff4d00] hover:text-white uppercase tracking-widest text-xs font-bold transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                  {submitStatus === 'error' && (
                    <div className="p-4 border border-red-500/20 bg-red-500/5 text-red-400 text-sm rounded-2xl mb-6 text-center">
                      Something went wrong. Please try again or contact us directly via WhatsApp.
                    </div>
                  )}
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
                      className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors`}
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
                      className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors`}
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
                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors resize-none`}
                    placeholder="Tell us about your brand and what you want to achieve..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting} 
                  className="w-full bg-white text-black px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-black hover:text-white border border-transparent hover:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
              )}
            </div>

            {/* Existing sophisticated contact section elements */}
            <ContactSection />
            
          </div>
        </div>
      </div>

    </>
  );
};
