import React from "react";
import './Teacher.css';
import One from "./images/teacher-1.jpg";
import Two from "./images/teacher-2.jpg";
import Three from "./images/teacher-3.jpg";
import Four from "./images/teacher-4.jpg";
export default function Teacher(){

    return(
        <>
  
  <section className="teacher_section ">
    <div className="container">
      <div className="heading_container">
        <h2 className="">
          Our Teachers
        </h2>
      </div>
      <div className="teacher_container layout_padding2">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="img-box">
                <img src={One} alt="Card image cap"/>
              </div>
              <div className="detail-box">
                <p>
                  <h5>
                    Rose Adams
                  </h5>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="img-box">
                <img src={Two} alt="Card image cap"/>
              </div>
              <div className="detail-box">
                <p>
                  <h5>
                    David Mark
                  </h5>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="img-box">
                <img  src={Three} alt="Card image cap"/>
              </div>
              <div className="detail-box">
                <p>
                  <h5>
                    Leena Smith
                  </h5>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="img-box">
                <img src={Four} alt="Card image cap"/>
              </div>
              <div className="detail-box">
                <p>
                  <h5>
                    Jack Doe
                  </h5>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          See More
        </a>
      </div>
    </div>
  </section>


        </>
    )
}