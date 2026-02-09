import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export const Hero: React.FC = () => {
  const { data } = useAdmin();
  const { hero } = data;

  return (
    <div id="hero" className="relative bg-brand-900 pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Abstract Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-800/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-400 bg-brand-400/10 text-brand-300 text-xs font-semibold uppercase tracking-wide mb-6">
                   {hero.badge}
                </div>
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:leading-tight">
                {hero.title.replace(hero.highlight, '')} <span className="text-brand-400">{hero.highlight}</span> {hero.title.split(hero.highlight)[1] || ''}
                </h1>
                <p className="mt-6 text-lg text-gray-300 sm:max-w-xl mx-auto lg:mx-0">
                {hero.subtitle}
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                    <a
                        href="#contact"
                        className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg transition-all shadow-lg shadow-brand-500/30"
                    >
                        Đăng ký tư vấn lộ trình
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                    <button
                        className="mt-3 sm:mt-0 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-brand-100 bg-brand-800 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg transition-all"
                    >
                        <Download className="mr-2 h-5 w-5" />
                        Tải báo giá chi tiết
                    </button>
                </div>
            </div>
            
            {/* Hero Image / Illustration */}
            <div className="mt-12 lg:mt-0 relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-700/50 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                     <img 
                        src="https://picsum.photos/800/600" 
                        alt="AI Training Session" 
                        className="w-full h-auto object-cover"
                     />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <p className="text-white font-medium">Hợp tác cùng {data.contact.companyName}</p>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};