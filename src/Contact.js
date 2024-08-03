import React from 'react'
import gmail from '../src/images/gmail.png'
import github from '../src/images/github.png'
import { motion,useInView } from 'framer-motion';
import { useRef } from 'react';

function Contact() 
{

  const ref = useRef(null);
  const isInView = useInView(ref,{amount:0.3});

  let variants = {
    hidden : {
      opacity:0,
      y:-100
    },

    visible : {
      opacity:1,
      y:0,
      transition : {duration:0.5,delay:0.25,when:"beforeChildren",staggerChildren:0.4},
    }
  }

  let child = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0,transition:{duration:0.4} },
  }

  return (

    <motion.div id='contact' className='contact d-flex' ref={ref} variants={variants} initial="hidden" animate={isInView ? "visible" : "hidden"}>

      <div className='contact-text'>

        <motion.div ref={ref} variants={child}>
          <p className='contact-header text-lg-center'>Contact Me:</p>
        </motion.div>
          
          <motion.div ref={ref} variants={child}>
            <p className='contact-desc'>Feel free to reach out!</p>
          </motion.div>
          
       </div>     
       
          <div className='links'>

            <motion.div ref={ref} variants={child} className='mail'>
              <a href='mailto:sreekark789@gmail.com' target='_blank'>
                <img src={gmail} className='contact-icons mail-icon'/>
                <span>- sreekark789@gmail.com</span>
              </a>
            </motion.div>

            <motion.div ref={ref} variants={child} className='github'>
              <a href='https://github.com/Sreekar2105' target='_blank'>
                 <img src={github} className='contact-icons github-icon'/>
                 <span>- github.com/Sreekar2105</span>
               </a>
            </motion.div>
            
          </div>
         
      
      </motion.div>
  )
}

export default Contact