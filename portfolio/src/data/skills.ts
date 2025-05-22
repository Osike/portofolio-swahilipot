import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 75 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Firebase', level: 70 },
      { name: 'Redis', level: 60 },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Communication', level: 85 },
      { name: 'Team Collaboration', level: 90 },
      { name: 'Agile Methodology', level: 80 },
    ],
  },
];