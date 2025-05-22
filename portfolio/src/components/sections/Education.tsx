import React from 'react';
import { educationHistory } from '../../data/education';
import Section from '../ui/Section';
import Card from '../ui/Card';

const Education: React.FC = () => {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="My academic background and certifications"
      className="bg-gray-50"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        {educationHistory.map((education, index) => (
          <Card 
            key={index} 
            className="p-6 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row">
              {education.logo && (
                <div className="md:w-1/4 mb-4 md:mb-0 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img 
                      src={education.logo} 
                      alt={education.institution} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              <div className={education.logo ? 'md:w-3/4' : 'w-full'}>
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {education.institution}
                  </h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">
                    {education.startDate} - {education.endDate}
                  </span>
                </div>
                
                <div className="mb-2">
                  <span className="text-lg font-medium text-gray-700">
                    {education.degree} in {education.field}
                  </span>
                </div>
                
                {education.description && (
                  <p className="text-gray-600">{education.description}</p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Education;