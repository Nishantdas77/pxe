import React from 'react';
import "./Home.css"
import companyLogo from './img/drdo0.png';
import { Link, useParams } from "react-router-dom";
function Nav() {
    

    
  return (
    <div  >
   <div className='navb'>
      <div className="three-columns-grid">
    <div><img src={companyLogo} alt="BigCo Inc. logo"/>
    {/* <div className= "vertical"></div> */}
    </div>
    <div><h3 className='white'>Proof & Experimental Establishment (PXE)</h3></div>
    <div><Link to={"/addemployee"}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-5Wi8qZXluHi11q-AHGh8riznXRoltGVYQ&s' alt='' style={{width:"40px",marginLeft:"300px",borderRadius:"20px",marginTop:"20px"}}></img> </Link>  </div>
</div>
<hr className='hr'/>
<div >
    <div className='six'>
<div className="six-columns-grid">
    <div><h4 > <Link to={"/"} className='link' style={{textDecoration:"none", color:"white",}}><p>Lab Home</p></Link></h4>
    </div>
    <div><h4 > <Link to={"/director"} className='link' style={{textDecoration:"none", color:"white",}}><p>Director</p></Link></h4></div>
    <div> <h4><div className="subnav">
    <h4 className="subnavbtn"><Link className='link' style={{textDecoration:"none", color:"white",}}><p>Employees</p></Link></h4>
    <div className="subnav-content">
      <a href="#bring"  style={{marginLeft:"50px"}}><Link to={"/rs"}>R & S</Link></a>
      <a href="#deliver" style={{marginLeft:"80px"}}><Link to={"/hrdc"}>HRDC</Link></a>
    </div>
  </div></h4></div>
  <div><h4 > <Link to={"/intern"} className='link' style={{textDecoration:"none", color:"white", }}><p style={{marginTop: "0px",marginLeft:"25px",}}>Intern</p></Link></h4></div>
  <div><h4 > <Link to={"/director"} className='link' style={{textDecoration:"none", color:"white",}}><p>Instrument/Product</p></Link></h4></div>
  <div><h4 > <Link to={"/contact"} className='link' style={{textDecoration:"none", color:"white",}}><p>Contact us</p></Link></h4></div>
</div></div></div>
   </div></div>
  );
}

export default Nav;