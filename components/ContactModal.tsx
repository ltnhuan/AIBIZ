import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';

export const ContactSection: React.FC = () => {
  const { addLead } = useAdmin();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    packageInterest: 'Gói Căn Bản (04 Buổi)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead(formData);
    setSubmitted(true);
    setFormData({ name: '', phone: '', company: '', packageInterest: 'Gói Căn Bản', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-brand-600 px-8 py-6">
                    <h2 className="text-2xl font-bold text-white text-center">Đăng Ký Tư Vấn Lộ Trình</h2>
                    <p className="text-brand-100 text-center mt-2">Để lại thông tin, chuyên gia AIBIZ sẽ liên hệ trong 24h.</p>
                </div>
                <div className="p-8">
                    {submitted ? (
                        <div className="text-center py-12">
                            <h3 className="text-2xl font-bold text-green-600 mb-2">Đăng ký thành công!</h3>
                            <p className="text-gray-600">Chúng tôi đã nhận được thông tin và sẽ liên hệ sớm.</p>
                            <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-600 underline">Gửi đăng ký khác</button>
                        </div>
                    ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
                                <input 
                                    required
                                    type="text" 
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 px-4 py-2" 
                                    placeholder="Nguyễn Văn A" 
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                                <input 
                                    required
                                    type="tel" 
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 px-4 py-2" 
                                    placeholder="0909..." 
                                    value={formData.phone}
                                    onChange={e => setFormData({...formData, phone: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Doanh nghiệp</label>
                            <input 
                                required
                                type="text" 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 px-4 py-2" 
                                placeholder="Tên công ty của bạn" 
                                value={formData.company}
                                onChange={e => setFormData({...formData, company: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gói quan tâm</label>
                            <select 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 px-4 py-2"
                                value={formData.packageInterest}
                                onChange={e => setFormData({...formData, packageInterest: e.target.value})}
                            >
                                <option>Gói Căn Bản (04 Buổi)</option>
                                <option>Gói Nâng Cao (08 Buổi)</option>
                                <option>Gói Executive (Lãnh đạo)</option>
                                <option>Gói Train-the-Trainer</option>
                                <option>Tư vấn tổng thể</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Lời nhắn</label>
                            <textarea 
                                rows={3} 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-gray-50 px-4 py-2"
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors">
                            Gửi đăng ký
                        </button>
                    </form>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
}