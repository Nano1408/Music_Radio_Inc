import React, { useState } from 'react';
import styles from './styles/loginAuth.module.css'

const loginAuth = ({ 
  isRegistrando, 
  setIsRegistrando, 
  submitHandler, 
  restablecerContrasena, 
  showErrorEmail,
  showErrorPassword,
  showErrorNombre,
  showErrorApellido,
  showErrorIdentificacion,
  showErrorDireccion,
  showErrorCiudad,
  showErrorTelefono 
}) => {
    const [Nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [numIdentificacion, setnumIdentificacion] = useState('');
    const [direccion, setdireccion] = useState('');
    const [ciudad, setciudad] = useState('');
    const [telefono, settelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const LimpiarCapos = () =>{
      setNombre("");
      setApellido("");
      setnumIdentificacion("");
      setdireccion("");
      setciudad("");
      settelefono("");
      setCorreo("");
      setPassword("");
    }
  
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
          {/* direccion de correo de autenticacion o registro usuarios */}
            <label htmlFor='emailField'>Correo</label>
                {/* Parrafo de error con la condicion de longitud de valores en login */}
                <p className={styles.errorFormImputCondition} style={{display: showErrorEmail ? 'block' : 'none'}}>El correo no debe tener mas de 50 caracteres</p>
            <input type='email' id='emailField' name='emailField' value={correo} onChange={(e) => setCorreo(e.target.value)} required placeholder='Escribe tu Correo...' autoComplete='username'/>
            {/* pasword de autenticacion o registro de usuario */}
            <label htmlFor='passwordField' autoComplete="current-password">Contraseña</label>
            {/* Parrafo de error con la condicion de longitud de valores en login */}
            <p className={styles.errorFormImputCondition} style={{display: showErrorPassword ? 'block' : 'none'}}>Tu contraseña no debe tener mas de 20 caracteres</p>
            <input type='password' id='passwordField' name='passwordField' value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Escribe tu Contraseña...' autoComplete="current-password"/>
      
            {/* si se esta registrando se muestra este otro formulario */}
            {isRegistrando && (
              <>
              {/* nombre */}
              <label htmlFor='NombreField'>Nombre(s)</label>
              {/* Parrafo de error con la condicion de longitud de valores en login */}
              <p className={styles.errorFormImputCondition} style={{display: showErrorNombre ? 'block' : 'none'}}>Tu nombre no debe tener mas de 50 caracteres</p>
                <input type='text' id='NombreField' name='NombreField' value={Nombre} onChange={(e) => setNombre(e.target.value)} required placeholder='Escribe tu Nombre...'/>
                {/* apellido */}
              <label htmlFor='apellidoField'>Apellido</label>
              {/* Parrafo de error con la condicion de longitud de valores en login */}
              <p className={styles.errorFormImputCondition} style={{display: showErrorApellido ? 'block' : 'none'}}>Los apellidos no deben tener mas de 50 caracteres</p>
                <input type='text' id='apellidoField' name='apellidoField' value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder='Escribe tu Apellido...'/>
                {/* identificacion */}
                <label htmlFor='numIdentificacionField'>Identificacion</label>
                {/* Parrafo de error con la condicion de longitud de valores en login */}
                <p className={styles.errorFormImputCondition} style={{display: showErrorIdentificacion ? 'block' : 'none'}}>Tu ID no debe tener mas de 15 caracteres</p>
                <input type='text' id='numIdentificacionField' name='numIdentificacionField' value={numIdentificacion} onChange={(e) => setnumIdentificacion(e.target.value)} required placeholder='Escribe tu Nº Identificaíon...'/>
                {/* direccion recidencia */}
                <label htmlFor='direccionField'>Direccion Residencia</label>
                {/* Parrafo de error con la condicion de longitud de valores en login */}
                <p className={styles.errorFormImputCondition} style={{display: showErrorDireccion ? 'block' : 'none'}}>La dirección no debe tener mas de 200 caracteres</p>
                <input type="text" id='direccionField' name='direccionField' value={direccion} onChange={(e) => setdireccion(e.target.value)} required placeholder='Escribe tu Dirección...'/>
                {/* Ciudad */}
                <label htmlFor='ciudadField'>Ciudad</label>
                {/* Parrafo de error con la condicion de longitud de valores en login */}
                <p className={styles.errorFormImputCondition} style={{display: showErrorCiudad ? 'block' : 'none'}}>Ciudad no debe tener mas de 20 caracteres</p>
                <input type="text" id='ciudadField' name='ciudadField' value={ciudad} onChange={(e) => setciudad(e.target.value)}placeholder='Escribe tu Ciudad de Recidencia...'/>
                {/* telefono o celular */}
                <label htmlFor='telefonoField'>Num Celular</label>
                {/* Parrafo de error con la condicion de longitud de valores en login */}
                <p className={styles.errorFormImputCondition} style={{display: showErrorTelefono ? 'block' : 'none'}}>Numero de celular no debe tener mas de 10 digitos</p>
                <input type="text" id='telefonoField' name='telefonoField' value={telefono} onChange={(e) => settelefono(e.target.value)}placeholder='Escribe tu Celular o Telefono...'/>
              </>
            )}
            <button className={styles.btnLoginRegister} type='submit'>{isRegistrando ? 'Registrarme' : 'Iniciar Sesion'}</button>
        </form>
        <div className={styles.btnRegister}>
        <button onClick={() => setIsRegistrando(!isRegistrando)}>
          {isRegistrando ? 'Ya tienes cuenta? ¡Inicia Sesion' : '¡Registrate Gratis!'}
        </button>
        <div className={styles.containerLimpiar}>
        {/* Limpiar campos */}
        <a className={styles.passwordOlvidada} onClick={LimpiarCapos}>Limpiar Campos</a>
        {/* forgOut password */}
        <a className={styles.passwordOlvidada} onClick={restablecerContrasena}>¿Olvidaste tu contraseña?</a>
        </div>
        </div>
        </section>
      </div>
    );
  };

export default loginAuth;