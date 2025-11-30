import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-10 text-center">Häufige Fragen</h2>
        
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-primary/30 bg-primary/5' : 'border-stone-200 bg-white hover:border-primary/20'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-primary' : 'text-stone-800'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-stone-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;