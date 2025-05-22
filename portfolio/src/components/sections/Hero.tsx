import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-3/5 mt-10 md:mt-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-primary-600">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 mt-2">
              {personalInfo.title}
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl">
              {personalInfo.tagline}
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              
              {personalInfo.resumeUrl && (
                <Button 
                  variant="outline" 
                  size="lg"
                  as="a" 
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <FileText size={18} className="mr-2" />
                  Download Resume
                </Button>
              )}
            </div>
            
            <SocialLinks className="flex mt-8 space-x-4" />
          </div>
          
          <div className="md:w-2/5 flex justify-center animate-slide-down">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt={personalInfo.name}
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="text-primary-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;