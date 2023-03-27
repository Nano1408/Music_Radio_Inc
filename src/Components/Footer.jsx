import React from 'react'
import styles from './styles/footer.module.css'
import './styles/normalize.css'

const Footer = () => {
  return (
    <>
    <footer className={styles.containerFooterClean}>
        <ul className={styles.footerClean}>
            <h3>Services</h3>
            <li>Web design</li>
            <li>Development</li>
            <li>Hosting</li>
        </ul>
        <ul className={styles.footerClean}>
            <h3>About</h3>
            <li>Company</li>
            <li>Team</li>
            <li>Legacy</li>
        </ul>
        <ul className={styles.footerClean}>
            <h3>Carers</h3>
            <li>Job openings</li>
            <li>Employee success</li>
            <li>Benefits</li>
        </ul>
        <div>

        </div>
    </footer>
    </>
  )
}

export default Footer