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

    // estado para focus en los label
    const handleFocus = (setState) => () => {
      setState(true);
    }
    
    const handleBlur = (setState) => () => {
      setState(true);
    }

    const [isFocusLabelNombre, setIsFocusLabelNombre] = useState(false);
    const [isFocusLabelApellido, setIsFocusLabelApellido] = useState(false);
    const [isFocusLabelIdentificacion, setIsFocusLabelIdentificacion] = useState(false);
    const [isFocusLabelDireccion, setIsFocusLabelDireccion] = useState(false);
    const [isFocusCiudad, setIsFocusLabelCiudad] = useState(false);
    const [isFocusLabelTelefono, setIsFocusLabelTelefono] = useState(false);

    // En lugar de una constante handleFocusEmail, usa la función genérica handleFocus
    const handleFocusNombre = handleFocus(setIsFocusLabelNombre);
    const handleFocusApellido = handleFocus(setIsFocusLabelApellido);
    const handleFocusIdentificacion = handleFocus(setIsFocusLabelIdentificacion);
    const handleFocusDireccion = handleFocus(setIsFocusLabelDireccion);
    const handleFocusCiudad = handleFocus(setIsFocusLabelCiudad);
    const handleFocusTelefono = handleFocus(setIsFocusLabelTelefono);

    // En lugar de una constante handleBlur, usa la función genérica handleBlur
    const handleBlurNombre = handleBlur(setIsFocusLabelNombre);
    const handleBlurApellido = handleBlur(setIsFocusLabelApellido);
    const handleBlurIdentificacion = handleBlur(setIsFocusLabelIdentificacion);
    const handleBlurDireccion = handleBlur(setIsFocusLabelDireccion);
    const handleBlurCiudad = handleBlur(setIsFocusLabelCiudad);
    const handleBlurTelefono = handleBlur(setIsFocusLabelTelefono);
  
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

          <div className={styles.divFormInput}>
                {/* Parrafo de error con la condicion de longitud de valores en login */}
                <p className={styles.errorFormImputCondition} style={{display: showErrorEmail ? 'block' : 'none'}}>El correo no debe tener mas de 50 caracteres</p>
            <input type='email' id='emailField' name='emailField' value={correo} onChange={(e) => setCorreo(e.target.value)} required autoComplete='username'/>
            <label htmlFor='emailField'><span>Correo</span></label>
          </div>

            <div className={styles.divFormInput}>
                {/* Parrafo de error con la condicion de longitud de valores en login */}
                <p className={styles.errorFormImputCondition} style={{display: showErrorPassword ? 'block' : 'none'}}>Tu contraseña no debe tener mas de 20 caracteres</p>
            <input type='password' id='passwordField' name='passwordField' value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password"/>
            <label  htmlFor='passwordField' autoComplete="current-password"><span>Contraseña</span></label>
            </div>
      
            {/* si se esta registrando se muestra este otro formulario */}
            {isRegistrando && (
              <>
              {/* nombre */}
              <div className={styles.divFormInput}>
              {/* Parrafo de error con la condicion de longitud de valores en login */}
              <p className={styles.errorFormImputCondition} style={{display: showErrorNombre ? 'block' : 'none'}}>Tu nombre no debe tener mas de 50 caracteres</p>
                <input type='text' id='NombreField' name='NombreField' value={Nombre} onChange={(e) => setNombre(e.target.value)} required />
              <label htmlFor='NombreField'><span>Nombre(s)</span></label>
              </div>
                
                  {/* apellido */}
                <div className={styles.divFormInput}>
                        {/* Parrafo de error con la condicion de longitud de valores en login */}
                    <p className={styles.errorFormImputCondition} style={{display: showErrorApellido ? 'block' : 'none'}}>Los apellidos no deben tener mas de 50 caracteres</p>
                  <input type='text' id='apellidoField' name='apellidoField' value={apellido} onChange={(e) => setApellido(e.target.value)} required/>
                  <label  htmlFor='apellidoField' autoComplete="current-password"><span>Apellido</span></label>
                </div>
               
                {/* identificacion */}
                <div className={styles.divFormInput}>
                {/* Parrafo de error con la condicion de longitud de valores en login */}
                <p className={styles.errorFormImputCondition} style={{display: showErrorIdentificacion ? 'block' : 'none'}}>Tu ID no debe tener mas de 15 caracteres</p>
                <input type='Number' id='numIdentificacionField' name='numIdentificacionField' value={numIdentificacion} onChange={(e) => setnumIdentificacion(e.target.value)} required />
                <label htmlFor='numIdentificacionField'><span>Identificación</span></label>
                </div>
                
                  {/* direccion recidencia */}
                <div className={styles.divFormInput}>
                {/* Parrafo de error con la condicion de longitud de valores en login */}
                <p className={styles.errorFormImputCondition} style={{display: showErrorDireccion ? 'block' : 'none'}}>La dirección no debe tener mas de 200 caracteres</p>
                <input type="text" id='direccionField' name='direccionField' value={direccion} onChange={(e) => setdireccion(e.target.value)} required />
                <label htmlFor='direccionField'><span>Direccion Residencia</span></label>
                </div>
                
                {/* Ciudad */}
                <div className={styles.divFormInput}>
                {/* Parrafo de error con la condicion de longitud de valores en login */}
                <p className={styles.errorFormImputCondition} style={{display: showErrorCiudad ? 'block' : 'none'}}>Ciudad no debe tener mas de 20 caracteres</p>
                <input type="text" id='ciudadField' name='ciudadField' value={ciudad} onChange={(e) => setciudad(e.target.value)} required/>
                <label htmlFor='ciudadField'><span>Ciudad</span></label>
                </div>
                
                {/* telefono o celular */}
                <div className={styles.divFormInput}>
                {/* Parrafo de error con la condicion de longitud de valores en login */}
                <p className={styles.errorFormImputCondition} style={{display: showErrorTelefono ? 'block' : 'none'}}>Numero de celular no debe tener mas de 10 digitos</p>
                <input type="tel" pattern="^[0-9]*$" id='telefonoField' name='telefonoField' onFocus={handleFocusTelefono} onBlur={handleBlurTelefono} value={telefono} onChange={(e) => settelefono(e.target.value)} required />
                <label htmlFor='telefonoField'><span>Nº Celular</span></label>
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