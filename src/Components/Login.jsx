import React, { useState } from 'react';
import { app } from '../fb';
import LoginAuth from './loginAuth.jsx';
import { sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, setDoc} from 'firebase/firestore';

const Login = ({ setUsuario }) => {
  const [isRegistrando, setIsRegistrando] = useState(false);

  /************************************************************** **********
   estados de error para cada input para las condiciones dadas a cada uno
  ***************************************************************************/
  const [showErrorEmail, setShowErrorEmail] = useState (false);
  const [showErrorPassword, setShowErrorPasword] = useState (false);
  const [showErrorNombre, setShowErrorNombre] = useState (false);
  const [showErrorApellido, setShowErrorApellido] = useState (false);
  const [showErrorIdentificacion, setShowErrorIdentificacion] = useState (false);
  const [showErrorDireccion, setShowErrorDireccion] = useState (false);
  const [showErrorCiudad, setShowErrorCiudad] = useState (false);
  const [showErrorTelefono, setShowErrorTelefono] = useState (false);


  //localStorage para guardar inicio de sesion en local
  const guardarUsuarioEnLocalStorage = (usuario) => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  };
  
  // funcion de capturar los datos y guardarlos para el registro Users
  const crearUsuario = async (
    Correo,
    Password,
    Nombre,
    apellido,
    numIdentificacion,
    direccion,
    ciudad,
    telefono
  ) => {
    try {

      const usuarioFirebase = await app.auth()
        .createUserWithEmailAndPassword(Correo, Password);
      // Guardar información del usuario en Firestore
      const db = getFirestore(app);
      const usuario = {
        correo: Correo,
        nombre: Nombre,
        apellido: apellido,
        numIdentificacion: numIdentificacion,
        direccion: direccion,
        ciudad: ciudad,
        telefono: telefono,
      };

      // recoge la info de crear usuario y la guarda en la base de datos
      await setDoc(doc(db, 'Usuarios Music_Radio_Inc', usuarioFirebase.user.uid), usuario);

      console.log('usuario creado: ', usuarioFirebase, usuario);
      guardarUsuarioEnLocalStorage(usuarioFirebase);

      setUsuario(usuarioFirebase);

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error! usuario registrado o datos incorrectos!',
        footer: `<a href=${isRegistrando}>Clic aqui para iniciar sesion...</a>`
      })
    }
  };

  const iniciarSesion = async (Correo, Password) => {
    try {
      const usuarioFirebase = await app.auth().signInWithEmailAndPassword(Correo, Password);
      console.log('sesion iniciada: ', usuarioFirebase.user);
      guardarUsuarioEnLocalStorage(usuarioFirebase);
      setUsuario(usuarioFirebase);

    } catch (error) {
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        // sweet Alert
        Swal.fire({
          title: 'Error! Contraseña o Correo incorrecto',
          confirmButtonColor: '#000',
          icon: 'error',
          footer: 'Intenta nuevamente dando click en Ok',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      } 
      /*else {
        throw error; // lanzar el error para que sea manejado por otro bloque catch
      }*/
    }
  };

  const restablecerContrasena = async (e) => {
    e.preventDefault();

    const { value: email } = await Swal.fire({
      title: 'Ingresa tu correo electronico',
      input: 'email',
      showCancelButton: true,
      inputLabel: 'A tu correo electronico te llegara las introcciones para restablecer tu contraseña',
      inputPlaceholder: 'Escribe tu Correo Electronico...'
    })

    if (email) {
      try {
        await sendPasswordResetEmail(app.auth(), email);
        Swal.fire({
          title: 'Listo!',
          text: 'Se ha enviado un correo electrónico con un enlace para restablecer la contraseña.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'No se pudo enviar el correo electrónico para restablecer la contraseña.',
          footer: 'Intenta nuevamente enviar el formulario para restablecer las credenciales',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
      // const { emailField, passwordField} = e.target.elements;
      const { emailField, passwordField, NombreField, apellidoField, numIdentificacionField, direccionField, ciudadField, telefonoField } = e.target.elements;
      const Correo = emailField.value;
      const Password = passwordField.value;
      console.log(emailField.length);
  
    if (isRegistrando === true) {

      const Correo = emailField.value;
      const Password = passwordField.value;
      const Nombre = NombreField.value;
      const apellido = apellidoField.value;
      const numIdentificacion = numIdentificacionField.value;
      const direccion = direccionField.value;
      const ciudad = ciudadField.value;
      const telefono = telefonoField.value;
      
      if (emailField.value.length >= 50) {
        setShowErrorEmail(true);
        return false;
      } else {
        setShowErrorEmail(false);
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(emailField.value)){
        alert("El correo no tiene un formato válido");
        return false;
      }

      if(passwordField.value.length >= 20){
        setShowErrorPasword(true);
        return false;
      } else {
        setShowErrorPasword(false);
      }

      if(NombreField.value.length >= 50){
        setShowErrorNombre(true);
        return false;
      } else {
        setShowErrorNombre(false);
      }

      if(apellidoField.value.length >= 50){
        setShowErrorApellido(true);
        return false;
      } else {
        setShowErrorApellido(false);
      }

      if(numIdentificacionField.value.length >= 15){
        setShowErrorIdentificacion(true);
        return false;
      } else {
        setShowErrorIdentificacion(false);
      }

      if(direccionField.value.length >= 200){
        setShowErrorDireccion(true);
        return false;
      } else {
        setShowErrorDireccion(false);
      }

      if(ciudadField.value.length >= 20){
        setShowErrorCiudad(true);
        return false;
      } else {
        setShowErrorCiudad(false);
      }

      if(telefonoField.value.length > 10){
        console.log(telefono, "Error, mas de 10 digitos")
        setShowErrorTelefono(true);
        return false;
      }else {
        setShowErrorTelefono(false);
      }

      await crearUsuario(Correo, Password, Nombre, apellido, numIdentificacion, direccion, ciudad, telefono);

    } else {
       await iniciarSesion(Correo, Password);
      // alert("Te has registrado correctamente")
    }
  };

  return (
    <LoginAuth
      setUsuario={setUsuario}
      isRegistrando={isRegistrando}
      setIsRegistrando={setIsRegistrando}
      submitHandler={submitHandler}
      // showErrores
      showErrorEmail={showErrorEmail}
      showErrorPassword={showErrorPassword}
      showErrorNombre={showErrorNombre}
      showErrorApellido={showErrorApellido}
      showErrorIdentificacion={showErrorIdentificacion}
      showErrorDireccion={showErrorDireccion}
      showErrorCiudad={showErrorCiudad}
      showErrorTelefono={showErrorTelefono}
      // restablecer clave
      restablecerContrasena={restablecerContrasena}
    />
  );
};

export default Login;