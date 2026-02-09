import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Package, ProcessStep, PricingTier } from '../../types';
import { Trash2, Plus, GripVertical } from 'lucide-react';

export const ContentEditor: React.FC = () => {
  const { data, updateSection } = useAdmin();
  const [activeTab, setActiveTab] = useState<'general' | 'problems' | 'packages' | 'process' | 'pricing'>('general');

  // --- Handlers for Nested Arrays ---

  const handleUpdatePackage = (index: number, field: keyof Package, value: any) => {
    const newPackages = [...data.packages];
    newPackages[index] = { ...newPackages[index], [field]: value };
    updateSection('packages', newPackages);
  };

  const handleUpdateProcess = (index: number, field: keyof ProcessStep, value: any) => {
    const newProcess = [...data.process];
    newProcess[index] = { ...newProcess[index], [field]: value };
    updateSection('process', newProcess);
  };

  const handleUpdatePricing = (index: number, field: keyof PricingTier, value: any) => {
    const newPricing = [...data.pricing];
    newPricing[index] = { ...newPricing[index], [field]: value };
    updateSection('pricing', newPricing);
  };

  const handleArrayTextChange = (section: 'problems' | 'solutions', index: number, value: string) => {
    const newArray = [...data[section]];
    newArray[index] = value;
    updateSection(section, newArray);
  };

  // --- Render Functions ---

  const renderGeneralTab = () => (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">Hero Section (Đầu trang)</h3>
        <div className="grid grid-cols-1 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Tiêu đề chính</label>
                <input 
                    type="text" 
                    value={data.hero.title} 
                    onChange={e => updateSection('hero', {...data.hero, title: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Từ khóa nổi bật (Màu xanh)</label>
                <input 
                    type="text" 
                    value={data.hero.highlight} 
                    onChange={e => updateSection('hero', {...data.hero, highlight: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Mô tả phụ</label>
                <textarea 
                    rows={3}
                    value={data.hero.subtitle} 
                    onChange={e => updateSection('hero', {...data.hero, subtitle: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">Badge</label>
                <input 
                    type="text" 
                    value={data.hero.badge} 
                    onChange={e => updateSection('hero', {...data.hero, badge: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                />
            </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">Thông tin Liên hệ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Tên công ty</label>
                <input 
                    type="text" 
                    value={data.contact.companyName} 
                    onChange={e => updateSection('contact', {...data.contact, companyName: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                <input 
                    type="text" 
                    value={data.contact.phone} 
                    onChange={e => updateSection('contact', {...data.contact, phone: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    type="text" 
                    value={data.contact.email} 
                    onChange={e => updateSection('contact', {...data.contact, email: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
                <input 
                    type="text" 
                    value={data.contact.address} 
                    onChange={e => updateSection('contact', {...data.contact, address: e.target.value})}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                />
            </div>
        </div>
      </div>
    </div>
  );

  const renderProblemsTab = () => (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-red-600 mb-4">Danh sách Vấn đề (Pain Points)</h3>
        {data.problems.map((prob, idx) => (
           <div key={idx} className="mb-4">
              <label className="block text-xs text-gray-500 mb-1">Vấn đề {idx + 1}</label>
              <textarea 
                 rows={2}
                 value={prob}
                 onChange={(e) => handleArrayTextChange('problems', idx, e.target.value)}
                 className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
           </div>
        ))}
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-brand-600 mb-4">Danh sách Giải pháp</h3>
        {data.solutions.map((sol, idx) => (
           <div key={idx} className="mb-4">
              <label className="block text-xs text-gray-500 mb-1">Giải pháp {idx + 1}</label>
              <textarea 
                 rows={2}
                 value={sol}
                 onChange={(e) => handleArrayTextChange('solutions', idx, e.target.value)}
                 className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
              />
           </div>
        ))}
      </div>
    </div>
  );

  const renderPackagesTab = () => (
    <div className="space-y-6">
      {data.packages.map((pkg, idx) => (
        <div key={pkg.id} className="bg-white shadow rounded-lg p-6 border-l-4 border-brand-500">
           <div className="flex justify-between items-center mb-4">
             <h3 className="text-lg font-bold text-gray-900">{pkg.title}</h3>
             <span className="text-sm bg-gray-100 px-2 py-1 rounded">{pkg.iconName}</span>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <label className="block text-xs text-gray-500">Tên gói</label>
                  <input type="text" value={pkg.title} onChange={(e) => handleUpdatePackage(idx, 'title', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm py-1 px-2 text-sm" />
              </div>
              <div>
                  <label className="block text-xs text-gray-500">Thời lượng</label>
                  <input type="text" value={pkg.duration} onChange={(e) => handleUpdatePackage(idx, 'duration', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm py-1 px-2 text-sm" />
              </div>
              <div className="col-span-2">
                  <label className="block text-xs text-gray-500">Mô tả</label>
                  <textarea rows={2} value={pkg.description} onChange={(e) => handleUpdatePackage(idx, 'description', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm py-1 px-2 text-sm" />
              </div>
              <div className="col-span-2">
                   <label className="block text-xs text-gray-500 mb-1">Các tính năng chính (Mỗi dòng 1 tính năng)</label>
                   <textarea 
                        rows={4} 
                        value={pkg.features.join('\n')} 
                        onChange={(e) => handleUpdatePackage(idx, 'features', e.target.value.split('\n'))}
                        className="w-full border-gray-300 rounded-md shadow-sm py-1 px-2 text-sm font-mono" 
                    />
              </div>
               <div className="col-span-2">
                  <label className="block text-xs text-gray-500">Phù hợp cho</label>
                  <input type="text" value={pkg.recommendedFor} onChange={(e) => handleUpdatePackage(idx, 'recommendedFor', e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm py-1 px-2 text-sm" />
              </div>
           </div>
        </div>
      ))}
    </div>
  );

  const renderProcessTab = () => (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {data.process.map((step, idx) => (
        <div key={idx} className="p-4 border-b last:border-0 flex items-start gap-4 hover:bg-gray-50">
            <div className="bg-brand-100 text-brand-700 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                {step.step}
            </div>
            <div className="flex-1 grid gap-2">
                <input 
                    type="text" 
                    value={step.title} 
                    onChange={e => handleUpdateProcess(idx, 'title', e.target.value)}
                    className="font-bold text-gray-900 border-none bg-transparent focus:ring-0 p-0 placeholder-gray-400"
                    placeholder="Tên bước"
                />
                <textarea 
                    rows={2}
                    value={step.description}
                    onChange={e => handleUpdateProcess(idx, 'description', e.target.value)}
                    className="text-sm text-gray-600 border border-transparent hover:border-gray-200 rounded p-1 w-full"
                />
            </div>
        </div>
      ))}
    </div>
  );

  const renderPricingTab = () => (
    <div className="grid md:grid-cols-3 gap-4">
        {data.pricing.map((tier, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
                 <div className="mb-4 text-center w-full">
                    <label className="block text-xs text-gray-400 uppercase">Tên gói</label>
                    <input type="text" value={tier.label} onChange={(e) => handleUpdatePricing(idx, 'label', e.target.value)} className="text-center font-bold text-lg w-full border-none focus:ring-brand-500 rounded" />
                 </div>
                 <div className="mb-4 text-center w-full">
                    <label className="block text-xs text-gray-400 uppercase">Số lượng</label>
                    <input type="text" value={tier.quantity} onChange={(e) => handleUpdatePricing(idx, 'quantity', e.target.value)} className="text-center font-bold text-xl w-full border-none focus:ring-brand-500 rounded" />
                 </div>
                 <div className="mb-4 text-center w-full">
                    <label className="block text-xs text-gray-400 uppercase">Giảm giá (%)</label>
                    <div className="flex items-center justify-center">
                         <span className="text-2xl font-bold text-orange-500">-</span>
                         <input type="number" value={tier.discount} onChange={(e) => handleUpdatePricing(idx, 'discount', parseInt(e.target.value))} className="text-center font-bold text-2xl w-20 border-gray-200 rounded mx-1" />
                         <span className="text-2xl font-bold text-orange-500">%</span>
                    </div>
                 </div>
            </div>
        ))}
    </div>
  );

  return (
    <div>
        {/* Navigation Tabs */}
        <div className="bg-white p-2 rounded-lg shadow-sm mb-6 flex overflow-x-auto gap-2">
            {[
                { id: 'general', label: 'Thông tin chung' },
                { id: 'problems', label: 'Vấn đề & Giải pháp' },
                { id: 'packages', label: 'Gói đào tạo' },
                { id: 'process', label: 'Quy trình' },
                { id: 'pricing', label: 'Bảng giá' },
            ].map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.id ? 'bg-brand-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                    {tab.label}
                </button>
            ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
            {activeTab === 'general' && renderGeneralTab()}
            {activeTab === 'problems' && renderProblemsTab()}
            {activeTab === 'packages' && renderPackagesTab()}
            {activeTab === 'process' && renderProcessTab()}
            {activeTab === 'pricing' && renderPricingTab()}
        </div>
        
        <div className="mt-8 flex justify-end">
             <p className="text-sm text-gray-500 italic mr-4 flex items-center">Các thay đổi được tự động lưu vào trình duyệt</p>
        </div>
    </div>
  );
};