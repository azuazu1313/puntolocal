export interface Service {
  title: string;
  price: string;
  description: string;
  benefits: string[];
}

export interface ServiceCategory {
  title: string;
  description?: string;
  problem?: string;
  solution?: string;
  ctaText?: string;
  ctaLink?: string;
  themeColor?: string;
  services: Service[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}