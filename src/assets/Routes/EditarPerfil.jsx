import React from "react";
import styles from "../../Components/styles/editarPerfil.module.css"
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
// import { async } from "q";

const EditarPerfil = () => {

  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // desabilitar input correo
  const disableInput = (e) => {
    e.target.disabled = true;
  }

  // useEffect(()=> {
  //   console.log(userData)
  // }, [userData]);

  useEffect(() => {
    getUserData()
  }, []);

  const getUserData = async () => {
    try {
      const auth = getAuth ();
      const user = auth.currentUser;
      if (user){
        const db = getFirestore();
        const userDocRef = doc(db, "Music_Users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if ( userDocSnapshot.exists()){
          setUserData(userDocSnapshot.data());
        }
        setIsLoading(false);
      }
    }catch (error){
      console.log("error"+ error);
      setIsLoading(false);
    }
  }


  // evento submit para enviar los datos editados
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const auth = getAuth();
      const user = auth.currentUser;
      const db = getFirestore();
      const userDocRef = doc(db, "Music_Users", user.uid);
      await updateDoc(userDocRef, {
        nombre: e.target.elements.nombre.value,
      });
      console.log("Datos actualizados correctamente");
    }catch (error){
      console.log("error" + error)
    }
  }

  if (isLoading) return <div className={styles.loadingContainer}><span className={styles.loader}></span></div>

  return (
    <>
      <article className={styles.containerEditarPerfil}>
        <section className={styles.sectionContainerEditarPerfil}>
          <div className={styles.title}>
            <h1>Editar perfil</h1>
          </div>
          {/* formulario de los datos a editar */}
          <div className="containerForm">
            <form onSubmit={handleSubmit}>
              <section className={styles.sectionForm}>
                {/* primer input (correo)*/}
                <div className={styles.inputOneTwo}>
                  <div>
                    <label htmlFor="correo">
                      <span>Correo electrónico</span>
                    </label>
                  </div>
                  <input type="text" disabled onFocus={disableInput} onBlur={disableInput} id="correo" name="correo" value={userData.correo}/>
                </div>
                {/* segundo input (numero de identidad)*/}
                <div className={styles.inputOneTwo}>
                  <div>
                    <label htmlFor="numIdentificacion">
                      <span>Nº Identidad</span>
                    </label>
                  </div>
                  <input type="text" disabled onFocus={disableInput} onBlur={disableInput} id="numIdentificacion" name="numIdentificacion" value={userData.numIdentificacion}/>
                </div>
                {/* tercer input (nombre)*/}
                <section className={styles.sectionNombreApellido}>
                  <div className={styles.inputOneTwo}>
                  <div>
                    <label htmlFor="nombre">
                      <span>Nombre</span>
                    </label>
                  </div>
                  <input type="text" id="nombre" name="nombre" defaultValue={userData.nombre}/>
                </div>
                {/* cuarto input (apellido)*/}
                <div className={styles.inputOneTwo}>
                  <div>
                    <label htmlFor="apellido">
                      <span>Apellido</span>
                    </label>
                  </div>
                  <input type="text" id="apellido" name="apellido" defaultValue={userData.apellido}/>
                </div>
                </section>
                {/* quinto input (telefono)*/}
                <div className={styles.inputOneTwo}>
                  <div>
                    <label htmlFor="telefono">
                      <span>Nº Celular</span>
                    </label>
                  </div>
                  <input type="text" id="telefono" name="telefono" defaultValue={userData.telefono}/>
                </div>
                {/* sexto input (ciudad)*/}
                <div className={styles.inputOneTwo}>
                  <div>
                    <label htmlFor="ciudad">
                      <span>ciudad o región</span>
                    </label>
                  </div>
                  <select name="ciudad" id="cidad">
                    <option value="ciudad">{userData.ciudad}</option>
                  </select>
                </div>
              </section>
  
              {/* boton de editar informacion */}
              <div className={styles.divBtnEditarPerfil}>
              <button type="submit" className={styles.btnEditar}>Editar perfil</button>
              </div>
            </form>
          </div>
        </section>
        {/* span prueba */}
        {/* <div className={styles.loadingContainer}>
         <span className={styles.loader}></span>
        </div> */}
      </article>
    </>
  );
};

export default EditarPerfil;
