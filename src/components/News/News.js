import React from 'react';
import Action from "./News.module.css";
import One from './images/blog_large_1.jpg';
import Two from './images/blog_1.jpg';
import Three from './images/blog_2.jpg';
import Four from './images/blog_1.jpg';
import Five from './images/course_5.jpg';


export default function News() {
    return (
      <>
    <div className={Action.news-updates}>
      <div className={Action.container}>  
        <div className={Action.row}>
          <div className={Action.col-lg-9}>
             <div className="section-heading">
              <h2 className="text-black">News &amp; Updates</h2>
              <a href="#">Read All News</a>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="post-entry-big">
                  <a href="news-single.html" className="img-link">
                      <img src={One} alt="Image" className="img-fluid"/></a>
                  <div className="post-content">
                    <div className="post-meta"> 
                      <a href="#">June 6, 2019</a>
                      <span className="mx-1">/</span>
                      <a href="#">Admission</a>, <a href="#">Updates</a>
                    </div>
                    <h3 className="post-heading"><a href="news-single.html">Campus Camping and Learning Session</a></h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="post-entry-big horizontal d-flex mb-4">
                  <a href="news-single.html" className="img-link mr-4">
                      <img src={Two} alt="Image" className="img-fluid"/></a>
                  <div className="post-content">
                    <div className="post-meta">
                      <a href="#">June 6, 2019</a>
                      <span className="mx-1">/</span>
                      <a href="#">Admission</a>, <a href="#">Updates</a>
                    </div>
                    <h3 className="post-heading"><a href="news-single.html">Campus Camping and Learning Session</a></h3>
                  </div>
                </div>

                <div className="post-entry-big horizontal d-flex mb-4">
                  <a href="news-single.html" className="img-link mr-4">
                      <img src={Three} alt="Image" className="img-fluid"/></a>
                  <div className="post-content">
                    <div className="post-meta">
                      <a href="#">June 6, 2019</a>
                      <span className="mx-1">/</span>
                      <a href="#">Admission</a>, <a href="#">Updates</a>
                    </div>
                    <h3 className="post-heading"><a href="news-single.html">Campus Camping and Learning Session</a></h3>
                  </div>
                </div>

                <div className="post-entry-big horizontal d-flex mb-4">
                  <a href="news-single.html" className="img-link mr-4">
                      <img src={Four} alt="Image" className="img-fluid"/></a>
                  <div className="post-content">
                    <div className="post-meta">
                      <a href="#">June 6, 2019</a>
                      <span className="mx-1">/</span>
                      <a href="#">Admission</a>, <a href="#">Updates</a>
                    </div>
                    <h3 className="post-heading"><a href="news-single.html">Campus Camping and Learning Session</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="section-heading">
              <h2 className="text-black">Campus Videos</h2>
              <a href="#">View All Videos</a>
            </div>
            <a href="https://vimeo.com/45830194" className="video-1 mb-4" data-fancybox="" data-ratio="2">
              <span className="play">
              <span class="far fa-play-circle"></span>
              </span>
              <img src={Five} alt="Image" className="img-fluid"/>
            </a>
            <a href="https://vimeo.com/45830194" className="video-1 mb-4" data-fancybox="" data-ratio="2">
                <span className="play">
                <span class="far fa-play-circle"></span>
                </span>
                <img src={Five} alt="Image" className="img-fluid"/>
              </a>
          </div>
        </div>
      </div>
    </div>
</>
    );
  }