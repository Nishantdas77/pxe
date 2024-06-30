import React from 'react';
import "./Home.css"
import companyLogo from './img/drdo0.png';
import { Link, useParams } from "react-router-dom";
function Nav() {
    

    
  return (
    <div >
   <div className='nav'>
      <div className="three-columns-grid">
    <div><img src={companyLogo} alt="BigCo Inc. logo"/>
    {/* <div className= "vertical"></div> */}
    </div>
    <div><h3 className='white'>Proof & Experimental Establishment (PXE)</h3></div>
    <div>  </div>
</div>
<hr className='hr'/>
<div>
    <div className='six'>
<div className="six-columns-grid">
    <div><h4 > <Link to={"/"}>Lab Home</Link></h4>
    </div>
    <div><h4 > <Link to={"/director"}>Director</Link></h4></div>
    <div> <h4> Product/Technology</h4></div>
    <div> <h4> Employees</h4></div>
    <div> <h4 > About us</h4></div>
    <div> <h4 > Contact us</h4></div>
</div></div></div>
   </div></div>
  );
}

export default Nav;