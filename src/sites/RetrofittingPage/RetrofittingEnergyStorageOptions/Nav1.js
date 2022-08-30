import '../Nav.scss'
import React, { useEffect } from 'react';
import Colors from '../../../components/Styles/colors';
import { Link } from 'react-scroll'

import { useTranslation } from 'react-i18next';
import i18n from "../../../i18n"

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
          {t('navHeader', { ns: 'rEnergyStorage' })}
        </b>
      </header>
      <ul style={{ listStyle: 'none' }}>
        <li className="menu-item"><Link activeClass="active" to="id1" spy={true} smooth={true} duration={scrollTime}>
          {t('nav1', { ns: 'rEnergyStorage' })}
        </Link></li>
        <li className="menu-item"><Link activeClass="active" to="id2" spy={true} smooth={true} duration={scrollTime}>
          {t('nav2', { ns: 'rEnergyStorage' })}
        </Link></li>
        <li className="menu-item"><Link activeClass="active" to="id3" spy={true} smooth={true} duration={scrollTime}>
          {t('nav3', { ns: 'rEnergyStorage' })}
        </Link></li>
      </ul>
    </div>
  )

};
export default Nav;