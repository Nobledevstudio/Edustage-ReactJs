import React from 'react';
import './About.css';
import aboutImg from '../../assets/about.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about">
      <motion.div 
        className="about-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={aboutImg} alt="Students learning at Edustage" />
      </motion.div>

      <motion.div 
        className="about-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="about-card">
          <h2>Unlock Your Potential with Edustage Institute</h2>
          <p>
            At Edustage, learning is designed to inspire, challenge, and empower. Our expert-led programs combine hands-on experience with modern teaching methods to equip students for real-world success.
          </p>
          <p>
            Join a vibrant community of curious minds and start your journey toward knowledge, growth, and future-ready skills today.
          </p>
          <div className="btn-group">
            <button className="btn btn-primary">Learn More &rarr;</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
