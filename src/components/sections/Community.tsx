import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Heart, Star } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const Community: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Designer',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'ConnecTouch has revolutionized how our team collaborates. The seamless integration and intuitive design make it a joy to use.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Tech Entrepreneur',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The global reach and security features are unmatched. We\'ve connected with partners worldwide without any concerns.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Community Manager',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Building communities has never been easier. The AI-powered matching helps connect like-minded individuals effortlessly.',
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: '10M+', label: 'Active Users' },
    { icon: MessageCircle, value: '500M+', label: 'Messages Sent' },
    { icon: Heart, value: '2M+', label: 'Connections Made' },
    { icon: Star, value: '4.9', label: 'App Store Rating' }
  ];

  return (
    <section id="community" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a thriving global community that's shaping the future of digital connections.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
            <p className="text-gray-300 mb-6">
              Join millions of users who are already experiencing the future of digital connections.
            </p>
            <Button size="lg">
              Join the Community
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};