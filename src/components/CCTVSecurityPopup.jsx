import React, { useState, useEffect } from 'react';
import { ShieldAlert, X } from 'lucide-react';

export default function CCTVSecurityPopup({ onLearnMore }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show popup after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-up">
      <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-2xl max-w-sm relative border border-slate-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-400"></div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
            <ShieldAlert className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1 text-slate-900">24/7 Smart Security</h3>
            <p className="text-slate-600 text-sm mb-4">
              We now provide premium CCTV & Security Guard monitoring from 11 PM to 6 AM. Keep your home & shop safe!
            </p>
            <button 
              onClick={() => {
                setIsVisible(false);
                onLearnMore();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
