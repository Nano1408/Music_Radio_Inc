import React, { useState } from 'react';
import { app } from '../fb';
import LoginAuth from './loginAuth.jsx';
import { sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, setDoc} from 'firebase/firestore';

const Login = ({ setUsuario }) => {
  const [isRegistrando, setIsRegistrando] = useState(false);

  const guardarUsuarioEnLocalStorage = (usuario) => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  };
// se funcion de capturar los datos y guardarlos para el registro Users
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
        text: 'Error! No se pudo crear el usuario intenta de nuevo!',
        footer: `<a href=${isRegistrando}>Clic aqui para intentar de nuevo...</a>`
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
          title: 'Error! Contraseña Y/O Correo incorrectos',
          confirmButtonColor: '#000',
          icon: 'error',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

      } else {
        throw error; // lanzar el error para que sea manejado por otro bloque catch
      }
    }
  };

  const restablecerContrasena = async (e) => {
    e.preventDefault();

    const { value: email } = await Swal.fire({
      title: 'Ingresa tu correo electronico',
      input: 'email',
      showCancelButton: true,
      inputLabel: 'A tu correo electronico te llegara las introcciones para restablecer tu contraseña',
      inputPlaceholder: 'Enter your email address'
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
  
    if (isRegistrando === true) {

      if (numIdentificacionField.length > 15) {
        alert('El número de identificación no debe sobrepasar los 15 caracteres.');
        return;
      }
      if (passwordField.length > 20) {
        alert('La contraseña no debe sobrepasar los 20 caracteres.');
        return;
      }
      if (NombreField.length > 50) {
        alert('El nombre no debe sobrepasar los 50 caracteres.');
        return;
      }
      if (emailField.length > 50) {
        alert('El correo electrónico debe contener un "@" y no debe sobrepasar los 50 caracteres.');
        return;
      }
      if (direccionField.length > 300) {
        alert('La dirección no debe sobrepasar los 300 caracteres.');
        return;
      }
      if (ciudadField.length > 20) {
        alert('La ciudad no debe sobrepasar los 20 caracteres.');
        return;
      }
      if (telefonoField.length > 20) {
        alert('El número de teléfono no debe sobrepasar los 20 caracteres.');
        return;
      }

      const Correo = emailField.value;
      const Password = passwordField.value;
      const Nombre = NombreField.value;
      const apellido = apellidoField.value;
      const numIdentificacion = numIdentificacionField.value;
      const direccion = direccionField.value;
      const ciudad = ciudadField.value;
      const telefono = telefonoField.value;
      await crearUsuario(Correo, Password, Nombre, apellido, numIdentificacion, direccion, ciudad, telefono);
    } else {
      await iniciarSesion(Correo, Password);
    }
  };

  return (
    <LoginAuth
      setUsuario={setUsuario}
      isRegistrando={isRegistrando}
      setIsRegistrando={setIsRegistrando}
      submitHandler={submitHandler}
      restablecerContrasena={restablecerContrasena}
    />
  );
};

export default Login;