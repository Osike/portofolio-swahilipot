import React, { useState } from 'react';
import { projects } from '../../data/projects';
import Section from '../ui/Section';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);
  
  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Check out some of my recent work"
      className="bg-white"
    >
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 bg-gray-100 rounded-lg">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-white shadow-sm text-gray-800' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === 'featured' 
                ? 'bg-white shadow-sm text-gray-800' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;