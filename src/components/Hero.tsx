import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Star, Github, Linkedin, Twitter, Download, Mail } from 'lucide-react';

export function Hero() {
  const handleDownload = () => {
    const link = document.createElement('a');
    const filePath = encodeURI('/Dame Abera\'s  CV (10).pdf');
    link.href = filePath;
    link.download = 'Dame_Abera_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Text animation variants
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const descriptionAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleText = "Hi, I'm Dame Abera";
  const subtitleText = "Crafting Digital Experiences";

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 bg-background text-foreground overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/40" />
      
      {/* Improved animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Headline */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-satoshi font-bold leading-tight"
            initial="hidden"
            animate="visible"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 inline-block">
              {titleText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterAnimation}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl md:text-2xl text-foreground/80"
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="inline-block"
            >
              {subtitleText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterAnimation}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Enhanced Badge Section */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex items-center gap-3"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge variant="outline" className="text-base px-4 py-1.5 bg-primary/5 border-primary/20 hover:bg-primary/10 transition-all duration-300">
              Full-Stack Dev
            </Badge>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge variant="outline" className="text-base px-4 py-1.5 bg-primary/5 border-primary/20 hover:bg-primary/10 transition-all duration-300">
              AI Enthusiast
            </Badge>
          </motion.div>
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Star className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>

        {/* Enhanced Subtext */}
        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-2xl text-lg md:text-xl text-center text-foreground/70"
        >
          <motion.span
            variants={descriptionAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="inline-block"
          >
            I build full-stack applications and AI-powered tools with modern web
            technologies. Passionate about creating seamless user experiences and
            innovative solutions.
          </motion.span>
        </motion.p>

        {/* Enhanced Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/Dame-Abera" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/dame-abera-815960258/" },
            { icon: Twitter, href: "https://x.com/dame_abera12" }
          ].map((social, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call-to-Action */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 relative overflow-hidden group"
              asChild
            >
              <a href="mailto:dameabera11@gmail.com" className="relative z-10">
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              variant="outline"
              onClick={handleDownload}
              className="border-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 relative overflow-hidden group"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
              <motion.div
                className="absolute inset-0 bg-primary/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-2 text-foreground/50"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
