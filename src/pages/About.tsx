import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import Layout from '@/components/Layout';
import SkillBar from '@/components/SkillBar';
import { AnimatedText } from '@/components/AnimatedText';

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js / Express', level: 88 },
  { name: 'Python / Django', level: 85 },
  { name: 'PostgreSQL / MongoDB', level: 82 },
  { name: 'AWS / Cloud Services', level: 80 },
  { name: 'Docker / Kubernetes', level: 75 },
  { name: 'GraphQL', level: 78 },
];

const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp Inc.',
    period: '2022 - Present',
    description: 'Leading development of scalable microservices architecture and mentoring junior developers.',
    type: 'work',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Built client-facing applications and internal tools using React and Node.js.',
    type: 'work',
  },
  {
    title: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2019 - Present',
    description: 'Delivering custom software solutions for startups and small businesses worldwide.',
    type: 'freelance',
  },
  {
    title: 'Computer Science Degree',
    company: 'State University',
    period: '2015 - 2019',
    description: 'Bachelor of Science in Computer Science with focus on Software Engineering.',
    type: 'education',
  },
];

const About = () => {
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
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Me</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
              Crafting Digital <span className="text-gradient">Excellence</span>
            </h1>
          </motion.div>

          {/* Bio Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden glass">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold">5+</p>
                    <p className="text-sm text-muted-foreground">Years Coding</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="flex flex-col justify-center">
              <AnimatedText delay={0.3}>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Passionate Developer, Problem Solver
                </h2>
              </AnimatedText>
              
              <AnimatedText delay={0.4}>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a software engineer with over 5 years of experience building web applications 
                  and digital products. My journey started with curiosity about how things work on 
                  the internet, and it has evolved into a passion for creating elegant solutions 
                  to complex problems.
                </p>
              </AnimatedText>
              
              <AnimatedText delay={0.5}>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Currently working full-time at a tech company while also taking on freelance 
                  projects. I believe in writing clean, maintainable code and staying up-to-date 
                  with the latest technologies and best practices.
                </p>
              </AnimatedText>

              <AnimatedText delay={0.6}>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge through tech articles and mentoring.
                </p>
              </AnimatedText>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-24">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Expertise</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
                Technical Skills
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Journey</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
                Experience & Education
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {experience.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative pl-8 pb-12 last:pb-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                  
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  />

                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {item.type === 'education' ? (
                          <GraduationCap className="w-5 h-5 text-primary" />
                        ) : item.type === 'freelance' ? (
                          <Award className="w-5 h-5 text-primary" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="text-xs text-primary font-medium mb-1">{item.period}</p>
                        <h3 className="text-lg font-display font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                        <p className="text-sm text-muted-foreground/80">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
