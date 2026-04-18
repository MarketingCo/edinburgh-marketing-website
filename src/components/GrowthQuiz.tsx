import React, { useState } from 'react';

const steps = [
  {
    question: "What is your current annual revenue?",
    options: ["Under £250k", "£250k - £1M", "£1M - £5M", "£5M+"]
  },
  {
    question: "What is your primary growth goal for 2026?",
    options: ["Dominating local Edinburgh search", "Scaling to national Scottish market", "Improving lead quality", "Automating marketing operations"]
  },
  {
    question: "How much are you currently investing in monthly marketing?",
    options: ["Under £1k", "£1k - £3k", "£3k - £10k", "£10k+"]
  },
  {
    question: "Which Edinburgh neighborhoods are most important to you?",
    options: ["City Centre / New Town", "Leith / The Shore", "Stockbridge / West End", "Full City Coverage"]
  }
];

export default function GrowthQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  return (
    <div className="bg-white p-8 lg:p-16 rounded-[4rem] shadow-2xl border border-gray-100 relative overflow-hidden max-w-3xl mx-auto">
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
        <div 
          className="h-full bg-[#6B4C9A] transition-all duration-500" 
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>

      <div className="relative z-10">
        {!isComplete ? (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <span className="text-xs font-black text-[#6B4C9A] uppercase tracking-[0.3em] mb-4 block">Question {currentStep + 1} of {steps.length}</span>
            <h3 className="text-3xl lg:text-4xl font-black text-[#0A192F] mb-10 leading-tight">{steps[currentStep].question}</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {steps[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className="w-full text-left p-6 rounded-2xl border-2 border-slate-50 hover:border-[#6B4C9A] hover:bg-purple-50 transition-all font-bold text-[#0A192F] group flex justify-between items-center"
                >
                  {option}
                  <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 text-[#6B4C9A] transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center animate-in fade-in zoom-in-95 duration-700">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-4xl font-black text-[#0A192F] mb-6">Analysis Complete.</h3>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Based on your revenue and Edinburgh growth goals, your business is a high-potential candidate for our <strong>Growth Engine Partnership.</strong>
            </p>
            <div class="bg-slate-50 p-8 rounded-3xl mb-10 border border-gray-100">
              <p class="text-sm font-bold text-[#0A192F] uppercase tracking-widest mb-4">Recommended Next Step:</p>
              <a href="/contact" class="bg-[#0A192F] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#1A2E4C] transition-all inline-block w-full shadow-xl">
                Request Private Briefing
              </a>
            </div>
            <button onClick={() => {setCurrentStep(0); setAnswers([]); setIsComplete(false);}} className="text-gray-400 font-bold hover:text-[#6B4C9A] transition-colors text-sm uppercase tracking-widest">
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
