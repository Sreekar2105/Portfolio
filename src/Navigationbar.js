import React from 'react'
import { Nav,Navbar} from 'react-bootstrap'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-scroll';

function Navigationbar() 
{
   let [expanded,setExpanded] = useState(false);

   const handleSelect = ()=>
   {
      setExpanded(false)
   }

   const [offset, setOffset] = useState(0);

   const updateOffset = () => {
     if (window.innerWidth <= 991) { 
       setOffset(-300);
     } else {
       setOffset(0);
     }
   };
 
   useEffect(() => 
   {
     updateOffset(); 
     window.addEventListener('resize', updateOffset);
     return () => window.removeEventListener('resize', updateOffset);
   }, []);

  return (
   
   <div>

    <Navbar collapseOnSelect expand="lg" className="nav-bar" expanded={expanded}>

        <Navbar.Brand className='brand-name'>Portfolio</Navbar.Brand>

        <Navbar.Toggle onClick={()=>{setExpanded(!expanded)}} aria-controls="responsive-navbar-nav" className='toggle-menu border-2 border-black me-3 fs-4' />
        <Navbar.Collapse className='navbar-collapse' id="responsive-navbar-nav">

            <Nav className="me-auto text-center">

                  <Nav.Link as={Link} to='home' spy={true} smooth={true} offset={offset} onClick={handleSelect} className='nav-items'>Home</Nav.Link>
              
                  <Nav.Link as={Link} to='about' onClick={handleSelect} spy={true} smooth={true} offset={offset} className='nav-items'>About Me</Nav.Link>
              
                   <Nav.Link as={Link} to='skills' onClick={handleSelect} spy={true} smooth={true} offset={offset} className='nav-items'>Skills</Nav.Link>

                   <Nav.Link as={Link} to='projects' onClick={handleSelect} spy={true} smooth={true} offset={offset} className='nav-items'>Projects</Nav.Link>

                   <Nav.Link as={Link} to='certificates' onClick={handleSelect} spy={true} smooth={true} offset={offset} className='nav-items'>Certifications</Nav.Link>

                   <Nav.Link as={Link} to='contact' onClick={handleSelect} spy={true} smooth={true} offset={offset} className='nav-items'>Contact</Nav.Link>

            </Nav>
        </Navbar.Collapse>
    </Navbar> 

    </div>

    )
}

export default Navigationbar