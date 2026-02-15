export interface ServiceRole {
  role: string;
  people: string[];
}

export interface ServiceDate {
  date: string; // e.g., "Feb 1"
  roles: ServiceRole[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  type: 'virtual' | 'presencial' | 'mixto';
}

export interface Reflection {
  title: string;
  author: string;
  scripture: string;
  excerpt: string;
  content: string[];
  mainQuote: string;
}

export interface Book {
  title: string;
  author: string;
  description: string;
  coverColor: string;
  image?: string;
}

export interface Birthday {
  date: string;
  names: string[];
}

export interface PrayerRequest {
  category: string;
  items: string[];
}