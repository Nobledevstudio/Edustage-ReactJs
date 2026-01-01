import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="contact">
      {/* Section Title */}
      <motion.div 
        className="contact-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Get in Touch with Edustage</h3>
        <p>Have questions or want to learn more about our programs? We’re here to help!</p>
      </motion.div>

      {/* Map */}
      <motion.div 
        className="contact-map"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <iframe
          title="Edustage Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63433.47227329264!2d3.3340426216796875!3d6.446395799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b24500ec575%3A0x7aaa96f240f1e995!2sNational%20Open%20University%20Of%20Nigeria%20(NOUN)!5e0!3m2!1sen!2sng!4v1711301594917!5m2!1sen!2sng"
        ></iframe>
      </motion.div>

      {/* Contact Columns */}
      <motion.div 
        className="contact-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Address */}
        <div className="contact-address">
          <motion.div 
            className="address"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span><i className="fa-solid fa-house"></i></span>
            <div>
              <h4>California, USA</h4>
              <p>Santa Monica Blvd</p>
            </div>
          </motion.div>

          <motion.div 
            className="address"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
          >
            <span><i className="fa-solid fa-headphones"></i></span>
            <div>
              <h4>+1 (440) 9865 526</h4>
              <p>Mon – Fri, 9am – 6pm</p>
            </div>
          </motion.div>

          <motion.div 
            className="address"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
          >
            <span><i className="fa-solid fa-envelope"></i></span>
            <div>
              <h4>support@edustage.com</h4>
              <p>Send us your queries anytime</p>
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div 
          className="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="6"></textarea>
          <motion.button 
            className="btn btn-message"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
