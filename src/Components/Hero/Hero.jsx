import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {

  // Variant for staggered scroll animation
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className='hero'>
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <motion.h4
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
        >
          Learn Smarter, Grow Faster
        </motion.h4>

        <motion.h1
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
        >
          Transform Your Career with World-Class Online Learning
        </motion.h1>

        <motion.p
          className='hero-tagline'
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
        >
          Join thousands of learners worldwide who gain skills from top instructors, get certified, 
          and advance their careers with hands-on projects and personalized learning paths.
        </motion.p>

        <motion.div
          className='herobutton'
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
        >
          <motion.button 
            className='btn btn1'
            whileHover={{ scale: 1.1, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Explore Courses
          </motion.button>
          <motion.button 
            className='btn btn2'
            whileHover={{ scale: 1.1, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div 
          className='scroll-down'
          animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;
