import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Implemented user authentication, product catalog, shopping cart, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A responsive task management application with drag-and-drop functionality, user authentication, and real-time updates using WebSockets.',
    image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Drag & Drop API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/taskmanager',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that provides current conditions and forecasts for cities worldwide, with a focus on data visualization and user experience.',
    image: 'https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/weather',
  },
  {
    id: '4',
    title: 'Personal Blog',
    description: 'A blog platform with a custom CMS, markdown support, and a responsive design. Includes features like categorization, search, and social sharing.',
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/blog',
  },
];