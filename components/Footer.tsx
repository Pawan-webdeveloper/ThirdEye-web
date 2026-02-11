
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10 text-[11px] text-gray-500">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Releases</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">API Reference</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-semibold mb-6">Subscribe</h3>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white transition-colors text-xs placeholder-gray-600 mb-4"
            />
            <button className="text-blue-400 hover:text-white transition-colors">Join our newsletter</button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-sm">ThirdEye</span>
          </div>
          <div>Copyright © 2024 ThirdEye Inc. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">United States</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
