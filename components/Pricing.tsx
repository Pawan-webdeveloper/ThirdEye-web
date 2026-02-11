
import React, { useState } from 'react';

const Plan: React.FC<{ 
  name: string; 
  price: string; 
  desc: string; 
  features: string[]; 
  primary?: boolean 
}> = ({ name, price, desc, features, primary }) => (
  <div className={`flex flex-col h-full rounded-[2.5rem] p-10 border transition-all duration-500 hover:scale-[1.02] ${
    primary ? 'bg-[#1c1c1e] border-blue-500 shadow-2xl shadow-blue-500/10' : 'bg-white/5 border-white/5'
  }`}>
    <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
    <p className="text-gray-400 text-sm mb-8">{desc}</p>
    
    <div className="flex items-baseline mb-1">
      <span className="text-5xl font-bold text-white">{price}</span>
      {price !== 'Custom' && <span className="text-gray-500 ml-1">/mo</span>}
    </div>
    
    <button className={`w-full py-4 rounded-full font-semibold text-sm transition-all mb-10 mt-8 ${
      primary ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-white/10 text-white hover:bg-white/20'
    }`}>
      {name === 'Enterprise' ? 'Contact Sales' : 'Buy Now'}
    </button>
    
    <div className="h-px bg-white/10 mb-8"></div>
    
    <ul className="space-y-5 flex-1">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
          <span className="material-symbols-outlined text-blue-500 text-lg">check_circle</span>
          {f}
        </li>
      ))}
    </ul>
  </div>
);

export const Pricing: React.FC = () => {
  const [cameras, setCameras] = useState(25);
  const [staff, setStaff] = useState(4);

  const savings = (cameras * 1200 + staff * 15000).toLocaleString();

  return (
    <section id="pricing" className="py-32 bg-black">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Simple, transparent pricing.</h2>
          <p className="text-xl text-gray-400">Choose the plan that fits your scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-32">
          <Plan 
            name="Starter" 
            price="$199" 
            desc="Perfect for small businesses." 
            features={['24/7 Monitoring', 'Standard Alerts', '7-day storage', 'Up to 10 cameras']}
          />
          <Plan 
            name="Professional" 
            price="$499" 
            primary 
            desc="For expanding campuses." 
            features={['Real-time AI', 'Instant SMS Alerts', '30-day storage', 'Priority Support', 'Up to 50 cameras']}
          />
          <Plan 
            name="Enterprise" 
            price="Custom" 
            desc="For large infrastructure." 
            features={['On-premise servers', 'Custom API', 'Dedicated Manager', 'Guaranteed SLA', 'Unlimited cameras']}
          />
        </div>

        {/* Calculator */}
        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl max-w-5xl mx-auto shadow-2xl">
          <div className="p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">Calculate your savings.</h3>
              <p className="text-gray-400 text-lg mb-12 font-light">Estimate the annual impact ThirdEye can have on your bottom line.</p>
              
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between text-sm mb-4">
                    <label className="text-white font-medium">Cameras</label>
                    <span className="text-blue-400 font-mono font-bold">{cameras}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" max="100" 
                    value={cameras} 
                    onChange={(e) => setCameras(parseInt(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500" 
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-4">
                    <label className="text-white font-medium">Security Staff</label>
                    <span className="text-blue-400 font-mono font-bold">{staff}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" max="20" 
                    value={staff} 
                    onChange={(e) => setStaff(parseInt(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500" 
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-[2rem] p-10 flex flex-col justify-center items-center text-center h-full border border-white/10">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Projected Annual Savings</p>
              <div className="text-6xl font-bold text-white mb-4 tracking-tighter transition-all duration-300 transform scale-110">
                ${savings}
              </div>
              <p className="text-xs text-gray-500 mb-10 max-w-[240px] leading-relaxed">
                *Based on 30% reduction in staffing needs and 40% fewer liability claims.
              </p>
              <button className="text-blue-400 hover:text-white text-sm font-semibold transition-colors flex items-center gap-1 group">
                Download Full Report 
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
