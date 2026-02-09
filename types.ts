export interface NavItem {
  label: string;
  href: string;
}

export interface Package {
  id: string; // Added ID for editing
  title: string;
  duration: string;
  description: string;
  features: string[];
  recommendedFor: string;
  iconName: 'Monitor' | 'Cpu' | 'Briefcase' | 'Users'; // String based icon reference
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PricingTier {
  quantity: string;
  discount: number;
  label: string;
}

// CMS Data Structures
export interface SMTPSettings {
  host: string;
  port: string;
  user: string;
  pass: string;
  secure: boolean;
  receiverEmail: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  company: string;
  packageInterest: string;
  message: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'closed';
}

export interface HeroSectionData {
  title: string;
  highlight: string;
  subtitle: string;
  badge: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  companyName: string;
}

export interface AppData {
  hero: HeroSectionData;
  problems: string[];
  solutions: string[];
  packages: Package[];
  process: ProcessStep[];
  pricing: PricingTier[];
  contact: ContactInfo;
  smtp: SMTPSettings;
}