import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-primary text-sm mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-highlight mb-6">Get In Touch</h2>
        <p className="text-slate leading-relaxed mb-12 max-w-lg mx-auto">
          I'm currently looking for new freelance opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a
          href="mailto:awaisshafi.pk@gmail.com"
          className="inline-block px-8 py-5 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-colors"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
