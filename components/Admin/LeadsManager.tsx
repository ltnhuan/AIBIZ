import React from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Mail, Phone, Building } from 'lucide-react';

export const LeadsManager: React.FC = () => {
  const { leads, updateLeadStatus } = useAdmin();

  if (leads.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-12 text-center text-gray-500">
        Chưa có khách hàng đăng ký. Hãy kiểm tra lại sau.
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày đăng ký</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Khách hàng</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thông tin liên hệ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nhu cầu</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(lead.createdAt).toLocaleDateString('vi-VN')}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                     <Building className="w-3 h-3 mr-1" /> {lead.company}
                  </div>
                </td>
                <td className="px-6 py-4">
                   <div className="text-sm text-gray-900 flex items-center">
                     <Phone className="w-3 h-3 mr-1 text-gray-400" /> {lead.phone}
                   </div>
                   <div className="text-sm text-gray-500 flex items-center mt-1">
                     <Mail className="w-3 h-3 mr-1 text-gray-400" /> {lead.company}
                   </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {lead.packageInterest}
                  </span>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs truncate" title={lead.message}>{lead.message}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select 
                    value={lead.status}
                    onChange={(e) => updateLeadStatus(lead.id, e.target.value as any)}
                    className={`text-sm rounded-full px-3 py-1 border-0 cursor-pointer font-medium
                        ${lead.status === 'new' ? 'bg-green-100 text-green-800' : ''}
                        ${lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${lead.status === 'closed' ? 'bg-gray-100 text-gray-800' : ''}
                    `}
                  >
                    <option value="new">Mới</option>
                    <option value="contacted">Đã liên hệ</option>
                    <option value="closed">Đóng</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};