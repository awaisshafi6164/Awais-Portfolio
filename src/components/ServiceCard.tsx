import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  index: number;
}

const ServiceCard = ({ title, description, icon: Icon, features, index }: ServiceCardProps) => {
  return (
    <motion.div
      className="group relative p-8 rounded-2xl glass overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <motion.div
        className="relative w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        <Icon className="w-8 h-8 text-primary" />
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <motion.li
            key={i}
            className="flex items-center gap-3 text-sm text-muted-foreground"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + i * 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {feature}
          </motion.li>
        ))}
      </ul>

      {/* Border gradient on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-colors pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;
