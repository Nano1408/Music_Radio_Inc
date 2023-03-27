import React from 'react'
import {app} from './fb'
import { useEffect } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import './Components/styles/normalize.css'


function App() {
  const [usuario, setUsuario] = React.useState(null);
  useEffect(()=>{app.auth().onAuthStateChanged((usuarioFirebase)=>{setUsuario(usuarioFirebase)
      console.log("Ya tienes sesion inciada con: ", usuarioFirebase);
    });
  },[]);

  return (
    <>
    {usuario ? <Home /> : <Login setUsuario = {setUsuario}/>}
    </>
  )
}

export default App
