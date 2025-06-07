import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Badge } from './ui/badge';
import { Code2, Server, Database, Cpu, Download, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    items: ["React", "TypeScript", "TailwindCSS", "Next.js"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "Python", "Express", "Django"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"]
  },
  {
    category: "AI/ML",
    icon: <Cpu className="w-6 h-6" />,
    items: ["TensorFlow", "OpenAI", "NLP", "Computer Vision"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

interface CountUpProps {
  end: number;
  duration?: number;
}

const CountUp = ({ end, duration = 2 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(percentage * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <motion.span>{count}+</motion.span>;
};

const About = () => {
  

  return (
    <section className="py-16 px-4 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Image and Stats */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border border-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src="/oie_PVA3ox0dYIei.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/400";
                  }}
                />
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <motion.div 
                className="p-6 rounded-xl bg-card/95 border border-border/50 hover:border-primary/50 transition-colors"
                whileHover={{ 
                  scale: 1.02, 
                  backgroundColor: "var(--card-hover)",
                  boxShadow: "0 0 20px rgba(var(--primary), 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.h3 
                  className="text-3xl font-bold text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <CountUp end={2} duration={2} />
                </motion.h3>
                <motion.p 
                  className="text-foreground font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Years Experience
                </motion.p>
              </motion.div>
              <motion.div 
                className="p-6 rounded-xl bg-card/95 border border-border/50 hover:border-primary/50 transition-colors"
                whileHover={{ 
                  scale: 1.02, 
                  backgroundColor: "var(--card-hover)",
                  boxShadow: "0 0 20px rgba(var(--primary), 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.h3 
                  className="text-3xl font-bold text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <CountUp end={20} duration={2.5} />
                </motion.h3>
                <motion.p 
                  className="text-foreground font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Projects Completed
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - About Text and Skills */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* About Text */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.h2 
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </motion.h2>
              <motion.p 
                className="text-lg text-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm a Software Engineering student at AAU, specializing in backend
                development. Passionate about building real‑world software,
                integrating AI, and collaborating on open‑source projects.
              </motion.p>
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                
                
              </motion.div>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.h3 
                className="text-2xl font-semibold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Skills & Expertise
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    className="p-4 rounded-xl bg-card/95 border border-border/50 hover:border-primary/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: "var(--card-hover)",
                      boxShadow: "0 0 20px rgba(var(--primary), 0.1)"
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-foreground">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge 
                          key={item}
                          variant="outline"
                          className="bg-background/95 text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-colors"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
