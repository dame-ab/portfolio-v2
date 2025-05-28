import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Code2, Server, Database, Cpu } from 'lucide-react';

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
      staggerChildren: 0.1
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

const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
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
                <img
                  src="/oie_PVA3ox0dYIei.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
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
                className="p-4 rounded-xl bg-card border border-border"
                whileHover={{ scale: 1.02, backgroundColor: "var(--card-hover)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-2xl font-bold text-primary">2+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </motion.div>
              <motion.div 
                className="p-4 rounded-xl bg-card border border-border"
                whileHover={{ scale: 1.02, backgroundColor: "var(--card-hover)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-2xl font-bold text-primary">20+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
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
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Software Engineering student at AAU, specializing in backend
                development. Passionate about building real‑world software,
                integrating AI, and collaborating on open‑source projects.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold">Skills & Expertise</h3>
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.category}
                    className="p-4 rounded-xl bg-card border border-border"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "var(--card-hover)",
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {skill.icon}
                      <h4 className="font-semibold">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="outline">
                            {item}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
