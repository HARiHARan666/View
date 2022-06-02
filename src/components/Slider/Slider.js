import React from "react";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import four from "./4.jpg";
import five from "./5.jpg";
import six from "./6.jpg";
import seven from "./7.jpg";
import eight from "./8.jpg";
import nine from "./9.jpg";
import ten from "./10.jpg";
import "./Slider.css";

export default function Slider(){
    return(
        <>
      <div className="d-flex p-2">

            <ul class="images">
            <li> <img src={one} alt="1" width={100}/> </li>
            <li><img src={two} alt="1" width={100}/> </li>
            <li><img src={three} alt="1" width={100}/> </li>
            <li><img src={four} alt="1" width={100}/> </li>
            <li><img src={five} alt="1" width={100}/> </li>
            <li><img src={six} alt="1" width={100}/> </li>
            <li><img src={seven} alt="1" width={100}/> </li>
            <li><img src={eight} alt="1" width={100}/> </li>
            <li><img src={nine} alt="1" width={100}/> </li>
            <li><img src={ten} alt="1" width={100}/> </li>
            <li><img src={three} alt="1" width={100}/> </li>
            <li><img src={four} alt="1" width={100}/> </li>
            <li><img src={five} alt="1" width={100}/> </li>
            <li><img src={six} alt="1" width={100}/> </li>
            <li><img src={seven} alt="1" width={100}/> </li>
            <li><img src={seven} alt="1" width={100}/> </li>
            <li><img src={eight} alt="1" width={100}/> </li>
            <li><img src={nine} alt="1" width={100}/> </li>
            <li><img src={ten} alt="1" width={100}/> </li>
            <li><img src={three} alt="1" width={100}/> </li>
            </ul> 
            </div>  
        </>
    );
}