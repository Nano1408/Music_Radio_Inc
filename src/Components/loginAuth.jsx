import React, { useState } from 'react';
import styles from './styles/loginAuth.module.css'
// icons reacts
import { MdPersonPin, MdEmail, MdPhonelinkRing, MdError } from 'react-icons/md';
import { FaMapMarkerAlt, FaCity } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/Ri';
import { HiIdentification } from 'react-icons/hi';

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
  showErrorTelefono,
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
          <h1 className={styles.titleLoginAuth}>{isRegistrando ? 'Registrarme' : 'Bienvenido a Music Radio Inc'}</h1>

          {/* correo */}
          <div className={styles.divFormInput} id="grupo__correo">
            <h3 className={styles.formularioValidacionEstado}> <MdEmail /> </h3>
            <input type='email' id='emailField' name='emailField' value={correo} onChange={(e) => setCorreo(e.target.value)} required autoComplete='username'/>
            <label htmlFor='emailField'><span>correo@correo.com</span></label>
          </div>
              {/* Parrafo de error con la condicion de longitud de valores en login */}
          <div className={styles.DiverrorPCondition}>
              <p className={styles.errorFormImputCondition} style={{display: showErrorEmail ? 'block' : 'none'}}>No debes pasar de 50 caracteres <MdError /></p>
          </div>

            {/* password */}
            <div className={styles.divFormInput} id="grupo__password">
                <h3 className={styles.formularioValidacionEstado}> <RiLockPasswordFill /> </h3>
            <input type='password' id='passwordField' name='passwordField' value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password"/>
            <label  htmlFor='passwordField' autoComplete="current-password"><span>*********</span></label>
            </div>
              {/* Parrafo de error con la condicion de longitud de valores en login */}
            <div className={styles.DiverrorPCondition}>
              <p className={styles.errorFormImputCondition} style={{display: showErrorPassword ? 'block' : 'none'}}>No debes pasar de 20 caracteres <MdError /></p>
            </div>
      
            {/* si se esta registrando se muestra este otro formulario */}
            {isRegistrando && (
              <>
              {/* nombre */}
              <div className={styles.divFormInput} id="grupo__nombre">
              <h3 className={styles.formularioValidacionEstado}> <MdPersonPin /> </h3>
                <input type='text' id='NombreField' name='NombreField' value={Nombre} onChange={(e) => setNombre(e.target.value)} required />
              <label htmlFor='NombreField'><span>Nombre(s)</span></label>
              </div>
                {/* Parrafo de error con la condicion de longitud de valores en login */}
              <div className={styles.DiverrorPCondition}>
              <p className={styles.errorFormImputCondition} style={{display: showErrorNombre ? 'block' : 'none'}}>Tu nombre no debe tener mas de 50 caracteres <MdError /></p>
              </div>
                
                  {/* apellido */}
                <div className={styles.divFormInput} id="grupo__apellido">
                <h3 className={styles.formularioValidacionEstado}> <MdPersonPin /> </h3>
                  <input type='text' id='apellidoField' name='apellidoField' value={apellido} onChange={(e) => setApellido(e.target.value)} required/>
                  <label  htmlFor='apellidoField' autoComplete="current-password"><span>Apellido(s)</span></label>
                </div>
                  {/* Parrafo de error con la condicion de longitud de valores en login */}
                <div className={styles.DiverrorPCondition}>
                  <p className={styles.errorFormImputCondition} style={{display: showErrorApellido ? 'block' : 'none'}}>Los apellidos no deben tener mas de 50 caracteres <MdError /></p>
                </div>
               
                {/* identificacion */}
                <div className={styles.divFormInput} id="grupo__identificacion">
                <h3 className={styles.formularioValidacionEstado}> <HiIdentification /> </h3>
                <input type='Number' id='numIdentificacionField' name='numIdentificacionField' value={numIdentificacion} onChange={(e) => setnumIdentificacion(e.target.value)} required />
                <label htmlFor='numIdentificacionField'><span>Identificación</span></label>
                </div>
                  {/* Parrafo de error con la condicion de longitud de valores en login */}
                <div className={styles.DiverrorPCondition}>
                  <p className={styles.errorFormImputCondition} style={{display: showErrorIdentificacion ? 'block' : 'none'}}>Tu ID no debe tener mas de 15 caracteres<MdError /></p>
                </div>
                
                  {/* direccion recidencia */}
                <div className={styles.divFormInput} id="grupo__direccion">
                <h3 className={styles.formularioValidacionEstado}> <FaMapMarkerAlt /> </h3>
                <input type="text" id='direccionField' name='direccionField' value={direccion} onChange={(e) => setdireccion(e.target.value)} required />
                <label htmlFor='direccionField'><span>Direccion Residencia</span></label>
                </div>
                  {/* Parrafo de error con la condicion de longitud de valores en login */}
                <div className={styles.DiverrorPCondition}>
                <p className={styles.errorFormImputCondition} style={{display: showErrorDireccion ? 'block' : 'none'}}>La dirección no debe tener mas de 200 caracteres<MdError /></p>
                </div>
                
                {/* Ciudad */}
                <div className={styles.divFormInput} id="grupo__ciudad">
                <h3 className={styles.formularioValidacionEstado}> <FaCity /> </h3>
                <input type="text" id='ciudadField' name='ciudadField' value={ciudad} onChange={(e) => setciudad(e.target.value)} required/>
                <label htmlFor='ciudadField'><span>Ciudad</span></label>
                </div>
                  {/* Parrafo de error con la condicion de longitud de valores en login */}
                <div className={styles.DiverrorPCondition}>
                  <p className={styles.errorFormImputCondition} style={{display: showErrorCiudad ? 'block' : 'none'}}>Ciudad no debe tener mas de 20 caracteres <MdError /></p>
                </div>
                
                {/* telefono o celular */}
                <div className={styles.divFormInput} id="grupo__telefono">
                <h3 className={styles.formularioValidacionEstado}> <MdPhonelinkRing /> </h3>
                <input type="tel" pattern="^[0-9]*$" id='telefonoField' name='telefonoField' value={telefono} onChange={(e) => settelefono(e.target.value)} required />
                <label htmlFor='telefonoField'><span>Nº Celular</span></label>
                </div>
                  {/* Parrafo de error con la condicion de longitud de valores en login */}
                <div className={styles.DiverrorPCondition}>
                <p className={styles.errorFormImputCondition} style={{display: showErrorTelefono ? 'block' : 'none'}}>Numero de celular no debe tener mas de 10 digitos <MdError /></p>
                </div>
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