import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-text mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real results from real local businesses
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <div className="mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-text mb-4">Before & After</h3>
                <p className="text-gray-600 mb-6">See how we transformed this restaurant's online presence in just 30 days.</p>
                
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="font-medium text-text w-40">Google Ranking:</span>
                    <span className="flex items-center"><span className="text-error mr-2">Page 3</span> → <span className="text-success ml-2">Top 3 results</span></span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium text-text w-40">Website Traffic:</span>
                    <span className="flex items-center"><span className="text-error mr-2">210/mo</span> → <span className="text-success ml-2">1,450/mo</span></span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium text-text w-40">Monthly Leads:</span>
                    <span className="flex items-center"><span className="text-error mr-2">8-12</span> → <span className="text-success ml-2">35-40</span></span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary-light flex items-center justify-center p-8">
                <img 
                  src="https://i.imghippo.com/files/KFRn4652FgS.jpg" 
                  alt="Before and After results" 
                  className="rounded-lg shadow-md max-w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;