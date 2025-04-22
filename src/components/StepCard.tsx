import React from 'react';
import { Step } from '../types';
import { motion } from 'framer-motion';

interface StepCardProps {
  step: Step;
  isLast: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, isLast }) => {
  return (
    <div className="flex flex-col md:flex-row items-start relative">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl z-10"
      >
        {step.number}
      </motion.div>
      
      {!isLast && (
        <div className="absolute left-6 top-12 h-full w-0.5 bg-primary-light hidden md:block" />
      )}
      
      <div className="mt-4 md:mt-0 md:ml-6 pb-8 md:pb-12">
        <h3 className="text-xl font-semibold mb-2 text-text">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </div>
  );
};

export default StepCard;