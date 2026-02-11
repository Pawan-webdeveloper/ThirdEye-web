
import React, { useState } from 'react';

const Accordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className={`text-xl font-medium transition-colors ${isOpen ? 'text-blue-400' : 'text-white group-hover:text-blue-400'}`}>
          {question}
        </span>
        <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-45 text-blue-400' : 'text-gray-500'}`}>
          add
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
        <p className="text-gray-400 text-lg leading-relaxed font-light">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Frequently Asked Questions.</h2>
          <p className="text-xl text-gray-400 font-light max-w-xl">
            Answers to common questions about ThirdEye's intelligent monitoring capabilities.
          </p>
        </div>
        
        <div className="border-t border-white/10">
          <Accordion 
            question="Does ThirdEye store facial recognition data?" 
            answer="No. ThirdEye is designed with privacy-first architecture. Our AI processes video streams in real-time to detect behaviors, not identities. We do not store biometric templates unless explicitly configured." 
          />
          <Accordion 
            question="Is the system GDPR and CCPA compliant?" 
            answer="Yes. We adhere to the strictest global data protection regulations. Our system includes features like automatic face blurring for exported footage and rigid access control logs." 
          />
          <Accordion 
            question="How is the data encrypted during transmission?" 
            answer="All data is encrypted both in transit and at rest using AES-256 standards. We utilize secure TLS 1.3 protocols for all communication." 
          />
          <Accordion 
            question="Can I customize retention policies?" 
            answer="Absolutely. The dashboard allows administrators to set custom retention periods based on event severity or camera location." 
          />
        </div>
        
        <div className="mt-16">
          <a href="#" className="inline-flex items-center text-blue-400 hover:underline decoration-2 underline-offset-4 font-medium">
            Visit Help Center
            <span className="material-symbols-outlined text-sm ml-1">arrow_forward_ios</span>
          </a>
        </div>
      </div>
    </section>
  );
};
