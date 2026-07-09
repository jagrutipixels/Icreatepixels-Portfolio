import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    category: "How long does a website build take?",
    answer:
      "Typically, a premium website takes 4-6 weeks from discovery to launch, depending on the complexity of motion design and asset creation.",
  },
  {
    category: "Do you offer branding & video production?",
    answer:
      "Yes. We are a full-service production house. We can shoot cinematic footage of your business and integrate it directly into your web experience.",
  },
  {
    category: "What tech stack do you use?",
    answer:
      "We primarily build with React, Next.js, and Tailwind CSS, utilizing Framer Motion and GSAP for high-end interactions.",
  },
  {
    category: "Do you provide ongoing maintenance?",
    answer:
      "Absolutely. We offer competitive monthly retainers for ongoing SEO, performance optimization, and content updates.",
  },
];

export const InteractiveFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.category,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  });

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#050505]">
      <script type="application/ld+json">{structuredData}</script>
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-16 text-center">
          Frequently <br /> Asked
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                data-cursor="CLICK"
              >
                <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#ff4d00] transition-colors">
                  {faq.category}
                </span>
                <span
                  className={`text-2xl text-zinc-500 transition-transform duration-500 ${openIndex === i ? "rotate-45 text-[#ff4d00]" : ""}`}
                >
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-zinc-400 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
