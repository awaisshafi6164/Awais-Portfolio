import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <motion.p
        className="font-mono text-primary text-sm md:text-base mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-highlight mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Muhammad Awais.
      </motion.h1>

      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I build things for the web.
      </motion.h2>

      <motion.p
        className="text-slate max-w-xl text-base md:text-lg leading-relaxed mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I'm a software engineer specializing in building exceptional digital experiences. 
        Currently, I'm working full-time while also taking on freelance projects to help 
        businesses and startups bring their ideas to life.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="#work"
          className="inline-block px-7 py-4 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-colors"
        >
          Check out my work!
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
