import React, { useRef, useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Check, ChevronLeft, ChevronRight, Monitor, Cpu, Briefcase, Users } from 'lucide-react';

const ICON_MAP = {
  Monitor: Monitor,
  Cpu: Cpu,
  Briefcase: Briefcase,
  Users: Users
};

export const Packages: React.FC = () => {
  const { data } = useAdmin();
  const { packages } = data;
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [packages]); // Re-run when packages change

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -(clientWidth / 1.5) : (clientWidth / 1.5);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Các gói đào tạo chủ chốt
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Lộ trình được thiết kế linh hoạt cho từng đối tượng trong doanh nghiệp.
          </p>
        </div>

        <div className="relative group">
            <button 
                onClick={() => scroll('left')}
                className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 rounded-full bg-white shadow-xl border border-gray-200 text-gray-600 hover:text-brand-600 hover:border-brand-200 transition-all duration-300 ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
                onClick={() => scroll('right')}
                className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-3 rounded-full bg-white shadow-xl border border-gray-200 text-gray-600 hover:text-brand-600 hover:border-brand-200 transition-all duration-300 ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <div 
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
            >
                {packages.map((pkg, index) => {
                    const Icon = ICON_MAP[pkg.iconName] || Monitor;
                    return (
                        <div 
                            key={index} 
                            className="flex-none w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center h-auto"
                        >
                            <div className="flex flex-col h-full rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:border-brand-300 transition-all duration-300 group/card relative">
                                <div className="p-6 flex-1">
                                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 group-hover/card:bg-brand-600 transition-colors duration-300">
                                        <Icon className="w-6 h-6 text-brand-600 group-hover/card:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1" title={pkg.title}>{pkg.title}</h3>
                                    <p className="text-sm font-semibold text-brand-600 mt-1 uppercase tracking-wide">{pkg.duration}</p>
                                    <p className="mt-4 text-gray-600 text-sm leading-relaxed min-h-[60px] line-clamp-3">
                                        {pkg.description}
                                    </p>

                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Nội dung chính</h4>
                                        <ul className="space-y-3">
                                        {pkg.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                                            <span className="text-sm text-gray-600 line-clamp-2">{feature}</span>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="p-6 bg-gray-50 rounded-b-2xl border-t border-gray-100 mt-auto">
                                    <p className="text-xs text-gray-500 mb-2">Phù hợp cho:</p>
                                    <p className="text-sm font-medium text-gray-900 line-clamp-1">{pkg.recommendedFor}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};