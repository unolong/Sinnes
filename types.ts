export type ProjectCategory = 
  | 'all'
  | 'tables'
  | 'cabinets'
  | 'built-in'
  | 'beds'
  | 'kitchens'
  | 'office'
  | 'kids'
  | 'outdoor';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: string;
  description: string;
  details: string; // e.g., "Eiche, Dresden"
  features: string[]; // For modal
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkCategory: ProjectCategory;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}