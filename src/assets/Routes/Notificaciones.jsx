import React from 'react'
import styles from '../../Components/styles/Resetpassword.module.css'

const Notificaciones = () => {
  return (
    <div>
        <h1>No hay notificaciones</h1>
        <div className={styles.divParrafoNotificaciones}>
            <p>¡Gracias por visitar nuestro sitio web! Estamos constantemente trabajando para mejorar la experiencia de usuario y ofrecer un servicio de calidad. Mantente atento a las actualizaciones que realizaremos en nuestro sitio para brindarte una experiencia aún mejor. ¡Esperamos verte de nuevo pronto!</p>
        </div>
        <div style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}>
  <iframe
    src="https://giphy.com/embed/2ikwIgNrmPZICNmRyX"
    width="100%"
    height="100%"
    style={{ position: 'absolute' }}
    frameBorder="0"
    className="giphy-embed"
    allowFullScreen
    ></iframe>
    </div>
    <p>
    </p>

    </div>
  )
}

export default Notificaciones