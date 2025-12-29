import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const featuredProjects = [
  {
    title: 'POS System',
    description:
      'Built a comprehensive POS System used by hotels, restaurants, and traders. Features include fast and easy billing, real-time stock management, daily sales reports, customer balance tracking, and integration with Pakistan Revenue Authority (PRA).',
    image: 'assets/projects/pos-system-ss.png',
    tech: ['React TS', 'MySQL', 'PHP', 'Python'],
    github: '#',
    external: '#',
  },
  {
    title: 'Carer Pharmaceutical',
    description:
      'Developed a professional website for Carer Pharmaceutical to showcase their products, services, and company information. Features a modern, responsive design with product catalog, company profile, and contact information.',
    image: 'assets/projects/carer-pharma-ss.png',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    github: '#',
    external: 'https://awaisshafi6164.github.io/carer-pharma-website/',
  },
  {
    title: 'PMS SAAS Application',
    description:
      'Deveoloped a web-based Property Management System (PMS) SAAS application to streamline property management tasks. Features include tenant management, rent tracking, maintenance scheduling, and financial reporting.',
    image: 'assets/projects/PMS_SAAS_Application.png',
    tech: ['React TS', 'Tailwind CSS', 'Supabase'],
    github: '#',
    external: 'https://awaisshafi6164.github.io/property-management-system/',
  },
  {
    title: 'Everyday Chronicles',
    description:
      'Created a personalized automated diary app that displays daily activities including location tracking, mood monitoring, call logs with locations, and mobile usage statistics. Provides weekly insights to help users understand their daily patterns.',
    image: 'assets/projects/everyday-chronciles-ss.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'External-APIs', 'AI', 'Python'],
    github: '#',
    external: '#',
  },
  {
    title: 'ShopSync App',
    description:
      'Developing a mobile application to off multiple alarms once by its categories. Features include setting multiple alarms, categorizing them, and a user-friendly interface for easy management.',
    image: 'assets/projects/shopsync-ss.png',
    tech: ['Flutter', 'Dart', 'Firebase', 'External-APIs'],
    github: '#',
    external: '#',
  },
];

const otherProjects = [
  {
    title: 'Desktop Chat Application',
    description: 'Built a desktop chat application using Qt C++ with real-time messaging capabilities during internship at RWR Pvt Ltd.',
    tech: ['Qt C++', 'C++'],
    github: '#',
    external: '#',
  },
  {
    title: 'Word Add-In',
    description: 'Developing a Word Add-In to help customers design Word documents more efficiently at Elixir Technologies.',
    tech: ['C++', 'React TS', 'Office API'],
    github: '#',
    external: '#',
  },
  {
    title: 'Google Maps Integration',
    description: 'Worked with Google Maps API to implement location-based features in various applications.',
    tech: ['Google Maps API', 'JavaScript'],
    github: '#',
    external: '#',
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-highlight mb-10">
          <span className="font-mono text-primary text-xl">03.</span>
          Some Things I've Built
          <span className="hidden sm:block h-px bg-navy-lighter flex-1 max-w-xs" />
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`relative grid md:grid-cols-12 items-center gap-4 ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 relative group ${
                  index % 2 === 1 ? 'md:order-2 md:col-start-6' : ''
                }`}
              >
                <a href={project.external} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden rounded">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/30 hover:bg-transparent transition-colors duration-300" />
                  </div>
                </a>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-5 md:absolute md:max-w-md ${
                  index % 2 === 1 ? 'md:left-0 md:text-left' : 'md:right-0 md:text-right'
                }`}
              >
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-highlight mb-4">
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="bg-navy-light p-5 rounded-md shadow-xl mb-4 relative z-10">
                  <p className="text-slate text-sm leading-relaxed text-justify">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 font-mono text-sm text-slate mb-4 ${
                    index % 2 === 1 ? '' : 'md:justify-end'
                  }`}
                >
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 1 ? '' : 'md:justify-end'}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight hover:text-primary transition-colors"
                    aria-label="External Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-center text-2xl font-bold text-highlight mb-2">
            Other Noteworthy Projects
          </h3>
          <a
            href="#"
            className="block text-center font-mono text-primary text-sm mb-12 hover:underline"
          >
            view the archive
          </a>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-navy-light p-7 rounded-md hover:-translate-y-2 transition-transform duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <Folder className="text-primary" size={40} />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-primary transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-highlight mb-3 hover:text-primary transition-colors">
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h4>
                <p className="text-slate text-sm leading-relaxed mb-6 flex-1 text-justify">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Work;
