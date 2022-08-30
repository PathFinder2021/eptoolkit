import './Nav.scss'
import React, { useEffect } from 'react';
import Colors from '../../components/Styles/colors';
import { Link } from 'react-scroll'

const scrollTime = 400;

const Nav = () => {

  let navClasses = ['nav'];
  
  return (
    <div className={navClasses.join(" ")}
      style={{
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: "3px",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        position: "sticky",
        top: "40%", // sticky won't work without top
        borderColor: Colors.themeRetrofitting,
        boxShadow: "0px 8px 10px -5px #00000040",
      }}>
      <header className="navHeader"
        style={{
          backgroundColor: Colors.themeRetrofitting,
          borderTopRightRadius: 11,
        }}>
        <b>On this page</b>
      </header>
      <ul style={{ listStyle: 'none' }}>
        <li className="menu-item"><Link activeClass="active" to="how" spy={true} smooth={true} duration={scrollTime}>How it works</Link></li>
        <li className="menu-item"><Link to="cultural" spy={true} smooth={true} duration={scrollTime}>Cultural significance</Link></li>
        <li className="menu-item"><Link to="sideEffects" spy={true} smooth={true} duration={scrollTime}>Technical side effects</Link></li>
        <li className="menu-item"><Link to="options" spy={true} smooth={true} duration={scrollTime}>Options for designing</Link></li>
        <li className="menu-item"><Link to="info" spy={true} smooth={true} duration={scrollTime}>Further information</Link></li>
      </ul>
    </div>
  )

};
export default Nav;