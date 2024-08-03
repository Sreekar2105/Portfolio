import React from 'react'
import pic from '../src/images/pic.png'
import { Row,Col } from 'react-bootstrap'
import {  motion,useInView } from 'framer-motion'
import { useRef } from 'react'

function Home() 
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
      transition : {duration:0.8,delay:0.5,when:"beforeChildren",staggerChildren:0.3}
    }
  }

  let child = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0,  transition:{duration:0.8} },
  }

  return (
    <motion.div
     ref={ref}
     id="home"
     variants={variants}
     initial="hidden"
     animate={isInView ? "visible" : "hidden"}
     className='home d-flex text-center'
     >
      
    <Row className='gx-0'>
      <Col xs={12} lg={7} >
       <div className='intro overflow-x-auto'>
          <p className='main'>Hey there, I'm <span className="text-uppercase fw-bolder">Sreekar Komanduri,</span> a Frontend Developer passionate about design and technology.</p>
          <p className='sub'>Check out my portfolio to know more about my journey in web development.</p>
        </div>
      </Col>
      
      <Col xs={12} lg={5}>
        <motion.img ref={ref} variants={child}
        className='img-fluid' src={pic}/>
      </Col>
      
     
    </Row>
    </motion.div>
  )
}

export default Home