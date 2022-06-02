import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import "./Course.css";
import Book from './book.svg';

export default function Course() {
  return (
    <>





      <div className='d-flex justify-content-center'>
        <div>
        
<lord-icon
    src="https://cdn.lordicon.com/wxnxiano.json"
    trigger="loop-on-hover"
    delay="10"
    colors="primary:#121331,secondary:#08a88a"
    state="hover"
    style={{width:55,height:55}}>
</lord-icon>
        </div>
        <div className='heading'>
        Course
        </div>
       
      </div>

  








        <div className='d-flex justify-content-evenly' style={{marginTop:50, marginBottom:50, marginLeft:20, marginRight:20}}> 
<div className='card'>
<div className='cardbody'> 
<MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image w-100 hover-shadow'>
        <MDBCardImage  src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  <div className='card-footer'>
    <i className='fas fa-heart des'></i>
    <i className='fas fa-comment des'></i>
    <i className='fas fa-bookmark des'></i>
  </div>
</div>
 </div>


 <div className='card'>
<div className='cardbody'> 
<MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image w-100 hover-shadow'>
        <MDBCardImage  src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  <div className='card-footer'>
    <i className='fas fa-heart des'></i>
    <i className='fas fa-comment des'></i>
    <i className='fas fa-bookmark des'></i>
  </div>
</div>
 </div>

 <div className='card'>
<div className='cardbody'> 
<MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image w-100 hover-shadow'>
        <MDBCardImage  src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  <div className='card-footer'>
    <i className='fas fa-heart des'></i>
    <i className='fas fa-comment des'></i>
    <i className='fas fa-bookmark des'></i>
  </div>
</div>
 </div>
        </div>
        
    </>);
}