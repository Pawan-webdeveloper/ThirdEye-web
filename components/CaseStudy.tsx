
import React from 'react';

export const CaseStudy: React.FC = () => {
  return (
    <section className="relative h-[800px] overflow-hidden bg-black">
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzuxvpgq1mL1lUoyU1Xs6IXAa7tof9mDtMitNur-VYGG1X1xOJx2wNKcpChD0FIMnA4ejAm82BdmIFuEOeZNtdb_wOliekInzrZvf57xwlT457VAo0VhjbEYT5_7NVu3cKVQPdPrej5GQTS_MAxHcW0sXbGqjaFN8laqrJF4ATFihSHre9j8WRBsC8lvmGkq63BxhZsOtJWsLzTwZEZ4sw5ty3XRAEubwuNq7oSTO1SRiPkPKQ6O8bDEht6X0Zi5Mw9-G3QP5YmAo" 
        alt="Campus Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale transition-all duration-[2s] hover:grayscale-0 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl glass p-10 md:p-14 rounded-[3rem] border border-white/10">
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/20">Case Study</span>
              <span className="text-gray-300 font-medium text-sm">Metro State University</span>
            </div>
            
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-[1.1]">
              Creating safer campuses for 25,000+ students.
            </h3>
            
            <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-10">
              <div>
                <div className="text-5xl font-bold text-white mb-2">-70%</div>
                <div className="text-sm text-gray-400 font-medium">Incident Response Time</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">Zero</div>
                <div className="text-sm text-gray-400 font-medium">False Positive Closures</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
