import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';

export const SettingsEditor: React.FC = () => {
  const { data, updateSMTP } = useAdmin();
  const [smtpForm, setSmtpForm] = useState(data.smtp);

  const handleSave = () => {
    updateSMTP(smtpForm);
    alert('Đã lưu cấu hình SMTP!');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900">Cấu hình SMTP (Gửi Email)</h3>
        <p className="text-sm text-gray-500 mt-1">
            Cấu hình này sẽ được sử dụng để gửi email thông báo khi có khách hàng đăng ký mới.
            <br/><span className="text-red-500 italic">Lưu ý: Trong môi trường Demo (Client-side), hệ thống sẽ chỉ giả lập việc gửi mail và log ra console.</span>
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Email nhận thông báo (Admin)</label>
            <input 
                type="email" 
                value={smtpForm.receiverEmail} 
                onChange={e => setSmtpForm({...smtpForm, receiverEmail: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">SMTP Host</label>
            <input 
                type="text" 
                value={smtpForm.host} 
                onChange={e => setSmtpForm({...smtpForm, host: e.target.value})}
                placeholder="smtp.gmail.com"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Port</label>
            <input 
                type="text" 
                value={smtpForm.port} 
                onChange={e => setSmtpForm({...smtpForm, port: e.target.value})}
                placeholder="587"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">SMTP User (Email gửi)</label>
            <input 
                type="text" 
                value={smtpForm.user} 
                onChange={e => setSmtpForm({...smtpForm, user: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">SMTP Password</label>
            <input 
                type="password" 
                value={smtpForm.pass} 
                onChange={e => setSmtpForm({...smtpForm, pass: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
            />
        </div>

        <div className="flex items-center">
            <input
                id="secure_mode"
                type="checkbox"
                checked={smtpForm.secure}
                onChange={e => setSmtpForm({...smtpForm, secure: e.target.checked})}
                className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
            />
            <label htmlFor="secure_mode" className="ml-2 block text-sm text-gray-900">
                Sử dụng kết nối bảo mật (SSL/TLS)
            </label>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button onClick={handleSave} className="bg-brand-600 text-white px-4 py-2 rounded-md hover:bg-brand-700">Lưu cấu hình</button>
      </div>
    </div>
  );
};