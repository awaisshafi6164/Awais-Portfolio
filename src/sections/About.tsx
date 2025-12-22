import { motion } from 'framer-motion';

const technologies = [
  'C++',
  'Python',
  'React TS',
  'Flutter & Dart',
  'Docker & AWS',
  'Git & Linux',
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-highlight mb-10">
          <span className="font-mono text-primary text-xl">01.</span>
          About Me
          <span className="hidden sm:block h-px bg-navy-lighter flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-slate leading-relaxed text-justify">
              Hello! My name is <span className="text-highlight font-medium">Muhammad Awais Shafi</span> and 
              I'm a Software Engineer at <span className="text-primary font-medium">Elixir Technologies</span>, 
              specializing in backend development with C++ and ReactTS. I focus on building efficient, 
              scalable solutions and optimizing system performance.
            </p>

            <p className="text-slate leading-relaxed text-justify">
              I've resolved critical memory issues affecting 60+ Linux projects and developed debugging 
              techniques that reduced testing time from 2 hours to 10 minutes. Currently working on a 
              Word Add-In and personal projects including mobile apps and POS systems.
            </p>

            <p className="text-slate leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-5">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 font-mono text-sm text-slate"
                >
                  <span className="text-primary">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="absolute top-3 left-5 w-full h-full border-2 border-primary rounded z-0 group-hover:top-3 group-hover:left-3 transition-all duration-300" />
            <div className="relative z-10">
              <div className="relative rounded overflow-hidden">
                <img
                  src="assets/awais_about.jpeg"
                  alt="Profile"
                  className="rounded mix-blend-multiply grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-primary/60 mix-blend-screen rounded group-hover:bg-transparent transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
