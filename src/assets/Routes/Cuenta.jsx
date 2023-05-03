import React from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import cuentastyles from "../../Components/styles/Cuenta.module.css";
// import { useHistory } from 'react-router-dom';

// const history = useHistory();

const Cuenta = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [activeOption, setActiveOption] = useState("Vista general de la cuenta");
  // const handleOptionClick = (option) =>{
  //   setActiveOption(option)
  // }

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, "Music_Users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          setUserData(userDocSnapshot.data());
        }
        setIsLoading(false);
      }
      // else {
      //   history.push('/login');
      // }
    } catch (error) {
      console.log("Error" + error);
      setIsLoading(false);
    }
  };

  return (
    <div className={cuentastyles.ContainerAll}>
      <h1>Vista general de la cuenta</h1>
      <h3>Perfil</h3>
      {isLoading ? (
        <table>
          <tbody>
            {/* nombre */}
            <tr className={cuentastyles.TrTable}>
              <td><span className={cuentastyles.loader}>Loading...</span></td>
            </tr>
            {/* correo */}
            <tr className={cuentastyles.TrTable}>
              <td><span className={cuentastyles.loader}>Loading...</span></td>
            </tr>
            {/* telefono */}
            <tr className={cuentastyles.TrTable}>
              <td><span className={cuentastyles.loader}>Loading...</span></td>
            </tr>
            {/* ciudad */}
            <tr className={cuentastyles.TrTable}>
              <td><span className={cuentastyles.loader}>Loading...</span></td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table className={cuentastyles.tableCuenta}>
          <tbody>
            <tr className={cuentastyles.TrTable}>
              <td>Nombre</td>
              <td>
                {userData.nombre} {userData.apellido}
              </td>
            </tr>
            {/* correo electronico */}
            <tr className={cuentastyles.TrTable}>
              <td>Correo electrónico</td>
              <td>{userData.correo}</td>
            </tr>
            {/* telefono */}
            <tr className={cuentastyles.TrTable}>
              <td>Telefono celular</td>
              <td>{userData.telefono}</td>
            </tr>
            {/* prueba de laoding */}
            {/* <tr className={cuentastyles.TrTable}>
              <td><span className={cuentastyles.loader}>Loading...</span></td>
            </tr> */}

            {/* ciudad */}
            <tr className={cuentastyles.TrTable}>
              <td>Ciudad</td>
              <td>{userData.ciudad}</td>
            </tr>

          </tbody>
        </table>
      )}

      {/* plan del usuario */}
      <article className={cuentastyles.containerPlanUser}>
        <h4 className={cuentastyles.titlePlan}>Tu plan</h4>
        {/* seccion container plan spotify */}
        <section className={cuentastyles.containerSpotifyPlan}>
          <div className={cuentastyles.div1_PlaFree}>
            {/* primer bloque frase plan spotify */}
            <div className={cuentastyles.fraseSpotufyFree}>
              <span>Music Radio Inc free</span>
            </div>
            {/* segundo bloque frase plan spotify */}
            <div className={cuentastyles.fraseSpotufyFree}>
              <span></span>
            </div>
          </div>
          <div></div>
          {/* descripcion plan spotify */}
          <div className={cuentastyles.decripcionContainer}>
            <div className={cuentastyles.description}>
              <p>Reproduce contenido en Modo aleatorio, con anuncios.</p>
            </div>
            <div className={cuentastyles.planAdquirido}>
              <h3>Gratis</h3>
            </div>
          </div>
        </section>

        <div className={cuentastyles.unetePremium}>
          <a target="_back" href="https://www.spotify.com/co-es/premium/?ref=account_join_premium_button#plans">
            Unete a premium
          </a>
       </div>
      </article>

      <article className={cuentastyles.cerrarSesionTodo}>
        <div className={cuentastyles.containerParrafoCerrarSesion}>
          <h3>Cierra sesión en todas partes</h3>
          <p>
          De esta manera, puedes cerrar tu sesión de Spotify en todos los dispositivos: el teléfono, la tablet, el reproductor web y la aplicación de escritorio. Esto no incluye dispositivos vinculados (p. ej., altavoces, consolas de videojuego y televisores). Para estos casos,
          <a href="https://www.spotify.com/co-es/account/apps/"> dirígete a la página de tus aplicaciones  </a>
          y selecciona ELIMINAR ACCESO.
          </p>
        </div>
        {/* nota */}
        <div className={cuentastyles.divContainerNota}>
          <div className={cuentastyles.divNota}>
            <span>Nota: el cierre de sesión en el reproductor web puede tardar hasta 1 hora.</span>
          </div>
        </div>
        {/* boton cerrar sesion en todas partes */}
        <div className={cuentastyles.btn_Cerrar_Todas_las_Sesiones}>
          <a target="_back" href="https://open.spotify.com/?">Cierra sesión en todas partes</a>
        </div>
      </article>

    </div>
  );
};

export default Cuenta;
