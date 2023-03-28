import React, { useState } from 'react';
import { app } from '../fb';
import LoginAuth from './LoginAuth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

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

      const verificarExpiracionContrasena = (fechaExpiracion) => {
        const diff = moment(fechaExpiracion).diff(moment(), 'days'); // calcular la diferencia de días entre la fecha de expiración y la fecha actual
        return diff < 0; // si la diferencia es menor a cero, la contraseña ha expirado
      }

      const usuarioFirebase = await app
        .auth()
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
        fechaExpiracion: moment().add(90, 'days').toDate() // fecha de expiración a 90 días a partir de la fecha actual
      };
      await setDoc(doc(db, 'Usuarios Music_Radio_Inc', usuarioFirebase.user.uid), usuario);

      console.log('usuario creado: ', usuarioFirebase, usuario);
      guardarUsuarioEnLocalStorage(usuarioFirebase);
      setUsuario(usuarioFirebase);
    } catch (error) {
      // manejo de errores
    }
  };

  const iniciarSesion = async (Correo, Password) => {
    try {
      const usuarioFirebase = await app.auth().signInWithEmailAndPassword(Correo, Password);
      console.log('sesion iniciada: ', usuarioFirebase.user);
      guardarUsuarioEnLocalStorage(usuarioFirebase);
      setUsuario(usuarioFirebase);

      const db = getFirestore(app);
      const docRef = doc(db, 'Usuarios Usuario_Musi_Radio', usuarioFirebase.user.uid);
      const docSnap = await getDoc(docRef);
      const usuario = docSnap.data();
      const fechaExpiracion = usuario.fechaExpiracion;

      // Comprobar si la contraseña ha expirado
    const contrasenaExpirada = verificarExpiracionContrasena(fechaExpiracion);
    if (contrasenaExpirada) {
      // Si la contraseña ha expirado, redirigir al usuario a una página para restablecer la contraseña
      console.log('La contraseña ha expirado');
      // redirigir a la página de restablecimiento de contraseña
    }

    } catch (error) {
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        alert('Error! correo y/o contraseña incorrecto');
      } else {
        throw error; // lanzar el error para que sea manejado por otro bloque catch
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
    />
  );
};

export default Login;