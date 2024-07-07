import React, { useState } from 'react';
import "../index.css"
import { Link } from 'react-router-dom';

const VerticalNavbar = () => {

   
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <ul className="navbar-nav d-flex flex-column">
                <li className="nav-item"><Link to={"/addemployee"} className="nav-link"  >Add Employee</Link></li>
                <li className="nav-item"><Link to={"/addintern"} className="nav-link" style={{color:"rgba(0,212,255,1)", margin:"0px"}}>Add Intern</Link></li>
                <li className="nav-item"><Link className="nav-link">Add Instrument</Link></li>
                <li className="nav-item"><Link className="nav-link" >Update Employee</Link></li>
                <li className="nav-item"><Link className="nav-link" >Update Intern</Link></li>
                <li className="nav-item"><Link className="nav-link" >Update Instrument</Link></li>
            </ul>
        </nav>
    );
};

export default VerticalNavbar;