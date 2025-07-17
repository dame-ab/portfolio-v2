import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Badge } from './ui/badge';
import { Code2, Server, Database, Cpu } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    items: ["React", "TypeScript", "TailwindCSS", "Next.js", "HTML", "CSS"]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "Python", "Express", "NestJS",  "Docker"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"]
  },
  {
    category: "AI/ML",
    icon: <Cpu className="w-6 h-6" />,
    items: [ "OpenAI"]
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const textControls = useAnimation();
  const plusControls = useAnimation();
  const containerControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      containerControls.start({ scale: 1, opacity: 1 });
      textControls.start({
        scale: [1, 1.15, 1],
        textShadow: [
          "0 0 0px rgba(var(--primary), 0)",
          "0 0 30px rgba(var(--primary), 0.4)",
          "0 0 0px rgba(var(--primary), 0)"
        ]
      }, { duration: 3, repeat: 0 });
      plusControls.start({
        scale: [1, 1.3, 1],
        opacity: [0.6, 1, 0.6]
      }, { duration: 2.5, repeat: 0 });

      let startTime: number;
      let animationFrame: number;

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);

        setCount(Math.floor(percentage * end));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animateCount);
        }
      };

      animationFrame = requestAnimationFrame(animateCount);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, duration, isInView, containerControls, textControls, plusControls]);

  return (
    <motion.div
      ref={ref}
      className="relative inline-block"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={containerControls}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.span
        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary"
        animate={textControls}
        transition={{
          duration: 3,
          repeat: 0,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        {count}
      </motion.span>
      <motion.span
        className="text-5xl font-bold text-primary ml-1"
        animate={plusControls}
        transition={{
          duration: 2.5,
          repeat: 0,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        +
      </motion.span>
    </motion.div>
  );
};

const About = () => {
  

  return (
    <section className="py-16 px-4 bg-background relative overflow-hidden pt-16">
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
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
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
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
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
                  src="/image.png"
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
                className="p-6 rounded-xl bg-card/95 border border-border/50 hover:border-primary/50 transition-colors relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.03, 
                  backgroundColor: "var(--card-hover)",
                  boxShadow: "0 0 30px rgba(var(--primary), 0.15)"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.h3 
                  className="text-3xl font-bold text-primary relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <CountUp end={2} duration={3} />
                </motion.h3>
                <motion.p 
                  className="text-foreground font-medium relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Years Experience
                </motion.p>
              </motion.div>
              <motion.div 
                className="p-6 rounded-xl bg-card/95 border border-border/50 hover:border-primary/50 transition-colors relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.03, 
                  backgroundColor: "var(--card-hover)",
                  boxShadow: "0 0 30px rgba(var(--primary), 0.15)"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.h3 
                  className="text-3xl font-bold text-primary relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <CountUp end={20} duration={3.5} />
                </motion.h3>
                <motion.p 
                  className="text-foreground font-medium relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
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
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >I'm a Software Engineering student at AAU, specializing in Full-Stack development. I build scalable, secure, and containerized applications with a focus on fast delivery. 
               
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
