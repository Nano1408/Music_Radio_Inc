import React from 'react'
import {app} from './fb'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './Components/styles/normalize.css'
import Login from './Components/Login';
import Home from './Components/Home';
import MiPerfil from './assets/Routes/miPerfil';
import EditarPerfil from './assets/Routes/EditarPerfil';

function App() {
  const [usuario, setUsuario] = React.useState(null);
  useEffect(()=>{app.auth().onAuthStateChanged((usuarioFirebase)=>{setUsuario(usuarioFirebase)
      console.log("Ya tienes sesion inciada con: ", usuarioFirebase);
    });
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={usuario ? <Home /> : <Login setUsuario = {setUsuario}/>} />
        <Route path="/miperfil" element={ usuario ? <MiPerfil /> : <Login setUsuario ={setUsuario} />} />
        <Route path="/miperfil/editarperfil" element={ usuario ? <EditarPerfil /> : <Login setUsuario ={setUsuario} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import React from 'react'
// import {app} from './fb'
// import { Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';
// import './Components/styles/normalize.css'
// import Login from './Components/Login';
// import Home from './Components/Home';
// import miPerfil from './assets/Routes/miPerfil';


// function App() {
//   const [usuario, setUsuario] = React.useState(null);
//   useEffect(()=>{app.auth().onAuthStateChanged((usuarioFirebase)=>{setUsuario(usuarioFirebase)
//       console.log("Ya tienes sesion inciada con: ", usuarioFirebase);
//     });
//   },[]);

//   return (
//     <>
//     {usuario ? <Home /> : <Login setUsuario = {setUsuario}/>}
//     </>
//   )
// }

//  export default App;