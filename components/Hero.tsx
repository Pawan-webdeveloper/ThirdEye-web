
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[980px] mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up">
          <span className="text-[11px] font-medium text-blue-400 tracking-wide uppercase">New Intelligence Engine v2.4</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.05] text-white">
          Safety. <br />
          <span className="text-gradient-silver">Reimagined.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 font-normal leading-relaxed">
          Real-time threat detection powered by the next generation of neural networks. Alerts in seconds, not minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mb-24">
          <button className="bg-white text-black px-8 py-3.5 rounded-full font-semibold text-lg transition-all hover:bg-gray-100 min-w-[200px]">
            Request Demo
          </button>
          <button className="bg-white/10 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all hover:bg-white/20 min-w-[200px] flex items-center justify-center gap-2">
            Learn more
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="w-full relative group">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#121212] aspect-[16/9]">
            <img 
              alt="Security Interface" 
              className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJMwWLhXLuwm0obdFesVm11djoltReP4cwWNxd-n_8uqUFH0o98zUYVZRT-6IIrSgMd_fvAjbyQV0hmC8ICfH-qx5Lp7AHunzvj5fjIJjidBnL_g1QiOhdip5Tw6yT9YcTzNO6kwWhVQIBPF4Iiq_c3k7icw5FXktClKhpnw9PnYdXUdiI4coJaNQ265VnUP5S3rAKdxXb406xR1fYiirSPCE08ObVMF14R5kVafH2zwYRK1pgF0O4yHcoXsbGgcwItewA0eLSE8E" 
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute top-8 left-8 right-8 flex justify-between text-[10px] font-mono text-white/50 tracking-widest uppercase">
                <span>Feed_04 • Live</span>
                <span>Neural_Scan: Active</span>
              </div>
              <div className="border border-white/20 w-[60%] h-[60%] rounded-2xl flex items-center justify-center relative bg-white/5 backdrop-blur-[2px]">
                <span className="material-symbols-outlined text-white/40 text-5xl font-light">view_in_ar</span>
                <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_15px_#60a5fa] animate-scan"></div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-blue-500/10 blur-[60px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
