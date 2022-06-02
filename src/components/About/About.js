import React from 'react';
import Aboutsvg from './about.svg';
import './About.css';
import '../Teacher/Teacher.css';

export default function About() {
  return (
    <>
      <div className='d-flex justify-content-evenly'>
          <div className='block'>
             <img src={Aboutsvg} alt="#" className="svgs"/>
          </div>
          <div class="col-md-5">
          <div class="detail-box">
            <div class="custom_heading-container">
              <h2>
                About Design
              </h2>
            </div>

            <p>
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content
              here , content here', making it
            </p>
            <div>
              <a href="">
                About More
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}