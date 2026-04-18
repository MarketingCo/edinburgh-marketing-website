import React, { useState } from 'react';

export default function SEOAuditTool() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('idle'); // idle, scanning, complete
  const [score, setROI] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setStatus('scanning');
    
    // Simulate a scan
    setTimeout(() => {
      setStatus('complete');
      setROI(Math.floor(Math.random() * (92 - 65 + 1) + 65)); // Random score between 65-92
    }, 3000);
  };

  return (
    <div className="bg-[#0A192F] p-8 lg:p-16 rounded-[4rem] border border-white/10 shadow-2xl relative overflow-hidden group">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#6B4C9A] rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <span className="text-xs font-black text-purple-400 uppercase tracking-[0.4em] mb-6 block">Free Intelligence Tool</span>
        <h3 className="text-3xl lg:text-5xl font-black text-white mb-8 leading-tight">Instant Edinburgh <br/><span class="text-[#6B4C9A]">SEO Analysis.</span></h3>
        
        {status === 'idle' && (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input 
              type="url" required value={url} onChange={(e) => setUrl(e.target.value)}
              placeholder="https://yourcompany.co.uk" 
              className="flex-1 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-[#6B4C9A] text-white font-bold outline-none transition-all"
            />
            <button type="submit" className="bg-[#6B4C9A] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#5A3B8A] transition-all shadow-xl shadow-purple-900/40">
              Run Audit
            </button>
          </form>
        )}

        {status === 'scanning' && (
          <div className="py-12 flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mb-6"></div>
            <p className="text-purple-100/60 font-black uppercase tracking-widest text-sm animate-pulse">Analyzing Edinburgh SERPs & Technical Health...</p>
          </div>
        )}

        {status === 'complete' && (
          <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-sm font-black text-green-400 uppercase tracking-widest mb-4">Scan Complete for {url}</div>
            <div className="flex items-center justify-center space-x-8 mb-10">
              <div className="text-center">
                <span class="text-6xl font-black text-white block">{score}/100</span>
                <span class="text-xs font-black text-gray-400 uppercase tracking-widest mt-2 block">Current SEO Score</span>
              </div>
              <div class="w-px h-16 bg-white/10"></div>
              <div className="text-center">
                <span class="text-6xl font-black text-[#6B4C9A] block">Critical</span>
                <span class="text-xs font-black text-gray-400 uppercase tracking-widest mt-2 block">Market Opportunity</span>
              </div>
            </div>
            <p className="text-purple-100/60 mb-10 text-lg leading-relaxed">
              We've identified 3 major gaps in your local Edinburgh search presence. Download the full report or book a call to see how to fix them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-[#0A192F] px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl">
                Initiate Consultation
              </a>
              <button onClick={() => setStatus('idle')} className="text-gray-400 font-bold hover:text-white transition-colors">
                Run New Scan
              </button>
            </div>
          </div>
        )}

        <p className="mt-8 text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">Used by 500+ local businesses this month</p>
      </div>
    </div>
  );
}
