import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export const ProblemSolution: React.FC = () => {
  const { data } = useAdmin();
  const { problems, solutions } = data;

  return (
    <section id="pain-points" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Vấn đề & Giải pháp
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Chúng tôi hiểu những thách thức bạn đang đối mặt và mang đến giải pháp tối ưu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <XCircle className="w-32 h-32 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
                <XCircle className="w-8 h-8 mr-3" />
                Có phải bạn đang...
            </h3>
            <ul className="space-y-6">
                {problems.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 mr-3"></span>
                        <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-brand-600 p-8 rounded-2xl shadow-lg shadow-brand-500/20 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <CheckCircle2 className="w-32 h-32 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-white">
                <CheckCircle2 className="w-8 h-8 mr-3" />
                Giải pháp từ AIBIZ
            </h3>
            <ul className="space-y-6">
                {solutions.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 mr-3 text-brand-300 flex-shrink-0" />
                        <span className="text-brand-50 text-lg leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};