import React from 'react';
import { skillCategories } from '../../data/skills';
import Section from '../ui/Section';
import SkillBar from '../ui/SkillBar';

const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      title="My Skills"
      subtitle="Expertise and technologies I work with"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {skillCategories.map((category, index) => (
          <div 
            key={category.name} 
            className="animate-slide-up" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">
              {category.name}
            </h3>
            
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;