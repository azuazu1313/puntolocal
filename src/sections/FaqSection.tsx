import React from 'react';
import { motion } from 'framer-motion';
import { faqs } from '../data/faqs';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import { ShieldCheck } from 'lucide-react';

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-text mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have questions? We have answers.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion items={faqs} />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <ShieldCheck size={48} className="text-success" />
          </div>
          <h3 className="text-2xl font-semibold text-text mb-4">100% Satisfaction Guarantee</h3>
          <p className="text-gray-600 mb-6">
            If you're not completely satisfied with our work, we'll revise it until you are. For ongoing services, you can cancel anytime with 30 days' notice.
          </p>
          <Button size="large">
            Book My Free Strategy Call
          </Button>
          <p className="text-sm text-gray-500 mt-4">No obligation. Fast response guaranteed.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;