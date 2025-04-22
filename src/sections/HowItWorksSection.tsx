import React from 'react';
import { motion } from 'framer-motion';
import { steps } from '../data/steps';
import StepCard from '../components/StepCard';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-text mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our simple, 3-step process to boost your local business visibility
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-primary-light rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-primary mb-4">Ready to Get Started?</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Book your free strategy call today. No obligation, just a clear plan for your business growth.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition-colors">
            Book My Free Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;