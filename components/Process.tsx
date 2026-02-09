import React from 'react';
import { useAdmin } from '../context/AdminContext';

export const Process: React.FC = () => {
  const { data } = useAdmin();
  const { process } = data;

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Quy trình triển khai
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            5 bước chuyên nghiệp - Hiệu quả đo lường được
          </p>
        </div>

        <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-200"></div>

            <div className="space-y-12 relative">
                {process.map((step, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Content Side */}
                        <div className="flex-1 w-full md:w-1/2 p-6">
                            <div className={`bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-500 hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full mb-2">
                                    Bước {step.step}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brand-600 rounded-full border-4 border-white shadow-md z-10 hidden md:flex items-center justify-center">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                        </div>

                        {/* Empty Side */}
                        <div className="flex-1 w-full md:w-1/2 hidden md:block"></div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};