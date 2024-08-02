import React from 'react'
import currencyConverter from '../src/images/currency-converter.png'
import weather from '../src/images/weather.png'
import shopNow from '../src/images/shopNow.png'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Projects() {

  let projects = [

    {
      name: "Currency Converter",
      pic: currencyConverter,
      description: "A comprehensive currency converter app featuring real-time exchange rates and support for a wide range of currencies.",
      skills: ["HTML", "CSS", "JavaScript", "API"],
      demo: 'https://sreekar2105.github.io/Currency-Converter/',
      code: 'https://github.com/Sreekar2105/Currency-Converter',
    },

    {
      name: "Weather App",
      pic: weather,
      description: "A web-based weather application that provides users with real-time weather information for any location worldwide.",
      skills: ["HTML", "CSS", "JavaScript", "API"],
      demo: 'https://sreekar2105.github.io/Weather-App/',
      code: 'https://github.com/Sreekar2105/Weather-App',
    },

    {
      name: "shopNow",
      pic: shopNow,
      description: 'An e-commerce platform designed to provide a seamless online shopping experience.',
      skills: ["HTML", "CSS", "JavaScript", "ReactJs", "Bootstrap"],
      demo: 'https://sreekar2105.github.io/shopNow/',
      code: 'https://github.com/Sreekar2105/shopNow',
    },

  ]


  let variant1 = {
    hidden: {
      opacity: 0,
      x: -100
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (


    <motion.div variants={variant1} initial="hidden" whileInView="visible" id='projects' className='projects d-flex'>

      <p className='projects-header'>Projects</p>

      {
        projects.map((project, id) => (

          <Row xs={1} lg={2} className='all-projects'>

            <Col>

              <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.25, when: "beforeChildren", staggerChildren: 0.5 }}>

                <Card className='projects-card'>

                  <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.5 }} >
                    <Card.Img variant="top" src={project.pic} />
                  </motion.div>

                  <Card.Body>

                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.6 }} >
                      <Card.Title className='text-center projects-card-title'>{project.name}</Card.Title>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.7 }} >
                      <Card.Text className='projects-card-text'>
                        {project.description}
                      </Card.Text>
                    </motion.div>


                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.8 }} >
                      <Card.Text className='projects-card-text d-flex flex-column'>
                        <p className='fw-bold'>Skills Used :</p>

                        <div className='d-flex gap-3'>
                          {
                            project.skills.map((skill) => (

                              <Button className='skills-button'>{skill}</Button>
                            ))
                          }
                        </div>

                      </Card.Text>
                    </motion.div>

                    <hr />

                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.9 }}>
                      <div className='d-flex justify-content-evenly'>
                        <Button href={project.demo} target='_blank' style={{ backgroundColor: "#000022" }}>Demo</Button>
                        <Button href={project.code} target='_blank' style={{ backgroundColor: "#000022" }}>Code</Button>
                      </div>
                    </motion.div>


                  </Card.Body>

                </Card>
              </motion.div>

            </Col>

          </Row>

        ))

      }

    </motion.div>
  )
}
export default Projects

