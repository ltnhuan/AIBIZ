import React from 'react';
import { MapPin, Phone, Mail, Rocket } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export const Footer: React.FC = () => {
  const { data } = useAdmin();
  const { contact } = data;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
                <Rocket className="h-6 w-6 text-brand-500" />
                <span className="text-2xl font-bold text-white">AIBIZ</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Đơn vị tiên phong đào tạo AI thực chiến cho doanh nghiệp. "Đừng để doanh nghiệp của bạn bị bỏ lại phía sau trong cuộc đua AI."
            </p>
            <div className="flex space-x-4">
               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">FB</div>
               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">LN</div>
               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">YT</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Đơn vị thực hiện</h3>
            <p className="font-medium text-brand-400 mb-2">{contact.companyName}</p>
            <ul className="space-y-3 text-sm">
              <li>Đào tạo nghề chất lượng cao</li>
              <li>Hợp tác doanh nghiệp FDI</li>
              <li>Cung ứng nhân lực kỹ thuật</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                <span>{contact.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AIBIZ Training. All rights reserved. <a href="#admin" className="opacity-20 hover:opacity-100">Admin</a></p>
        </div>
      </div>
    </footer>
  );
};