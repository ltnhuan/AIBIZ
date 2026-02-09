import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppData, Lead, SMTPSettings } from '../types';
import { INITIAL_DATA } from '../constants';

interface AdminContextType {
  isAuthenticated: boolean;
  login: (pass: string) => boolean;
  logout: () => void;
  data: AppData;
  updateSection: <K extends keyof AppData>(section: K, value: AppData[K]) => void;
  updateSMTP: (data: SMTPSettings) => void;
  leads: Lead[];
  addLead: (lead: Omit<Lead, 'id' | 'createdAt' | 'status'>) => void;
  updateLeadStatus: (id: string, status: 'new' | 'contacted' | 'closed') => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // --- Authentication State ---
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // --- Content State ---
  const [data, setData] = useState<AppData>(INITIAL_DATA);
  
  // --- Leads State ---
  const [leads, setLeads] = useState<Lead[]>([]);

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('aibiz_auth');
    if (savedAuth === 'true') setIsAuthenticated(true);

    const savedData = localStorage.getItem('aibiz_data');
    if (savedData) {
      setData(JSON.parse(savedData));
    }

    const savedLeads = localStorage.getItem('aibiz_leads');
    if (savedLeads) {
      setLeads(JSON.parse(savedLeads));
    }
  }, []);

  // Save to LocalStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('aibiz_data', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem('aibiz_leads', JSON.stringify(leads));
  }, [leads]);

  // --- Actions ---

  const login = (password: string) => {
    // Simple hardcoded password for demo purposes
    if (password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('aibiz_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('aibiz_auth');
  };

  const updateSection = <K extends keyof AppData>(section: K, value: AppData[K]) => {
    setData(prev => ({ ...prev, [section]: value }));
  };

  const updateSMTP = (smtpData: SMTPSettings) => {
    setData(prev => ({ ...prev, smtp: smtpData }));
  };

  const addLead = (leadInput: Omit<Lead, 'id' | 'createdAt' | 'status'>) => {
    const newLead: Lead = {
      ...leadInput,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    setLeads(prev => [newLead, ...prev]);
    
    // Simulate Sending Email via SMTP
    console.log(`[SMTP SIMULATION] Connecting to ${data.smtp.host}...`);
    console.log(`[SMTP SIMULATION] Sending email to ${data.smtp.receiverEmail}`);
    console.log(`[SMTP SIMULATION] Subject: New Lead from ${newLead.name}`);
    console.log(`[SMTP SIMULATION] Body: ${newLead.message}`);
    // Only alert in development/demo context, or rely on UI feedback
    // alert("Hệ thống đã ghi nhận thông tin và giả lập gửi email tới Admin!");
  };

  const updateLeadStatus = (id: string, status: 'new' | 'contacted' | 'closed') => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
  };

  return (
    <AdminContext.Provider value={{
      isAuthenticated,
      login,
      logout,
      data,
      updateSection,
      updateSMTP,
      leads,
      addLead,
      updateLeadStatus
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within AdminProvider');
  return context;
};