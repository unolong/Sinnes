export type Category = 'Alle' | 'Tische' | 'Schränke & Regale' | 'Betten' | 'Küchen' | 'Außenbereich';

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  text: string;
  imageUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Table' | 'Cabinet' | 'Bed' | 'Utensils' | 'Trees' | 'Hammer';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}