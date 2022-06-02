import React from "react";
import {Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './container.css';
import Logo from './LOGOS.png';

export default function Containers()
{
    return(<>
        <div class=" w-100 vh-100 d-flex justify-content-center align-items-center">
          <div className="bannerImage">
          <div className="logo">
          <img src={Logo} />
          </div>  
      <div class="content text-center" className="Texts">
        <h1 class="text-white" >SVP College</h1>
      </div>
      </div>
    </div>

    </>
    )
}