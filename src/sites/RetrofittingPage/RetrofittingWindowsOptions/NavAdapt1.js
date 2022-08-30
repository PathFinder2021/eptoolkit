import '../Nav.scss'
import React, { useEffect } from 'react';
import Colors from '../../../components/Styles/colors';
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
        <b>Navigation</b>
      </header>
      <ul style={{ listStyle: 'none' }}>
        <li className="menu-item"><Link activeClass="active" to="id1" spy={true} smooth={true} duration={scrollTime}>How it works</Link></li>
        <li className="menu-item"><Link to="id2" spy={true} smooth={true} duration={scrollTime}>Effects on cultural significance</Link></li>
        <li className="menu-item"><Link to="id3" spy={true} smooth={true} duration={scrollTime}>Side effects &#38; sustainability</Link></li>
        <li className="menu-item"><Link to="id4" spy={true} smooth={true} duration={scrollTime}>Heritage suitability &#38; design options</Link></li>
        <li className="menu-item"><Link to="id5" spy={true} smooth={true} duration={scrollTime}>Related retrofit measures</Link></li>
      </ul>
    </div>
  )

};
export default Nav;