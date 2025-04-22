import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-md p-6 border border-primary-light relative"
    >
      <Quote 
        size={30} 
        className="text-primary-light absolute top-4 right-4 opacity-40" 
      />
      <div className="mb-4">
        <p className="text-gray-700 italic relative z-10">{testimonial.quote}</p>
      </div>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-text">{testimonial.author}</p>
        <p className="text-gray-500 text-sm">{testimonial.role}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;