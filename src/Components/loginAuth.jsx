import React, { useState } from 'react';
import styles from './styles/loginAuth.module.css'

const loginAuth = ({ isRegistrando, setIsRegistrando, submitHandler, restablecerContrasena }) => {
    const [Nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [numIdentificacion, setnumIdentificacion] = useState('');
    const [direccion, setdireccion] = useState('');
    const [ciudad, setciudad] = useState('');
    const [telefono, settelefono] = useState('');
  
    return (
      <div className={styles.containerForm}>
            <img className={styles.imgLoginAuth} src="./loginAuth.png" alt="loginAuth.png" />
        {/* seccion del formulario */}
        <section className={styles.containerFormImg}>
        <form className={styles.form} onSubmit={submitHandler}>
          {/* png moreno knabel laemel titok dibujo animate */}
          <img className={styles.khabyLamel} src="./dibujo-khaby-lame.png" alt="khaby_lamel.png" />
            {/* titulo iniciar sesion o registrate */}
          <h1 className={styles.titleLoginAuth}>{isRegistrando ? 'Registrarme' : 'Iniciar Sesion'}</h1>
            <label htmlFor='emailField'>Correo</label>
            <input type='email' id='emailField' name='emailField' required placeholder='Escribe tu Correo...'/>
            <label htmlFor='passwordField' autoComplete="current-password">Contraseña</label>
            <input type='password' id='passwordField' name='passwordField' required placeholder='Escribe tu Contraseña...'/>
      
            {/* si se esta registrando se muestra este otro formulario */}
            {isRegistrando && (
              <>
              {/* nombre */}
              <label htmlFor='NombreField'>Nombre(s)</label>
                <input type='text' id='NombreField' name='NombreField' value={Nombre} onChange={(e) => setNombre(e.target.value)} required placeholder='Escribe tu Nombre...'/>
                {/* apellido */}
              <label htmlFor='apellidoField'>Apellido</label>
                <input type='text' id='apellidoField' name='apellidoField' value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder='Escribe tu Apellido...'/>
                {/* identificacion */}
                <label htmlFor='numIdentificacionField'>Identificacion</label>
                <input type='text' id='numIdentificacionField' name='numIdentificacionField' value={numIdentificacion} onChange={(e) => setnumIdentificacion(e.target.value)} required placeholder='Escribe tu Nº Identificaíon...'/>
                {/* direccion recidencia */}
                <label htmlFor='direccionField'>Direccion Residencia</label>
                <input type="text" id='direccionField' name='direccionField' value={direccion} onChange={(e) => setdireccion(e.target.value)} required placeholder='Escribe tu Dirección...'/>
                {/* Ciudad */}
                <label htmlFor='ciudadField'>Ciudad</label>
                <input type="text" id='ciudadField' name='ciudadField' value={ciudad} onChange={(e) => setciudad(e.target.value)}placeholder='Escribe tu Ciudad de Recidencia...'/>
                {/* telefono o celular */}
                <label htmlFor='telefonoField'>Num Celular</label>
                <input type="text" id='telefonoField' name='telefonoField' value={telefono} onChange={(e) => settelefono(e.target.value)}placeholder='Escribe tu Celular o Telefono...'/>
              </>
            )}
            <button type='submit'>{isRegistrando ? 'Registrarme' : 'Iniciar Sesion'}</button>
        </form>
        <div className={styles.btnRegister}>
        <button onClick={() => setIsRegistrando(!isRegistrando)}>
          {isRegistrando ? 'Ya tienes cuenta? ¡Inicia Sesion' : 'No tienes cuenta ¡Registrate Gratis'}
        </button>
        {/* forgOut password */}
        <a className={styles.passwordOlvidada} onClick={restablecerContrasena}>¿Olvidaste tu contraseña?</a>
        </div>
        </section>
      </div>
    );
  };

export default loginAuth;