import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import Section from '../ui/Section';
import Card from '../ui/Card';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} className="text-primary-600" />,
      title: 'Full Stack Developer',
      description: 'Specialized in building complete web applications from frontend to backend',
    },
    {
      icon: <Briefcase size={24} className="text-primary-600" />,
      title: '5+ Years Experience',
      description: 'Working with startups and established companies on various projects',
    },
    {
      icon: <GraduationCap size={24} className="text-primary-600" />,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and staying updated with industry trends',
    },
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me better"
      className="bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 animate-slide-up">
          <h3 className="text-2xl font-display font-semibold mb-4 text-gray-800">
            My Journey
          </h3>
          
          <div className="space-y-4 text-gray-700">
            {personalInfo.bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        <div className="space-y-6 animate-fade-in">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">{highlight.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;