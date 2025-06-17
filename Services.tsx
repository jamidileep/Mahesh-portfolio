import React from 'react';
import { Palette, Code, Smartphone, Globe, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with focus on user experience and modern design principles.',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and performant websites using modern technologies and best practices.',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Developing native and cross-platform mobile applications for iOS and Android platforms.',
    },
    {
      icon: Globe,
      title: 'Digital Strategy',
      description: 'Providing comprehensive digital solutions and strategies to help businesses grow online.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing websites and applications for maximum speed, efficiency, and user satisfaction.',
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Offering expert advice and consultation on digital products, user experience, and technology solutions.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I offer a comprehensive range of digital services to help bring your ideas to life
            and grow your business online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-red-500/10"
              >
                <div className="bg-red-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;