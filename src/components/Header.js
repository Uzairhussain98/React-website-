import React,  { useEffect,useState } from 'react'
import './Header.css'
import logo from './logo.svg'
const Header = () => {

  const [show, handleShow] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);



  return (
    <div className={`header ${show && "nav__black"} `}>
      <div className="logofull">
      <img className="logo" src={logo} alt="logo"/>
      <h2 className="name">OR-BIT</h2>
      </div>
      <div className="links">
      <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

      </div>


      <button className="btn">GET STARTED</button>
    </div>
  )
}

export default Header
