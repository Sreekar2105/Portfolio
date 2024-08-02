import React from 'react'
import {  Button } from 'react-bootstrap'
import { scroller } from 'react-scroll'
import { motion,useInView } from 'framer-motion'
import { useRef } from 'react'

function About() 
{

  const ref = useRef(null);
  const isInView = useInView(ref,{amount:0.3});

  let variants = {
    hidden : {
      opacity:0,
      x:-100
    },

    visible : {
      opacity:1,
      x:0,
      transition : {duration:0.55,delay:0.5,when:"beforeChildren",staggerChildren:0.5}
    }
  }

  let child = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition:{duration:0.5}},
  }

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <motion.div 
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden" }
      id='about' className='about d-flex fw-semibold'
      whileHover={{boxShadow:"0px 0px 7px 8px #E5DADA"}}>

        <motion.div ref={ref} variants={child}> 
        <p className='about-me-header fw-bolder'>About Me</p>
        </motion.div>
       
        <motion.div ref={ref} variants={child}>
        <p className='about-me-body'>I'm Sreekar Komanduri, a recent BCA graduate and a passionate Frontend Developer with a strong foundation in
           HTML, CSS, JavaScript, React and more. I specialize in crafting responsive and dynamic web applications that prioritize exceptional
            user experiences. I enjoy experimenting with the latest technologies and frameworks to ensure that my projects
              are not only functional but also engaging and interactive.My goal is to build web applications that are not only technically robust
               but also delight users with their simplicity and elegance.</p>
        </motion.div>

        <motion.div ref={ref} variants={child}>
        <p className='projects-brief'> I've created a weather app, currency converter, and an e-commerce platform, highlighting my ability to build dynamic and user-friendly web applications.</p>
        </motion.div>    

        <motion.div ref={ref} variants={child}>   
           <button className='projects-button' onClick={()=>scrollToSection('projects')}>Explore My Projects</button>
        </motion.div>
     
    </motion.div>
  )
}

export default About