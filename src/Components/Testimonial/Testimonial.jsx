import React from 'react'
import './Testimonial.css'
import client1 from '../../assets/t1.png'
import client2 from '../../assets/t2.png'
import client3 from '../../assets/t3.png'
import client4 from '../../assets/t4.png'
import { motion } from 'framer-motion'

const testimonials = [
  {
    img: client1,
    name: 'David Saden',
    feedback: 'Edustage has completely transformed the way I learn. The courses are engaging, interactive, and extremely easy to follow.'
  },
  {
    img: client2,
    name: 'Catherine Smith',
    feedback: 'The instructors are amazing and the content is very practical. I feel more confident in my skills now.'
  },
  {
    img: client3,
    name: 'James Allen',
    feedback: 'I highly recommend Edustage to anyone looking to upskill. The support and guidance are top-notch.'
  },
  {
    img: client4,
    name: 'Sophia Williams',
    feedback: 'A professional and modern learning platform. The courses are well-structured and fun to complete.'
  },
  {
    img: client4,
    name: 'Emmanuel John',
    feedback: 'A professional and modern learning platform. The courses are well-structured and fun to complete.'
  },
  {
    img: client4,
    name: 'Austin Lam',
    feedback: 'A professional and modern learning platform. The courses are well-structured and fun to complete.'
  }
]

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Our Students Say
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Discover how Edustage has helped learners achieve their goals
      </motion.p>

      <div className="testimonial-div">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="profile-img">
              <img src={t.img} alt={t.name} />
            </div>
            <div className="card-content">
              <h3>{t.name}</h3>
              <p>{t.feedback}</p>
            </div>
            <div className="quote-icon">❝</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
