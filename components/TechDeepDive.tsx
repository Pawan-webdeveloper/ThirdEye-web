
import React, { useState } from 'react';

type TabId = 'vision' | 'processing' | 'privacy';

export const TechDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('vision');

  const switchTab = (id: TabId) => {
    setActiveTab(id);
  };

  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white tracking-tight">Technology Deep Dive</h2>
          <p className="text-gray-400 text-lg max-w-2xl mb-10 font-light">Explore the architecture powering the next generation of public safety.</p>
          <div className="segmented-control" role="tablist">
            <button 
              aria-selected={activeTab === 'vision'} 
              className={`px-8 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeTab === 'vision' ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
              onClick={() => switchTab('vision')} 
              role="tab"
            >
              Vision Pipeline
            </button>
            <button 
              aria-selected={activeTab === 'processing'} 
              className={`px-8 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeTab === 'processing' ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
              onClick={() => switchTab('processing')} 
              role="tab"
            >
              Real-Time Processing
            </button>
            <button 
              aria-selected={activeTab === 'privacy'} 
              className={`px-8 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeTab === 'privacy' ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
              onClick={() => switchTab('privacy')} 
              role="tab"
            >
              Privacy &amp; Compliance
            </button>
          </div>
        </div>

        <div className="min-h-[600px] relative">
          {/* Vision Pipeline Tab */}
          <div className={`transition-opacity duration-500 ${activeTab === 'vision' ? 'block opacity-100' : 'hidden opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bento-card p-10 h-full relative overflow-hidden">
                  <div className="mesh-bg"></div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
                    <span className="material-symbols-outlined text-blue-400 text-3xl">view_in_ar</span>
                    Pose Estimation Engine
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed font-light">
                    ThirdEye's proprietary model utilizes a 17-point skeletal tracking system to analyze human movement. By calculating vector velocities between key joints, the system identifies aggressive kinetic signatures independent of visual appearance.
                  </p>
                  <div className="space-y-4 mt-auto relative z-10">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-colors hover:bg-white/10">
                      <span className="material-symbols-outlined text-blue-400">visibility_off</span>
                      <span className="text-sm font-medium text-gray-200">Occlusion handling</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-colors hover:bg-white/10">
                      <span className="material-symbols-outlined text-blue-400">bedtime</span>
                      <span className="text-sm font-medium text-gray-200">Low-light enhancement</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-colors hover:bg-white/10">
                      <span className="material-symbols-outlined text-blue-400">group</span>
                      <span className="text-sm font-medium text-gray-200">Multi-subject interaction</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="bento-card h-full min-h-[500px] relative overflow-hidden bg-black border border-white/10">
                  <img 
                    alt="Neural Network Visualization" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen saturate-0" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRKwuZhMJPZ6VIdgyzOa-SLy3WXjcAD_zv4alfOaVbkSEG4c5F9m1J-5oKyMcpljlPxSOCo3etEyLEA0BV2c5GlnUdlqGzCe8H5zqYQqsstVAZPg1DCOKeP0OddB5IzZ8ypjJIOjuGgU7wru4kP5bWjhijc_J_bzHS_D9Bl7wq9LBYD9dZkHNP7pyiIEResYSqpQEkQZoV6rt6llZ8_Y2sebuMmoByt1QVme2IWFYHKsS3ELnLTHShP2DFVem38xePi71L-26eWFs"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <div className="relative w-full max-w-xl aspect-video border border-white/10 bg-black/60 rounded-3xl backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/5">
                      <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="text-[10px] font-mono text-gray-400">ThirdEye_Core_v2.1</div>
                      </div>
                      <div className="absolute top-1/2 left-1/3 w-24 h-40 border border-red-500/50 rounded-lg flex flex-col items-center justify-center bg-red-500/5 animate-pulse">
                        <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2"></div>
                        <div className="w-16 h-0.5 bg-red-500 absolute top-8 transform rotate-12"></div>
                        <div className="w-0.5 h-16 bg-red-500 absolute top-8"></div>
                        <span className="absolute -top-3 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg">THREAT (98%)</span>
                      </div>
                      <div className="absolute bottom-4 left-4 p-2 bg-black/80 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
                        <div className="flex gap-4 text-[10px] font-mono text-blue-400">
                          <span>CAM_04</span>
                          <span>LATENCY: 42ms</span>
                          <span>FPS: 60</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-Time Processing Tab */}
          <div className={`transition-opacity duration-500 ${activeTab === 'processing' ? 'block opacity-100' : 'hidden opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-1 lg:col-span-1 flex flex-col gap-6">
                <div className="bento-card p-8 relative overflow-hidden">
                  <div className="mesh-bg"></div>
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Total Latency</h4>
                  <div className="text-5xl font-bold text-white mb-2 tracking-tighter">120<span className="text-2xl text-gray-500 ml-1 font-normal">ms</span></div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-2">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <p className="text-xs text-blue-400 font-medium">7x Faster than Cloud APIs</p>
                </div>
                <div className="bento-card p-8 flex-1 relative overflow-hidden">
                  <div className="mesh-bg"></div>
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Throughput</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 shadow-[0_0_15px_-3px_rgba(34,197,94,0.3)]">
                      <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white tracking-tight">60+ FPS</div>
                      <div className="text-xs text-gray-400">High-def streams</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-2 bento-card p-10 flex items-center justify-center relative overflow-hidden">
                <div className="mesh-bg"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center group">
                    <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined text-gray-400 text-3xl">videocam</span>
                    </div>
                    <p className="text-sm font-medium text-white">Source</p>
                  </div>
                  <div className="flex-1 h-[1px] bg-white/10 relative hidden md:block overflow-hidden">
                    <div className="absolute inset-y-0 bg-blue-500/80 w-1/3 blur-[2px] animate-shimmer"></div>
                  </div>
                  <div className="text-center relative">
                    <div className="absolute -inset-8 bg-blue-500/20 blur-2xl rounded-full"></div>
                    <div className="w-24 h-24 rounded-3xl bg-black/80 backdrop-blur-xl border border-blue-500/50 flex items-center justify-center mb-4 relative z-10 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                      <span className="material-symbols-outlined text-blue-400 text-4xl">memory</span>
                    </div>
                    <p className="text-sm font-bold text-white">Edge AI</p>
                  </div>
                  <div className="flex-1 h-[1px] bg-white/10 relative hidden md:block"></div>
                  <div className="text-center group">
                    <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined text-gray-400 text-3xl">notifications</span>
                    </div>
                    <p className="text-sm font-medium text-white">Alert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy & Compliance Tab */}
          <div className={`transition-opacity duration-500 ${activeTab === 'privacy' ? 'block opacity-100' : 'hidden opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bento-card p-10 border border-white/10 relative overflow-hidden">
                <div className="mesh-bg"></div>
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Metadata Only.</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                  ThirdEye never stores raw video footage on the cloud. Only anonymized metadata (timestamps, threat probability scores, and vector graphs) leaves your local network.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-medium text-white border border-white/10 hover:bg-white/10 transition-colors cursor-default">AES-256</span>
                  <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-medium text-white border border-white/10 hover:bg-white/10 transition-colors cursor-default">End-to-End TLS 1.3</span>
                  <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-medium text-white border border-white/10 hover:bg-white/10 transition-colors cursor-default">No Biometric Storage</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'verified_user', title: 'GDPR', status: 'Compliant', color: 'text-blue-400' },
                  { icon: 'security', title: 'SOC 2', status: 'Type II', color: 'text-green-400' },
                  { icon: 'lock', title: 'ISO 27001', status: 'Certified', color: 'text-purple-400' },
                  { icon: 'policy', title: 'CCPA', status: 'Ready', color: 'text-orange-400' }
                ].map((item, i) => (
                  <div key={i} className="bento-card p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all group border border-white/5">
                    <div className="mesh-bg opacity-20"></div>
                    <span className={`material-symbols-outlined text-3xl ${item.color} mb-2 group-hover:scale-110 transition-transform`}>{item.icon}</span>
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
