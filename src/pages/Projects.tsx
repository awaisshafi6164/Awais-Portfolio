import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

const categories = ['All', 'Web App', 'Mobile', 'E-Commerce', 'SaaS', 'API'];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'E-Commerce',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'SaaS application leveraging GPT-4 for content creation with team collaboration features.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'Tailwind'],
    category: 'SaaS',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Real-time Analytics',
    description: 'Dashboard for monitoring application metrics with live data visualization and alerts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    tags: ['TypeScript', 'D3.js', 'WebSocket', 'Redis'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates and team features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop',
    tags: ['React', 'Firebase', 'Material UI'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Fitness Tracking Mobile',
    description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    category: 'Mobile',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Payment Gateway API',
    description: 'RESTful API for processing payments with multiple provider integrations.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
    tags: ['Node.js', 'Express', 'PostgreSQL'],
    category: 'API',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Unified dashboard for managing multiple social media accounts and analytics.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
    tags: ['Vue.js', 'Python', 'FastAPI'],
    category: 'SaaS',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Online Marketplace',
    description: 'Multi-vendor marketplace with seller dashboards and automated payouts.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop',
    tags: ['Next.js', 'Stripe Connect', 'PostgreSQL'],
    category: 'E-Commerce',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">My Work</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects I've worked on, ranging from full-stack web applications 
              to mobile apps and API development.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground glow'
                    : 'glass hover:border-primary/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard {...project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
