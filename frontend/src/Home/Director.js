import React from 'react';
import "./Home.css"
import Nav from './Nav';
import { Button,CardBody,CardTitle,CardSubtitle,Card,CardText } from 'reactstrap';
function Director() {
  return (
  <div> 
    <Nav/>
    <div className='indiv'>
<Card
  style={{
    width: '18rem', float: 'left', paddingTop:'20px'
  }}
>
  <img style={{borderRadius: '12px' }}
    alt="Sample"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEinJ2oR2bB3GLfpa_5lUxU3GhbrjSYZzP4A&s"
  />
  <CardBody>
    <CardTitle tag="h2">
    Shri Subodha Kumar Nayak
    </CardTitle>
    <CardSubtitle style={{fontWeight: '400' }}
      className="m-2 text-muted"
      tag="h4"
    >
      Director, Proof & Experimental Establishment (PXE)
    </CardSubtitle>
   
  </CardBody>
</Card>
  <div className='divin'> <p>Shri Subodha Kumar Nayak, Scientist 'G' has been appointed as Director, PXE with effect from 19 Jan 2024.</p></div>
   </div>
  </div>
  );
}

export default Director;