import React from 'react'
import { Row,Col, Card } from 'react-bootstrap'
import { motion,useInView } from 'framer-motion';
import { useRef } from 'react';

function Skills() 
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
    visible: { opacity: 1, x: 0,transition:{duration:0.5} },
  }

  return (
    <motion.div 
    ref={ref}
    variants={variants}
    initial="hidden"
    animate={isInView ? "visible" : "hidden" }
    id='skills' className='skills d-flex'>
      <p className='skills-header'>Skills</p>
      <Row xs={2} lg={3} className='skills-icons'>
          <Col>
          <motion.div ref={ref} variants={child}>
          <Card className='skills-card'>
             <Card.Body>
               <i className="fa-brands fa-html5"></i>
               <p>HTML</p>
             </Card.Body>
           </Card>
          </motion.div>
          </Col>

          <Col>
          <motion.div ref={ref} variants={child}>
          <Card className='skills-card'>
              <Card.Body>
              <i class="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
              </Card.Body>
            </Card>
          </motion.div>
          </Col>

          <Col>
          <motion.div ref={ref} variants={child}>
          <Card className='skills-card'> 
              <Card.Body>
                <i class="fa-brands fa-js"></i>
                <p>JavaScript</p>
              </Card.Body>
            </Card>
          </motion.div>
          </Col>

          <Col>
          <motion.div ref={ref} variants={child}>
          <Card className='skills-card'>
            <Card.Body>
              <i class="fa-brands fa-react"></i>
              <p>ReactJS</p>
            </Card.Body>
           </Card>
          </motion.div>
          </Col>

          <Col>
          <motion.div ref={ref} variants={child}>
          <Card className='skills-card'>
            <Card.Body>
              <i class="fa-brands fa-bootstrap"></i>
              <p>Bootstrap</p>
            </Card.Body>
          </Card>
          </motion.div>
          </Col>
  
      </Row>
    </motion.div>
  )
}

export default Skills