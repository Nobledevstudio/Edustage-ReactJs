import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';

const socialIcons = [
  { id: 1, icon: 'fa-brands fa-facebook', link: '#' },
  { id: 2, icon: 'fa-brands fa-instagram', link: '#' },
  { id: 3, icon: 'fa-brands fa-twitter', link: '#' },
  { id: 4, icon: 'fa-brands fa-google-plus-g', link: '#' },
  { id: 5, icon: 'fa-brands fa-youtube', link: '#' },
];

const navLinks = ['Home', 'Features', 'Courses', 'Testimonial', 'About', 'Contact'];

const Footer = () => {
  return (
    <footer className='footer'>
      <motion.div 
        className="social-icons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {socialIcons.map(icon => (
          <a key={icon.id} href={icon.link}>
            <motion.i 
              className={icon.icon}
              whileHover={{ scale: 1.2, color: '#fdc632' }}
              transition={{ type: 'spring', stiffness: 300 }}
            ></motion.i>
          </a>
        ))}
      </motion.div>

      <motion.div
        className="navbar-links"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ul>
          {navLinks.map((link, idx) => (
            <li key={idx}>{link}</li>
          ))}
        </ul>
      </motion.div>

      <hr />

      <motion.div 
        className="copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p>Copyright &copy; 2026 Powered by Edustage</p>
      </motion.div>
    </footer>
  )
}

export default Footer;
