import React from "react";
import {Navbar, Nav, NavDropdown,Container } from 'react-bootstrap';
import {MDBIcon,MDBBtn} from 'mdb-react-ui-kit';

function  Top() {
    return(
      <Navbar style={{paddingTop: "0.1rem",
      paddingBottom:"0.1rem",fontSize:'12px', justifyContent: "space-between", backgroundColor:"#212529"}} >
        <Nav className="me-auto" style={{marginLeft:'5px'}}>
          <Nav.Link href="#" >
            <MDBIcon icon="map-marker-alt"  style={{marginRight:'8px'}} />
            Adukkamparai, Vellore
            </Nav.Link>
          <Nav.Link href="#">
          <MDBIcon icon="mobile-alt"  style={{marginRight:'8px'}}/>
            0416-2230284</Nav.Link>
          <Nav.Link href="#">
          <MDBIcon far icon="envelope" style={{marginRight:'8px'}} />
            principalsvp358@gmail.com</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">
          <MDBIcon icon="user" style={{marginRight:'8px'}} />
            More deets</Nav.Link>
          <Nav.Link href="#"> 
          <MDBIcon icon="user" style={{marginRight:'8px'}} />
            Dank memes
          </Nav.Link>
        </Nav>
    </Navbar>
    );
}
export default Top;