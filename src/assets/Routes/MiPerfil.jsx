import React from "react";
import { useState } from "react";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";
import { MdPassword, MdOutlineNotificationsNone } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { SlArrowDown, SlArrowUp } from "react-icons/sl"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styles from "../../Components/styles/Perfil.module.css";
import editarstyles from '../../Components/styles/editarPerfil.module.css'
import Cuenta from "./Cuenta.jsx";
import EditarPerfil from "./EditarPerfil";
import ResetPassword from "./ResetPassword";
import Notificaciones from "./Notificaciones";
import { render } from "react-dom";


const MiPerfil = () => {

    const [activeOption, setActiveOption] = useState("Vista general de la cuenta");
    // menu togle para el menu de opciones del perfil
    const [showOptions, setShowOptions] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleOptions = () => {
      setShowOptions(!showOptions);
      setIsMenuOpen(!isMenuOpen);
    };
    
    // objeto que contiene las opciones y sus respectivos iconos
    const options = {
      "Vista general de la cuenta": <AiOutlineHome className={styles.icons} />,
      "Editar perfil": <FiEdit className={styles.icons} />,
      "Cambiar contraseña": <MdPassword className={styles.icons} />,
      "Configurar notificaciones": <MdOutlineNotificationsNone className={styles.icons} />,
      "Aplicaciones": <AiOutlineAppstore className={styles.icons} />
    };
    // función para renderizar el icono correspondiente en función de la opción seleccionada
    const renderIcon = (option) => {
      if (options.hasOwnProperty(option)) {
        return options[option];
      }
    };

  const components = {
    "Vista general de la cuenta": <Cuenta />,
    "Editar perfil": <EditarPerfil />,
    'Cambiar contraseña': <ResetPassword />,
    'Configurar notificaciones': <Notificaciones />,
    // 'Aplicaciones': <Aplicaciones />,
  };


  // OnClick para manejar los eventos de cada items
  const handleOptionClick = (option) => {
      setActiveOption(option);
      setIsMenuOpen(false);
      setShowOptions(false); // Oculta las opciones después de hacer clic en una opción
  };


  return (
    <div className={styles.ContainerPerfil}>
      <Header />

      <div className={styles.ContainerSections}>
        {/* seccion del banner de promoción */}
        <section className={styles.sectionPromocion}>
          {/* div contenedor de promociones y planes */}
          <div className={styles.containerPublicidadPromo}>
            <h2>3 meses de Premium por $ 0,00</h2>
            <div className={styles.TextPublicitario}>
              Disfruta de música sin anuncios, reproducción en modo offline y
              mucho más. Cancela cuando quieras.
            </div>
            {/* botones de promocion y planes */}
            <div className={styles.DivCortesia}>
              <a
                className={styles.Obten3meses}
                target="_black" href="https://www.spotify.com/co-es/purchase/offer/2023-midyear-v1-trial-3m/?marketing-campaign-id=midyear-2023-v1&referrer=account_hero_free"
              >
                <span>
                  <span>Obten 3 meses por $0,00</span>
                </span>
              </a>
              <a
                className={styles.Obten3meses}
                target="_black" href="https://www.spotify.com/co-es/purchase/offer/2023-midyear-v1-trial-3m/?marketing-campaign-id=midyear-2023-v1&referrer=account_hero_free"
              >
                <span>
                  <span>Ver planes</span>
                </span>
              </a>
            </div>
            {/* texto terminos y condiciones */}
            <div className={styles.divTerminosCondiciones}>
              Solo para el plan Individual. Después, cuesta $ 14.900,00 al mes.
              <a href="https://www.spotify.com/co-es/legal/premium-promotional-offer-terms/">
                Se aplican Términos y Condiciones.
              </a>
              Disponible solo para usuarios que todavía no han probado Premium.
              La oferta termina el 16/05/23.
            </div>
          </div>
          {/* imagen de seccion promocional */}
          <div className={styles.divImgPublicidad}>
            <img
              src="/account-promocion-profile.jpg"
              alt="account-promocion-profile.jpg"
            />
          </div>
        </section>

        {/* contenedor del perfil de usuarios */}
        <div className={styles.ContainerDiv}>
          <section className={styles.ContainerSectionOne}>
            {/* div que contiene el icono de subir foto */}
            <div className={styles.DivImagen}>
              <img
                src="ruta/de/la/imagen"
                alt="Descripción de la imagen"
                onError={(e) => {
                  e.target.src = "/icon-image-users.png";
                }}
              />
            </div>

            {/* div opciones info del perfil */}
            <div className={styles.ContainerOptionIfoProfile}>

              {/* boton togle para el maximo de 930px de despliegue de opciones */}
              <button className={styles.ToggleOptionsButton} onClick={toggleOptions}>
                {/* opcion seleccionada al lado del boton menu items */}
                <li className={`${styles.liItemsProfile} ${styles.coloWhite}`}>
                    <a>
                      {renderIcon(activeOption)}
                      {activeOption}
                    </a>
                </li>
               {isMenuOpen ? <SlArrowUp className={styles.icons} /> : <SlArrowDown className={styles.icons} />}
              </button>

              {/* menú desplegable */}
              <ul className={`${styles.ListOptionProfile} ${showOptions ? `${styles.show}` : `${styles.hide}`}`}>
                {/* vista general del perfil */}
                <li className={`${styles.liItemsProfile} ${styles.SelectedOption} ${
                      activeOption === "Vista general de la cuenta"
                        ? `${styles.active} active`
                        : ""
                    }`}
                    onClick={() => handleOptionClick("Vista general de la cuenta")}>
                  <a>
                    <AiOutlineHome className={styles.icons} />
                    Vista general de la cuenta
                  </a>
                </li>

                {/* Editar Perfil */}
                <li className={`${styles.liItemsProfile} ${
                      activeOption === "Editar perfil"
                        ? `${styles.active} active`
                        : ""
                    }`}
                    onClick={() => handleOptionClick("Editar perfil")}>
                  <a>
                    <FiEdit className={styles.icons} />
                    Editar perfil
                  </a>
                </li>

                {/* Cambiar contraseña */}
                <li className={`${styles.liItemsProfile} ${
                      activeOption === "Cambiar contraseña"
                        ? `${styles.active} active`
                        : ""
                    }`}
                    onClick={() => handleOptionClick("Cambiar contraseña")}>
                  <a>
                    <MdPassword className={styles.icons} />
                    Cambiar contraseña
                  </a>
                </li>

                {/* Configurar notificaciones */}
                <li className={`${styles.liItemsProfile} ${
                      activeOption === "Configurar notificaciones"
                        ? `${styles.active} active`
                        : ""
                    }`}
                    onClick={() =>
                      handleOptionClick("Configurar notificaciones")
                    }
                    >
                  <a>
                    <MdOutlineNotificationsNone className={styles.icons} />
                    Configurar notificaciones
                  </a>
                </li>
                
                {/* aplicaciones */}
                <li className={`${styles.liItemsProfile} ${
                      activeOption === "Aplicaciones"
                        ? `${styles.active} active`
                        : ""
                    }`}
                    onClick={() => handleOptionClick("Aplicaciones")}
                    >
                  <a>
                    <AiOutlineAppstore className={styles.icons} />
                    Aplicaciones
                  </a>
                </li>
              </ul>
            </div>
          </section>
          {/* seccion informacion perfil */}
          <section className={styles.ContainerSectionProfileTwo}>
            {components[activeOption]}
            {/* boton de editar perfil en seccion vista general */}
            {activeOption === "Vista general de la cuenta" && (
              <a
                className={`${styles.EditarPerfil} ${
                  activeOption === "Editar perfil"
                    ? `${styles.active} active`
                    : ""
                }`}
                onClick={() => handleOptionClick("Editar perfil")}
              >
                Editar perfil
              </a>
            )}

            {/* boton para volver a vista general */}
            {activeOption === "Editar perfil" && (
              <a
                className={`${editarstyles.VolverVistaGeneral} ${
                  activeOption === "Vista general de la cuenta"
                    ? `${styles.active} active`
                    : ""
                }`}
                onClick={() => handleOptionClick("Vista general de la cuenta")}
              >
                Cancelar
              </a>
            )}

          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MiPerfil;
