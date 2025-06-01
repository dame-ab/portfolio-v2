import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Star, Github, Linkedin, Twitter, Download, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 bg-background text-foreground overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/40" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
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
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-satoshi font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Hi, I'm Dame Abera
            </span>
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl md:text-2xl text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Crafting Digital Experiences
          </motion.p>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex items-center gap-3"
        >
          <Badge variant="outline" className="text-base px-4 py-1.5 bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">
            Full-Stack Dev
          </Badge>
          <Badge variant="outline" className="text-base px-4 py-1.5 bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">
            AI Enthusiast
          </Badge>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-center text-foreground/70"
        >
          I build full-stack applications and AI-powered tools with modern web
          technologies. Passionate about creating seamless user experiences and
          innovative solutions.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-primary/10 hover:text-primary transition-colors"
            asChild
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-primary/10 hover:text-primary transition-colors"
            asChild
          >
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-primary/10 hover:text-primary transition-colors"
            asChild
          >
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="mailto:dameabera11@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:text-primary"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-foreground/50"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
