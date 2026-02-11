
import React from 'react';

export const ImpactMetrics: React.FC = () => {
  const metrics = [
    { label: 'Accuracy', value: '98%', sub: 'Detection rate in complex environments' },
    { label: 'Speed', value: '<3s', sub: 'Instant alert latency' },
    { label: 'Scale', value: '500+', sub: 'Institutions secured globally' },
    { label: 'Uptime', value: '24/7', sub: 'Continuous active monitoring' }
  ];

  return (
    <section className="py-32 bg-black relative">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Impact Background" 
          className="w-full h-full object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFLazi5GKW-oSNi8KOqtw2VN0ccX-yZXW1dVSiMn3hDltiVvghx4-8GvtgNufzLb6Z0TpWEOs2HkLPB_2qgPQHbl3yaKoZWKnTB6u7meOVwSjWH8YzmdjFZ0dIfn2bWBIBmTwG7lwOzU_YYtwSNCDUdAMHlqCrG8A98I_zWKthNg8thamH0_udEsg3D-m4deMNI-5D12lzEBIRhWGTc6haBBC_CqgeQ39p0YBudoSJAvxN6F2cry0D4Tnw30w-Qinaz9fGPRmg5lA"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-gray-500 font-semibold tracking-widest uppercase text-xs mb-8">Real-Time Impact</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight text-white">
          Proactive safety.<br/>
          <span className="text-gray-500">At an unprecedented scale.</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 border-t border-white/10 pt-16">
          {metrics.map((m, i) => (
            <div key={i} className="group">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">{m.label}</p>
              <div className="text-5xl lg:text-7xl font-bold text-white mb-4 transition-all group-hover:scale-110">
                {m.value}
              </div>
              <p className="text-sm text-gray-400 font-light max-w-[160px] mx-auto">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
