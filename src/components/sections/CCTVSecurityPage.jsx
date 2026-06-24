import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Eye, Bell, Clock, Users } from 'lucide-react';

export default function CCTVSecurityPage({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-20 px-4 md:px-8 relative overflow-hidden animate-fade-up">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors group cursor-pointer font-medium"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 mb-6 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Live Monitoring Active
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
              Ultimate Night-Time <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Security Protection</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Sleep peacefully while we keep an eye on your property. Our professional security team actively monitors your CCTV cameras from <strong>11:00 PM to 6:00 AM</strong>. We protect shops, offices, and homes with real-time incident response.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <FeatureCard 
                icon={<Eye className="w-6 h-6 text-blue-600" />}
                title="Active Monitoring"
                description="Our human team watches your feeds, no relying purely on AI."
              />
              <FeatureCard 
                icon={<Bell className="w-6 h-6 text-green-600" />}
                title="Instant Alerts"
                description="We alert local guards and authorities instantly upon any breach."
              />
              <FeatureCard 
                icon={<Clock className="w-6 h-6 text-blue-600" />}
                title="11 PM - 6 AM"
                description="Dedicated night shift to cover the most vulnerable hours."
              />
              <FeatureCard 
                icon={<Users className="w-6 h-6 text-green-600" />}
                title="Trained Guards"
                description="Ex-military and highly trained professionals on standby."
              />
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1 cursor-pointer">
              Secure Your Property Now
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-green-200 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
              <img 
                src="/cctv_images/cctv_poster_1782271891014.png" 
                alt="Security Monitoring Center" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-lg">
                  <div className="bg-green-100 p-3 rounded-full">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Area Secured</h4>
                    <p className="text-sm text-slate-500">All systems online & operational</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
      <div className="mb-4 bg-slate-50 inline-block p-3 rounded-xl">{icon}</div>
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}
