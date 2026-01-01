import React from 'react';
import './Features.css';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: 'fa-solid fa-graduation-cap',
    title: 'Scholarship Facility',
    description: 'We offer scholarships to deserving students, making quality education accessible for everyone.'
  },
  {
    id: 2,
    icon: 'fa-solid fa-book',
    title: 'Sell Online Courses',
    description: 'Empower instructors to create and sell courses online with our easy-to-use platform.'
  },
  {
    id: 3,
    icon: 'fa-solid fa-certificate',
    title: 'Global Certification',
    description: 'Receive globally recognized certifications to showcase your skills and advance your career.'
  }
];

const Features = () => {
  return (
    <section className='features'>
      <motion.div 
        className="features-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Our Outstanding Features</h3>
        <p>Discover the benefits that make Edustage the perfect place to learn and grow.</p>
      </motion.div>

      <div className="features-card">
        {features.map((feature, index) => (
          <motion.div 
            className="f-card"
            key={feature.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}
          >
            <span><i className={feature.icon}></i></span>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
