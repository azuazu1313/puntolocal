import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Star, CheckCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative pt-32 pb-24 min-h-[90vh] flex items-center text-white"
      style={{
        backgroundImage: `url('/assets/firsttry_hero.webp')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#8146EC',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="md:max-w-3xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[45px] text-center md:text-left lg:text-left md:text-5xl lg:text-5xl font-bold leading-tight mb-4">
              Local Growth, Done for You
            </h1>
            
            <h2 className="text-[22px] text-center md:text-left lg:text-left md:text-2xl font-medium mb-8 text-purple-100">
              We manage the digital grind—<br/>so you don't have to.
            </h2>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg mb-8 max-w-md border border-white/20"
            >
              <div className="flex items-start space-x-3">
                <CheckCircle size={24} className="text-white mt-1 flex-shrink-0" />
                <p className="text-white">
                  "We saw a 3x increase in bookings after just 2 weeks with their Google Profile optimization!"
                </p>
              </div>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <Button 
                variant="outline" 
                size="large" 
                className="border-white text-white hover:bg-white hover:text-[#7F59FF] transition-all"
              >
                Book My Free Strategy Call
              </Button>
              <Button 
                variant="primary" 
                size="large" 
                className="bg-purple-100 text-[#7F59FF] hover:bg-white shadow-lg"
              >
                Get My Custom Growth Plan
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
                <span className="ml-2 text-white font-medium">
                  4.9/5 from 107 reviews
                </span>
              </div>
              
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-400 mr-2" />
                <span className="text-white">Fast response guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;