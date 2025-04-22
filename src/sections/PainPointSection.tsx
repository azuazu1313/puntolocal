import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { CheckCircle2, X } from 'lucide-react';

const PainPointSection: React.FC = () => {
  const painPoints = [
    "Struggling to be found on Google Maps",
    "Inconsistent social media presence",
    "Outdated or ineffective landing pages",
    "No time to manage online profiles",
    "Losing customers to more visible competitors"
  ];
  
  const solutions = [
    "Optimized Google Business Profile",
    "Professional social media management",
    "High-converting landing pages",
    "Done-for-you updates and maintenance",
    "Outranking competitors with proven strategies"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold text-text mb-4"
          >
            Trouble getting found or staying consistent online?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[18px] text-gray-600 max-w-3xl mx-auto"
          >
            We make you stand out and bring in leads—no effort required.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md border border-red-100"
          >
            <h3 className="text-2xl font-semibold text-error mb-6 flex items-center">
              <X size={24} className="mr-2 text-error" />
              Common Pain Points
            </h3>
            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <X size={20} className="text-error flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md border border-success-light"
          >
            <h3 className="text-2xl font-semibold text-success mb-6 flex items-center">
              <CheckCircle2 size={24} className="mr-2 text-success" />
              Our Solutions
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 size={20} className="text-success flex-shrink-0 mr-3 mt-1" />
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <div className="text-center">
          <Button size="large" className="shadow-lg">
            Get My Custom Growth Plan
          </Button>
          <p className="text-sm text-gray-500 mt-4">No obligation. Free assessment included.</p>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;