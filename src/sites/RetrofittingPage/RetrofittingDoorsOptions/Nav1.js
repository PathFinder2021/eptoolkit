import '../Nav.scss'
import React, { useEffect } from 'react';
import Colors from '../../../components/Styles/colors';
import { Link } from 'react-scroll'

import { useTranslation } from 'react-i18next';

const scrollTime = 400;

const Nav = () => {

  let navClasses = ['nav'];

  const { t } = useTranslation();

  return (
    <div className={navClasses.join(" ")}
      style={{
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: "3px",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        position: "sticky",
        top: "20%", // sticky won't work without top
        borderColor: Colors.primaryColor1,
        boxShadow: "0px 8px 10px -5px #00000040",
      }}>
      <header className="navHeader"
        style={{
          backgroundColor: Colors.primaryColor1,
          borderTopRightRadius: 11,
        }}>
        <b>
          {t('navHeader', { ns: 'rDoors' })}
        </b>
      </header>
      <ul style={{ listStyle: 'none' }}>
        <li className="menu-item"><Link activeClass="active" to="id1" spy={true} smooth={true} duration={scrollTime}>
          {t('nav1', { ns: 'rDoors' })}
        </Link></li>
        <li className="menu-item"><Link activeClass="active" to="id2" spy={true} smooth={true} duration={scrollTime}>
          {t('nav2', { ns: 'rDoors' })}
        </Link></li>
        <li className="menu-item"><Link activeClass="active" to="id3" spy={true} smooth={true} duration={scrollTime}>
          {t('nav3', { ns: 'rDoors' })}
        </Link></li>
        <li className="menu-item"><Link activeClass="active" to="id4" spy={true} smooth={true} duration={scrollTime}>
          {t('nav4', { ns: 'rDoors' })}
        </Link></li>
        <li className="menu-item"><Link activeClass="active" to="id5" spy={true} smooth={true} duration={scrollTime}>
          {t('nav5', { ns: 'rDoors' })}
        </Link></li>
        <li className="menu-item"><Link activeClass="active" to="id6" spy={true} smooth={true} duration={scrollTime}>
          {t('nav6', { ns: 'rDoors' })}
        </Link></li>
        <li className="menu-item"><Link activeClass="active" to="id7" spy={true} smooth={true} duration={scrollTime}>
          {t('nav7', { ns: 'rDoors' })}
        </Link></li>
      </ul>
    </div>
  )

};
export default Nav;