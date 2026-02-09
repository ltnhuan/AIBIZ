import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { Star, Zap, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  const { data } = useAdmin();

  return (
    <section id="pricing" className="py-20 bg-brand-900 relative overflow-hidden">
        {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Đầu tư thông minh cho tương lai
          </h2>
          <p className="mt-4 text-xl text-brand-200">
            Chính sách ưu đãi đặc biệt khi đăng ký combo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.pricing.map((offer, index) => {
             // Styling logic for emphasis
             const isBestValue = index === 1;
             return (
              <div 
                key={index} 
                className={`relative rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300
                    ${isBestValue ? 'bg-white text-gray-900 shadow-2xl scale-105 z-10' : 'bg-brand-800 text-white border border-brand-700'}
                `}
              >
                {isBestValue && (
                    <div className="absolute -top-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md uppercase tracking-wide">
                        Phổ biến nhất
                    </div>
                )}
                <div className="mb-4 p-3 rounded-full bg-brand-100/10">
                    {index === 0 && <ShieldCheck className={`w-8 h-8 ${isBestValue ? 'text-brand-600' : 'text-brand-300'}`} />}
                    {index === 1 && <Zap className={`w-8 h-8 ${isBestValue ? 'text-brand-600' : 'text-brand-300'}`} />}
                    {index === 2 && <Star className={`w-8 h-8 ${isBestValue ? 'text-brand-600' : 'text-brand-300'}`} />}
                </div>
                <h3 className="text-lg font-medium opacity-80 mb-2">{offer.label}</h3>
                <div className="text-4xl font-extrabold mb-4">
                    Ký {offer.quantity}
                </div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
                    -{offer.discount}%
                </div>
                <p className={`text-sm ${isBestValue ? 'text-gray-500' : 'text-brand-200'} mb-8`}>
                    Tổng giá trị hợp đồng giảm trực tiếp {offer.discount}%. Áp dụng cho mọi doanh nghiệp tại Bà Rịa - Vũng Tàu.
                </p>
                <a href="#contact" className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors
                    ${isBestValue ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-brand-700 text-white hover:bg-brand-600 border border-brand-600'}
                `}>
                    Nhận báo giá
                </a>
              </div>
             );
          })}
        </div>

        <div className="mt-12 text-center">
            <p className="text-brand-200 text-sm">
                * Cam kết mức giá cạnh tranh nhất khu vực Phú Mỹ. Phù hợp với mọi quy mô từ Startup đến FDI.
            </p>
        </div>
      </div>
    </section>
  );
};