import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to Look Legit, Show Up First, and Convert More—Without Lifting a Finger?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white opacity-90 mb-6"
            >
              Get a custom growth plan for your business with actionable steps and pricing.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                <p className="text-white opacity-90">No obligation or pressure</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                <p className="text-white opacity-90">Clear, transparent pricing</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                <p className="text-white opacity-90">Fast response guaranteed</p>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-white mr-2 mt-1 flex-shrink-0" />
                <p className="text-white opacity-90">Implementation within 24-48h</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-text mb-4">Get Your Growth Plan</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Your Business"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <Button className="w-full flex items-center justify-center">
                Get My Free Growth Plan
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                We'll respond within 24 hours with your custom plan.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;