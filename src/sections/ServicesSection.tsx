import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const ServicesSection: React.FC = () => {
  // Function to get the background color based on theme
  const getThemeStyles = (theme: string | undefined) => {
    switch (theme) {
      case 'blue':
        return {
          background: 'bg-blue-50',
          border: 'border-blue-200',
          heading: 'text-blue-700',
          button: 'bg-blue-600 hover:bg-blue-700 text-white',
          problem: 'text-blue-600',
          accent: 'bg-blue-600'
        };
      case 'purple':
        return {
          background: 'bg-purple-50',
          border: 'border-purple-200',
          heading: 'text-purple-700',
          button: 'bg-purple-600 hover:bg-purple-700 text-white',
          problem: 'text-purple-600',
          accent: 'bg-purple-600'
        };
      case 'green':
        return {
          background: 'bg-green-50',
          border: 'border-green-200',
          heading: 'text-green-700',
          button: 'bg-green-600 hover:bg-green-700 text-white',
          problem: 'text-green-600',
          accent: 'bg-green-600'
        };
      default:
        return {
          background: 'bg-white',
          border: 'border-gray-200',
          heading: 'text-primary',
          button: 'bg-primary hover:bg-primary-dark text-white',
          problem: 'text-primary',
          accent: 'bg-primary'
        };
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-text mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Professional, done-for-you digital marketing services tailored for local businesses
          </motion.p>
        </div>

        <div className="space-y-24">
          {services.map((category, categoryIndex) => {
            const theme = getThemeStyles(category.themeColor);
            
            return (
              <div 
                key={categoryIndex} 
                id={category.ctaLink?.replace('#', '') || `service-${categoryIndex}`}
                className={`rounded-2xl ${theme.background} ${theme.border} border p-8 shadow-sm`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div>
                    <div className={`w-16 h-1 ${theme.accent} mb-6 rounded-full`}></div>
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className={`text-2xl md:text-3xl font-bold mb-6 ${theme.heading}`}
                    >
                      {category.title}
                    </motion.h3>

                    {category.problem && (
                      <p className={`text-lg md:text-xl font-semibold mb-4 ${theme.problem}`}>
                        {category.problem}
                      </p>
                    )}
                    
                    {category.solution && (
                      <p className="text-base md:text-lg text-gray-700 mb-8">
                        {category.solution}
                      </p>
                    )}
                    
                    {category.ctaText && (
                      <button 
                        className={`py-3 px-8 rounded-lg font-medium shadow-md transition-all ${theme.button} transform hover:scale-105`}
                      >
                        {category.ctaText}
                      </button>
                    )}
                  </div>
                  
                  <div className="hidden lg:block">
                    <div className="relative h-full">
                      {categoryIndex === 0 && (
                        <img 
                          src="https://i.imghippo.com/files/G5r9T1245JH.webp" 
                          alt="Google Business Profile Optimization" 
                          className="rounded-lg shadow-lg object-cover h-full w-full"
                        />
                      )}
                      {categoryIndex === 1 && (
                        <img 
                          src="https://i.imghippo.com/files/l9kTV2346RL.webp" 
                          alt="Social Media Management" 
                          className="rounded-lg shadow-lg object-cover h-full w-full"
                        />
                      )}
                      {categoryIndex === 2 && (
                        <img 
                          src="https://i.imghippo.com/files/pLSw9832jkL.webp" 
                          alt="Landing Page Design" 
                          className="rounded-lg shadow-lg object-cover h-full w-full"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    >
                      <ServiceCard 
                        service={service} 
                        themeColor={category.themeColor || 'default'} 
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;