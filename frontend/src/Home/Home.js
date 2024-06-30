import React from 'react';
import "./Home.css"
import Nav from './Nav';
import logo from './img/Proof.jpg';

function Home() {
  return (
   <div>
    <Nav/>
    <div className='proof' > 
      
</div>
    <div className='newdiv'><h2>Proof & Experimental Establishment (PXE)</h2>
        <p>The Proof and Experimental Establishment (PXE) is responsible for design and developmental trials of guns, mortars, rockets, RCL, tank guns and their ammunition, including Naval guns and ammunition. PXE also conducts performance evaluation trials for tank armour and ammunition, as well as proof of armour plates, tank turrets, ICVs, proximity fuzes.</p>
        </div>
        <div className='row'>
    <div className='newdiv1 column'><h2>Vision</h2>
        <p>Transform the range into a world-class dynamic Test & Evaluation centre for armament stores.</p>
        </div>
    <div className='newdiv2 column'><h2>Mission</h2>
        <p>Test, evaluation and proof of various types of armament stores.</p>
        </div>
        </div>

   </div>
  );
}

export default Home;