import React, { useState, useEffect } from 'react';

export default function ROICalculator() {
  const [revenue, setRevenue] = useState(10000);
  const [conversionRate, setConversionRate] = useState(2);
  const [traffic, setTraffic] = useState(5000);
  const [roi, setROI] = useState(0);

  useEffect(() => {
    const currentRevenue = (traffic * (conversionRate / 100)) * (revenue / 100); // Simplified calc
    setROI(Math.round(currentRevenue * 5.5)); // Mocked 5.5x multiplier for marketing impact
  }, [revenue, conversionRate, traffic]);

  return (
    <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden group">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6B4C9A] rounded-full filter blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-black text-[#0A192F] mb-8 tracking-tight text-center lg:text-left">
          Calculate Your <span className="text-[#6B4C9A]">Growth Potential.</span>
        </h3>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Monthly Traffic</label>
              <span className="text-sm font-bold text-[#0A192F]">{traffic.toLocaleString()} visitors</span>
            </div>
            <input 
              type="range" min="1000" max="50000" step="500" value={traffic}
              onChange={(e) => setTraffic(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#6B4C9A]"
            />
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Avg. Order Value</label>
              <span className="text-sm font-bold text-[#0A192F]">£{revenue.toLocaleString()}</span>
            </div>
            <input 
              type="range" min="50" max="5000" step="50" value={revenue}
              onChange={(e) => setRevenue(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#6B4C9A]"
            />
          </div>

          <div className="pt-8 border-t border-gray-50 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-black text-[#6B4C9A] uppercase tracking-[0.3em] mb-4">Potential Annual Growth</span>
            <div className="text-5xl lg:text-6xl font-black text-[#0A192F] tracking-tighter mb-4">
              £{roi.toLocaleString()}
            </div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest max-w-[200px]">
              Estimated impact of our 12-month strategy
            </p>
          </div>

          <a href="/contact" className="block w-full bg-[#0A192F] text-white py-5 rounded-2xl font-black text-center hover:bg-[#1A2E4C] transition-all transform hover:scale-[1.02] shadow-xl shadow-[#0A192F]/20">
            Get My Custom Roadmap
          </a>
        </div>
      </div>
    </div>
  );
}
