import React from 'react';
import { Check } from 'lucide-react';
import { Service } from '../types';
import Button from './Button';

interface ServiceCardProps {
  service: Service;
  themeColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, themeColor = 'default' }) => {
  // Function to get the theme-specific styles
  const getThemeStyles = () => {
    switch (themeColor) {
      case 'blue':
        return {
          border: 'border-blue-200',
          title: 'text-blue-800',
          price: 'text-blue-700',
          icon: 'text-blue-600',
          button: 'border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white'
        };
      case 'purple':
        return {
          border: 'border-purple-200',
          title: 'text-purple-800',
          price: 'text-purple-700',
          icon: 'text-purple-600',
          button: 'border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white'
        };
      case 'green':
        return {
          border: 'border-green-200',
          title: 'text-green-800',
          price: 'text-green-700',
          icon: 'text-green-600',
          button: 'border-green-600 text-green-700 hover:bg-green-600 hover:text-white'
        };
      default:
        return {
          border: 'border-gray-100',
          title: 'text-text',
          price: 'text-primary',
          icon: 'text-primary',
          button: 'border-primary text-primary hover:bg-primary hover:text-white'
        };
    }
  };

  const theme = getThemeStyles();

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border ${theme.border} flex flex-col h-full`}>
      <div className="mb-6">
        <h3 className={`text-xl font-semibold mb-2 ${theme.title}`}>{service.title}</h3>
        <p className={`${theme.price} font-bold text-2xl mb-4`}>{service.price}</p>
        <p className="text-gray-600 mb-4">{service.description}</p>
      </div>
      
      <div className="mt-auto">
        <h4 className="font-medium text-text mb-3">Benefits:</h4>
        <ul className="space-y-2 mb-6">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Check size={20} className={`${theme.icon} flex-shrink-0 mr-2 mt-0.5`} />
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-3 px-4 rounded-md font-medium border-2 transition-colors ${theme.button}`}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;