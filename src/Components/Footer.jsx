import React from 'react'
import styles from './styles/footer.module.css'
import './styles/normalize.css'

const Footer = () => {
  return (
    <>
    <footer className={styles.containerFooterClean}>
        <ul className={styles.footerClean}>
            <h3>Music Radio Inc</h3>
            <li>Dispositivos</li>
            <li>Tarjeta de regalo</li>
            <li>Ayuda</li>
        </ul>
        <ul className={styles.footerClean}>
            <h3>Caracteristicas</h3>
            <li>Flow</li>
            <li>Identifica canciones</li>
            <li>Music Letra</li>
            <li>Reproduccion sin conexión</li>
        </ul>
        <ul className={styles.footerClean}>
            <h3>Quienes somos?</h3>
            <li>Grupo de musicos</li>
            <li>Desarrolladores</li>
            <li>Podcasters</li>
        </ul>
        <div>

        </div>
    </footer>
    </>
  )
}

export default Footer