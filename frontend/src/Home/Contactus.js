import React from 'react';
import "./Home.css"
import Nav from './Nav';

const Contactus = () => {
  return (<>
    <Nav/>
    <div className='proof1'></div>
    <div className="contact-us">
      <div className="container2">
        <h1>Contact Us</h1>
        <p>
          If you have any questions, please feel free to reach out to us. You can contact us using the information below:
        </p>
        <div className="contact-info">
          <h2>Address</h2>
          <p>Proof & Experimental Establishment (PXE)<br/>
          Chandipur, Balasore - 756025, Odisha, India</p>
          
          <h2>Phone</h2>
          <p>+91-6782-272200</p>
          
          <h2>Email</h2>
          <p><a href="mailto:contact@pxe.drdo.in" style={{color:"white"}}>contact@pxe.drdo.in</a></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contactus;
