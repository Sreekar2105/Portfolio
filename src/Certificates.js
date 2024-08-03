import React from 'react'
import certificate1 from '../src/images/certificate-1.png'
import {Image} from 'primereact/image'
import { useInView,motion } from 'framer-motion';
import { useRef } from 'react';

function Certificates() 
{

  const ref = useRef(null);
  const isInView = useInView(ref,{amount:0.1});

  let variants = {
    hidden : {
      opacity:0,
      x:-100
    },

    visible : {
      opacity:1,
      x:0,
      transition : {duration:0.5,delay:0.25,when:"beforeChildren",staggerChildren:0.4},
    }
  }

  let child = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0,transition:{duration:0.6} },
  }

  let images = [
    {
      img : certificate1
    }
  ]

  return (

    <motion.div ref={ref} variants={variants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
       <div id='certificates' className='certificates gx-0'>

   
      <motion.div ref={ref} variants={child}>
         <p className='certificates-header'>Certifications</p>
      </motion.div>
      


      <motion.div ref={ref} variants={child} className='d-flex justify-content-center align-items-center'>
        <Image className='img-fluid' src={certificate1} alt="Image" preview />
      </motion.div>     
        
    </div>
    </motion.div>

  )
}

export default Certificates