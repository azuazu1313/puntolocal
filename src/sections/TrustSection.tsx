import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, Users } from 'lucide-react';

const TrustSection: React.FC = () => {
  const trustItems = [
    {
      icon: <Award size={32} className="text-primary" />,
      title: "Certified Experts",
      description: "Google & Meta certified marketing professionals with local business expertise"
    },
    {
      icon: <ShieldCheck size={32} className="text-primary" />,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee on all our services and deliverables"
    },
    {
      icon: <Clock size={32} className="text-primary" />,
      title: "Fast Response",
      description: "24-hour response time, with most work completed within 2-5 business days"
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: "Proven Results",
      description: "Over 200+ local businesses helped with measurable growth in traffic and leads"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;