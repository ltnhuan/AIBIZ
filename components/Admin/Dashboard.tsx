import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { LayoutDashboard, FileText, Users, Settings, LogOut, Globe } from 'lucide-react';
import { LeadsManager } from './LeadsManager';
import { ContentEditor } from './ContentEditor';
import { SettingsEditor } from './SettingsEditor';

export const Dashboard: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const { logout } = useAdmin();
  const [activeTab, setActiveTab] = useState<'leads' | 'content' | 'settings'>('leads');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-900 text-white flex-shrink-0">
        <div className="p-6 flex items-center justify-between">
          <span className="text-xl font-bold">AIBIZ Admin</span>
        </div>
        <nav className="mt-4 px-2 space-y-2">
          <button
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'leads' ? 'bg-brand-600' : 'hover:bg-gray-800'}`}
          >
            <Users className="w-5 h-5 mr-3" />
            Khách hàng (Leads)
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'content' ? 'bg-brand-600' : 'hover:bg-gray-800'}`}
          >
            <FileText className="w-5 h-5 mr-3" />
            Nội dung Trang
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'settings' ? 'bg-brand-600' : 'hover:bg-gray-800'}`}
          >
            <Settings className="w-5 h-5 mr-3" />
            Cấu hình & SMTP
          </button>
        </nav>
        <div className="mt-auto p-4 border-t border-gray-800">
           <button onClick={onExit} className="w-full flex items-center px-4 py-2 text-gray-400 hover:text-white mb-2">
             <Globe className="w-5 h-5 mr-3" />
             Xem trang web
           </button>
           <button onClick={logout} className="w-full flex items-center px-4 py-2 text-red-400 hover:text-red-300">
            <LogOut className="w-5 h-5 mr-3" />
            Đăng xuất
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto h-screen">
        <header className="bg-white shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {activeTab === 'leads' && 'Quản lý Khách hàng tiềm năng'}
            {activeTab === 'content' && 'Chỉnh sửa Nội dung Website'}
            {activeTab === 'settings' && 'Cài đặt Hệ thống'}
          </h1>
        </header>
        <main className="p-6">
          {activeTab === 'leads' && <LeadsManager />}
          {activeTab === 'content' && <ContentEditor />}
          {activeTab === 'settings' && <SettingsEditor />}
        </main>
      </div>
    </div>
  );
};