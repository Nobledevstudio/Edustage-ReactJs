import React, { useEffect, useState } from 'react'
import './RegCourse.css'
import { motion } from 'framer-motion'

const RegCourse = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set your target date here
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 150); // 150 days from now

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  }

  const countdownItems = [
    { num: timeLeft.days, label: 'Days' },
    { num: timeLeft.hours, label: 'Hours' },
    { num: timeLeft.minutes, label: 'Minutes' },
    { num: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <div className='regcourse'>
      {/* Left Section */}
      <div className="regcourse-left">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Register for Our Courses Today
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Unlock your potential and gain new skills with our carefully curated online courses. Join thousands of learners around the globe today!
        </motion.p>

        <div className="time">
          {countdownItems.map((item, i) => (
            <motion.span 
              className='item' 
              key={i}
              custom={i}
              variants={countVariants}
              initial="hidden"
              whileInView="visible"
            >
              <span className='number'>{item.num}</span>
              <span className='text'>{item.label}</span>
            </motion.span>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <motion.div 
        className="regcourse-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="reghere">
          <h2>Start Your Free Course</h2>
          <p>Learning has never been easier. Fill the form below to get started instantly!</p>
          <input type="text" placeholder='Full Name' />
          <input type="number" placeholder='Phone Number' />
          <input type="email" placeholder='Email Address' />
          <button className='btn btn-regcourse'>SUBMIT</button>
        </div>
      </motion.div>
    </div>
  )
}

export default RegCourse
