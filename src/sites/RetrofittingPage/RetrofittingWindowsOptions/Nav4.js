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
        borderColor: Colors.primaryColor1,
        boxShadow: "0px 8px 10px -5px #00000040",
      }}>
      <header className="navHeader"
        style={{
          backgroundColor: Colors.primaryColor1,
          borderTopRightRadius: 11,
        }}>
        <b>Navigation</b>
      </header>
      <ul style={{ listStyle: 'none' }}>
        <li className="menu-item"><Link activeClass="active" to="id1" spy={true} smooth={true} duration={scrollTime}>Add curtains</Link></li>
        <li className="menu-item"><Link to="id2" spy={true} smooth={true} duration={scrollTime}>Add interior shutters</Link></li>
        <li className="menu-item"><Link to="id3" spy={true} smooth={true} duration={scrollTime}>Add exterior shutters</Link></li>
      </ul>
    </div>
  )

};
export default Nav;