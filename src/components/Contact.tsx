import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Mail, Github, Linkedin, Twitter, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (!formRef.current) return;

      const formData = new FormData(formRef.current);
      const templateParams = {
        from_name: formData.get('from_name'),
        from_email: formData.get('reply_to'),
        reply_to: formData.get('reply_to'),
        message: formData.get('message'),
        to_name: 'Dame Abera',
        to_email: 'dameabera11@gmail.com'
      };

      console.log('Sending email with params:', templateParams);

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Get In Touch
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:dameabera11@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  dameabera11@gmail.com
                </a>
                <a href="https://github.com/Dame-Abera" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                  @Dame-Abera
                </a>
                <a href="https://www.linkedin.com/in/dame-abera-815960258/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  Dame Abera
                </a>
                <a href="https://x.com/dame_abera12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  @dame_abera12
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-semibold mb-3">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  required
                  className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all duration-300"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all duration-300"
                  placeholder="Your message"
                />
              </div>
              {submitStatus.type && (
                <div className={`text-sm ${submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {submitStatus.message}
                </div>
              )}
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 py-2 text-sm relative overflow-hidden group"
                disabled={isSubmitting}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
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
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Navigation Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/projects">
            <Button 
              variant="outline" 
              className="gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              View Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
