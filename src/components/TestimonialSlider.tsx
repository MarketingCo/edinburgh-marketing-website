import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Marketing Company Edinburgh didn't just run ads for us; they rebuilt our entire digital growth engine. Our revenue in the New Town has grown by 240% in just 12 months.",
    author: "James Sinclair",
    role: "Director, Waverley Professional Services",
    location: "New Town"
  },
  {
    quote: "As a Leith-based creative hub, we needed an agency that understood our artisanal spirit. Their local SEO strategy has made us the #1 choice in EH6.",
    author: "Eilidh Macpherson",
    role: "Founding Partner, The Shore Collective",
    location: "Leith"
  },
  {
    quote: "The radical transparency of their real-time dashboard is a game-changer. We finally know exactly where every pound of our marketing budget is going.",
    author: "Alastair Graham",
    role: "CEO, Lothian Property Group",
    location: "Stockbridge"
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white/5 backdrop-blur-xl rounded-[4rem] p-10 lg:p-20 border border-white/10 shadow-2xl overflow-hidden group">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2"></path>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex text-yellow-400 mb-10">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>

        <div className="min-h-[200px] flex items-center justify-center">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 absolute transform ${
                index === current ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
              }`}
            >
              <p className="text-2xl lg:text-4xl font-bold text-white leading-tight italic mb-12 max-w-4xl mx-auto">
                "{item.quote}"
              </p>
              <div>
                <span className="text-xl font-black text-[#6B4C9A] block mb-1">{item.author}</span>
                <span className="text-sm font-bold text-purple-100/40 uppercase tracking-widest">{item.role} | {item.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex space-x-3 mt-16">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === current ? 'bg-[#6B4C9A] w-12' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
