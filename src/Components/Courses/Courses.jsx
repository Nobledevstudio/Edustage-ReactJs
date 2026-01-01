import React from 'react';
import './Courses.css';
import { motion } from 'framer-motion';
import course1 from '../../assets/c1.png';
import course2 from '../../assets/c2.png';
import course3 from '../../assets/c3.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';

const courses = [
  {
    id: 1,
    img: course3,
    category: 'Engineering',
    title: 'Computer Engineering',
    description: 'Master the fundamentals of computer systems, programming, and hardware design.',
    price: '$25',
    instructor: 'Cameron',
    avatar: user1,
    likes: 25,
    students: 35
  },
  {
    id: 2,
    img: course1,
    category: 'Design',
    title: 'Custom Product Design',
    description: 'Learn to create innovative product designs from concept to prototype.',
    price: '$25',
    instructor: 'Cameron',
    avatar: user2,
    likes: 25,
    students: 35
  },
  {
    id: 3,
    img: course2,
    category: 'Marketing',
    title: 'Social Media Strategy',
    description: 'Build effective social media campaigns to grow brands and engagement.',
    price: '$25',
    instructor: 'Cameron',
    avatar: user3,
    likes: 25,
    students: 35
  },
];

const Courses = () => {
  return (
    <section className='courses'>
      <motion.div
        className="courses-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Popular Courses</h2>
        <p>Explore our most in-demand courses designed to transform your career.</p>
      </motion.div>

      <div className="courses-card">
        {courses.map((course, index) => (
          <motion.div 
            className="c-card"
            key={course.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={course.img} alt={course.title} />
            <span className='price'>{course.price}</span>
            <div className="user-col">
              <button className='btn course-btn'>{course.category}</button>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="user-div">
                <div className="user">
                  <img src={course.avatar} alt={course.instructor} />
                  <h5>{course.instructor}</h5>
                </div>
                <div className='user-about'>
                  <span><i className='fa-solid fa-heart'></i></span>
                  <span>{course.likes}</span>
                </div>
                <div className='user-about'>
                  <span><i className='fa-solid fa-user'></i></span>
                  <span>{course.students}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
