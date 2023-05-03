// import React from 'react'
import { useState } from 'react';
import { app } from '../fb';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { GiHamburgerMenu } from "react-icons/gi";
import styles from './styles/header.module.css';


const Header = () => {

    const [menu, setMenu] = useState(false);
    const [showPerfil, setShowPerfil] = useState(false);

    const cerrarSesion = () => {
        app.auth().signOut();
    }

  const togleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header>
        <ul className={styles.headerUl}>
          <img className={styles.imgLogoHome} src="/Logo_Music_Radio_Inc.png" alt="Logo_Music_Radio_inc.png" />
          <li className={`${menu ? styles.active : ''}`}>
            <Link className={styles.home} to='/'>Home</Link>
            {/* boton perfil */}
            <div className={`${styles.ShowHoverdiv} ${showPerfil ? styles.show : ''}`}>
              <a className={`${styles.hidden}`}>Suscribirse</a>
              <Link className={`${styles.hidden}`} to='/miperfil'>Cuenta</Link>
              <a className={`${styles.hidden}`} onClick={cerrarSesion}>Cerrar sesion</a>
            </div>
            {/* boton de perfil visible en header */}
            <button className={styles.btnPerfilDown} onClick={() => setShowPerfil(!showPerfil)}>
              <div>
                <CgProfile className={styles.profileIncon}/> 
                <span>perfil</span> 
                <MdKeyboardArrowDown className={styles.arrowDown}/> 
              </div>
            </button>
          </li>

            <h3> <GiHamburgerMenu className={styles.iconBurgerMenu} onClick={togleMenu} /> </h3>
        </ul>
    </header>
  )
}

export default Header