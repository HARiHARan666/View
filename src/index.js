import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Top from './components/Top/Top';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './components/Top/Nav';
import Containers from "./components/Container/container.js";
import Footer from './components/Footer/Footer';
import Course from './components/Course/Course';
import Nav2 from './components/Top/Nav2';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Slider from './components/Slider/Slider';
import Teacher from './components/Teacher/Teacher';
import About from './components/About/About';
import Blank from './components/Blank/Blank';
import Details from './components/Details/Details';
import News from './components/News/News';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Top/>
  <Nav2/>
  <Containers/>
  <Blank/>
  <About/>
  <Blank/>
  <Course/>
  <Blank/>
  <News/>
  <Details/>
  <Teacher/>
  <Blank/>
  <Slider/>
  <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
