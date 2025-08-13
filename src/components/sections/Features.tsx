import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  MessageSquare, 
  Video,
  Brain,
  Smartphone
} from 'lucide-react';
import { Card } from '../ui/Card';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience instant connections with our optimized infrastructure and edge computing.',
      color: 'text-yellow-400'
    },
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'End-to-end encryption and advanced security protocols protect your data.',
      color: 'text-green-400'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with anyone, anywhere in the world with our global network.',
      color: 'text-blue-400'
    },
    {
      icon: Users,
      title: 'Smart Matching',
      description: 'AI-powered algorithms connect you with the right people at the right time.',
      color: 'text-purple-400'
    },
    {
      icon: MessageSquare,
      title: 'Rich Messaging',
      description: 'Express yourself with multimedia messages, reactions, and interactive content.',
      color: 'text-pink-400'
    },
    {
      icon: Video,
      title: 'HD Video Calls',
      description: 'Crystal-clear video calls with advanced noise cancellation and filters.',
      color: 'text-red-400'
    },
    {
      icon: Brain,
      title: 'AI Assistant',
      description: 'Intelligent assistant helps you manage connections and conversations.',
      color: 'text-cyan-400'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Seamless experience across all devices - mobile, desktop, and web.',
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge features that make ConnecTouch the ultimate platform 
            for digital connections and collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover glow className="h-full text-center group">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-dark-800 mb-4 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};