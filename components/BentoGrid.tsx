
import React from 'react';

export const BentoGrid: React.FC = () => {
  return (
    <section className="relative py-32 px-6 lg:px-8 max-w-[1440px] mx-auto bg-black">
      <div className="text-center max-w-4xl mx-auto mb-24 relative z-10">
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium mb-6 tracking-wide backdrop-blur-md">
          ThirdEye OS 2.0
        </span>
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 text-white">
          Intelligence. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-600">Seen differently.</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
          Deploy instantly on existing RTSP streams. Our engine distinguishes threats from harmless interactions with 99.8% accuracy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(320px,auto)]">
        {/* Instant Integration */}
        <div className="bento-card col-span-1 lg:col-span-2 p-8 md:p-10 relative flex flex-col justify-between group h-full min-h-[420px]">
          <img 
            alt="Integration background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 transition-all duration-1000 ease-out scale-110 group-hover:scale-100" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRKwuZhMJPZ6VIdgyzOa-SLy3WXjcAD_zv4alfOaVbkSEG4c5F9m1J-5oKyMcpljlPxSOCo3etEyLEA0BV2c5GlnUdlqGzCe8H5zqYQqsstVAZPg1DCOKeP0OddB5IzZ8ypjJIOjuGgU7wru4kP5bWjhijc_J_bzHS_D9Bl7wq9LBYD9dZkHNP7pyiIEResYSqpQEkQZoV6rt6llZ8_Y2sebuMmoByt1QVme2IWFYHKsS3ELnLTHShP2DFVem38xePi71L-26eWFs"
          />
          <div className="mesh-bg"></div>
          <div className="relative z-10">
            <div className="icon-container mb-6">
              <span className="material-symbols-outlined text-white">bolt</span>
            </div>
            <h3 className="text-3xl font-semibold mb-3 text-white tracking-tight">Instant Integration</h3>
            <p className="text-gray-400 text-lg max-w-md font-light leading-relaxed">
              Plug-and-play architecture compatible with 99% of modern IP cameras and NVR systems via standard protocols.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none opacity-50 mix-blend-screen"></div>
          <div className="absolute bottom-10 right-10 text-white/80 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer backdrop-blur-sm px-4 py-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 z-10">
            Learn more <span className="material-icons text-sm">arrow_forward</span>
          </div>
        </div>

        {/* Real-Time */}
        <div className="bento-card col-span-1 p-8 md:p-10 relative flex flex-col justify-between group min-h-[420px]">
          <img 
            alt="Speed background" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:opacity-30 transition-all duration-1000 ease-out group-hover:rotate-1" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3tuNQySN2E23noGxqCU29YIedyePePCGEDVpMuNsPTxWFgXLxX9-wUahI7_ko67Ud6xS_Ez_3ogW32qTV4JoTijuk9nfh4Vsg_a8Aaw6yhfDd7xynSbtZzRjP-IA46qGnZsSiRrYBXQ4VSs1TQeg7OFLv-8h-X7lY1DVFIAseItzOIPCb3ByBOY8DSl9cmJj-6F0rX4VgyZG-DEbcnlmoCI4-TDniNr4LxVu3gSTt3c83LFaSG6bLE401xL6yPGX379d4JeGixBk"
          />
          <div className="mesh-bg"></div>
          <div className="relative z-10">
            <div className="icon-container mb-6">
              <span className="material-symbols-outlined text-white">timer</span>
            </div>
            <h3 className="text-3xl font-semibold mb-3 text-white tracking-tight">Real-Time</h3>
            <p className="text-gray-400 text-lg font-light">Sub-200ms latency from frame capture to alert generation.</p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center relative z-10">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 w-1/3 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
            </div>
            <div className="mt-4 flex justify-between w-full text-xs font-mono text-gray-500 uppercase tracking-widest">
              <span>Capture</span>
              <span className="text-white">12ms Processing</span>
            </div>
          </div>
        </div>

        {/* Contextual AI */}
        <div className="bento-card col-span-1 p-8 md:p-10 flex flex-col justify-between group min-h-[340px] relative">
          <img 
            alt="Neural background" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:opacity-30 transition-all duration-1000 ease-out group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRKwuZhMJPZ6VIdgyzOa-SLy3WXjcAD_zv4alfOaVbkSEG4c5F9m1J-5oKyMcpljlPxSOCo3etEyLEA0BV2c5GlnUdlqGzCe8H5zqYQqsstVAZPg1DCOKeP0OddB5IzZ8ypjJIOjuGgU7wru4kP5bWjhijc_J_bzHS_D9Bl7wq9LBYD9dZkHNP7pyiIEResYSqpQEkQZoV6rt6llZ8_Y2sebuMmoByt1QVme2IWFYHKsS3ELnLTHShP2DFVem38xePi71L-26eWFs"
          />
          <div className="mesh-bg"></div>
          <div className="relative z-10">
            <div className="icon-container mb-6">
              <span className="material-symbols-outlined text-white">psychology</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white tracking-tight">Contextual AI</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Distinguishes between aggressive posturing and casual interactions to eliminate false positives.
            </p>
          </div>
        </div>

        {/* Privacy First */}
        <div className="bento-card col-span-1 p-0 relative overflow-hidden group min-h-[340px]">
          <img 
            alt="Privacy Data Stream" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000 ease-out" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBeJsZ1A8iC1Hu35_wrqJ1e4RBY-Ts9sTh22RdZAa0TWs6lmEbHxl0RGarslHX47BKw4mcneQOt8F9jlKiH_JBcY8vkXuRQKfeCd2QZeI7goGQ3UEQtFQYHzl4ospPx45f3dgnp746242WBOOktMtCCMQWZrkGiKa-NnxBQVdnmYJB9zPnSMzLkdkp_Pwg7qAbCE6eI-iUdHwlCI85tQX_52Bm4Pd_2r4LLur3m0Ggd0EdJWqi3tqH4-5OTc2t5D1u_4fMsg4DW3E"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent/20"></div>
          <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
            <div className="icon-container mb-6 bg-white/10 border-white/20">
              <span className="material-symbols-outlined text-white">lock_person</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-white tracking-tight">Privacy First</h3>
              <p className="text-gray-300 font-light">On-device face blurring and metadata-only cloud storage ensure global compliance.</p>
            </div>
          </div>
        </div>

        {/* Secure Core */}
        <div className="bento-card col-span-1 p-0 relative overflow-hidden group min-h-[340px]">
          <img 
            alt="Security Visualization" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-transform duration-1000 ease-out" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWdhW4v39eMvlunrDMO4nPUuk4Lt41mMbI_OzUpfsqWhfRl64LoQruP8xoR4X8MJ2QHAEFoCi_DthaosQUq3rKzbjYoZ46SJIfXDfYPY7ckAbeTaIHKlIimkNTcofAOMAqQNd7_lAg45cXKMVcTOAKFrmHrkYtVXr75CtRcAm9XlbcV_CUxlze64VbYiF439RUGARy2eyfAxvg3Mj8Qgt3kp5xPCIxPD9CYcPFLd-F7L9zgnUlrXTDOCRHC8aZ2ETsO_YgCZCfuxw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Secure Core</h3>
            <p className="text-gray-300 text-sm font-light">Enterprise grade encryption standard.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
