import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Palette, 
  Headphones,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: 'Web Development',
    description: 'Building modern, responsive web applications using cutting-edge technologies and best practices.',
    icon: Globe,
    features: [
      'React / Next.js Applications',
      'Full-Stack Development',
      'Progressive Web Apps',
      'Performance Optimization',
    ],
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications that deliver native-like experiences.',
    icon: Smartphone,
    features: [
      'React Native Apps',
      'iOS & Android',
      'App Store Deployment',
      'Push Notifications',
    ],
  },
  {
    title: 'Backend & API',
    description: 'Scalable backend systems and RESTful APIs that power your applications.',
    icon: Database,
    features: [
      'Node.js / Python APIs',
      'Database Design',
      'Authentication Systems',
      'Third-party Integrations',
    ],
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure setup, deployment, and DevOps practices.',
    icon: Cloud,
    features: [
      'AWS / GCP / Azure',
      'CI/CD Pipelines',
      'Docker & Kubernetes',
      'Serverless Architecture',
    ],
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality.',
    icon: Palette,
    features: [
      'Interface Design',
      'User Research',
      'Prototyping',
      'Design Systems',
    ],
  },
  {
    title: 'Consulting',
    description: 'Technical guidance and strategic advice for your digital initiatives.',
    icon: Headphones,
    features: [
      'Architecture Review',
      'Code Audits',
      'Tech Stack Selection',
      'Team Training',
    ],
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your needs, goals, and vision through detailed discussions.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Creating a comprehensive roadmap with timelines and milestones.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Building your solution with regular updates and feedback loops.',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Launching your project with thorough testing and documentation.',
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Services</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              What I <span className="text-gradient">Offer</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, I provide end-to-end development services 
              tailored to your specific needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Process</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
                How I Work
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative p-6 glass rounded-2xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-5xl font-display font-bold text-primary/20">{item.step}</span>
                  <h3 className="text-lg font-display font-bold mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Me */}
          <motion.div
            className="glass rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Me</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">
                  Why Work With Me?
                </h2>
                <ul className="space-y-4">
                  {[
                    'Clean, maintainable code that scales',
                    'Clear communication throughout the project',
                    'On-time delivery with quality assurance',
                    'Post-launch support and maintenance',
                    'Competitive rates with flexible terms',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-left">
                <p className="text-muted-foreground mb-8">
                  Ready to bring your ideas to life? Let's discuss your project and 
                  create something amazing together.
                </p>
                <Link to="/contact">
                  <motion.button
                    className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium glow inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start a Project
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
