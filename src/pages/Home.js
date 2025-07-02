import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Shield, 
  Star, 
  ArrowRight,
  Phone,
  Video,
  FileText,
  Heart
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Easy Scheduling',
      description: 'Book appointments with your preferred doctors in just a few clicks'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access healthcare services anytime, anywhere with our platform'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your health information is protected with industry-leading security'
    },
    {
      icon: Star,
      title: 'Top Rated Doctors',
      description: 'Connect with verified and highly-rated healthcare professionals'
    }
  ];

  const services = [
    {
      icon: Phone,
      title: 'Telemedicine',
      description: 'Virtual consultations from the comfort of your home',
      color: 'bg-blue-500'
    },
    {
      icon: Video,
      title: 'Video Calls',
      description: 'Face-to-face appointments with HD video quality',
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: 'Health Records',
      description: 'Digital storage and management of your medical history',
      color: 'bg-purple-500'
    },
    {
      icon: Heart,
      title: 'Wellness Tracking',
      description: 'Monitor your health metrics and progress over time',
      color: 'bg-red-500'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Happy Patients' },
    { number: '500+', label: 'Expert Doctors' },
    { number: '50K+', label: 'Appointments' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Health,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Our Priority
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with top healthcare professionals and schedule appointments seamlessly. 
                Experience modern healthcare at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/doctors"
                  className="btn-outline text-lg px-8 py-4 flex items-center justify-center"
                >
                  Find Doctors
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
                  alt="Healthcare professionals"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HealthCare Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to making healthcare accessible, convenient, and secure for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed for modern life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of patients who trust HealthCare Pro for their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <span>Create Account</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/login"
                className="btn-outline text-lg px-8 py-4 flex items-center justify-center"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 