import { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Elixir Technologies',
    title: 'Software Engineer',
    url: 'https://elixir.com',
    range: 'June 2025 - Present',
    duties: [
      'Working as a full stack engineer using C++ and ReactTS to improve Elixir products',
      'Developing a Word Add-In to help customers design Word documents more efficiently',
    ],
  },
  {
    company: 'Elixir Technologies',
    title: 'Associate Software Engineer',
    url: 'https://elixir.com',
    range: 'July 2024 - June 2025',
    duties: [
      'Working as a backend engineer using C++ to improve Elixir products',
      'Resolved critical memory problems that affected over 60 projects in Linux, improving overall system performance',
      'Created a new technique to debug cloud issues, reducing testing time from 2 hours to 10 minutes, which speeds up development and problem-solving',
    ],
  },
  {
    company: 'RWR Pvt Ltd',
    title: 'Intern Software Engineer',
    url: 'https://www.linkedin.com/company/rwr-private-limited/?originalSubdomain=pk',
    range: 'August 2022 - October 2022',
    duties: [
      'Solved C/C++ programs from different real-world problems',
      'Created a desktop chat application using Qt C++',
      'Worked with Google Maps API for location-based features',
    ],
  },
   {
    company: 'Upwork',
    title: 'Freelancer',
    url: 'https://www.upwork.com/freelancers/~010ca2cc66a2a414e1?mp_source=share',
    range: 'July 2024 - Present',
    duties: [
      'Developed Portfolio Website',
      'Developed Pharmacy Website',
      'Customer Support',
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-highlight mb-10">
          <span className="font-mono text-primary text-xl">02.</span>
          Where I've Worked
          <span className="hidden sm:block h-px bg-navy-lighter flex-1 max-w-xs" />
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l-2 border-navy-lighter" style={{ height: 'fit-content' }}>
            {experiences.map((exp, index) => (
              <button
                key={`${exp.company}-${index}`}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 text-sm font-mono whitespace-nowrap text-left transition-all duration-200 ${
                  activeTab === index
                    ? 'text-primary bg-navy-light md:border-l-2 md:-ml-0.5 border-primary'
                    : 'text-slate hover:text-primary hover:bg-navy-light/50'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-4 md:py-0 min-h-[280px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl text-highlight font-medium mb-1">
                {experiences[activeTab].title}{' '}
                <a
                  href={experiences[activeTab].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @ {experiences[activeTab].company}
                </a>
              </h3>
              <p className="font-mono text-slate text-sm mb-6">
                {experiences[activeTab].range}
              </p>
              <ul className="space-y-4">
                {experiences[activeTab].duties.map((duty, index) => (
                  <li key={index} className="flex gap-4 text-slate text-sm leading-relaxed">
                    <span className="text-primary mt-1.5">▹</span>
                    {duty}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
