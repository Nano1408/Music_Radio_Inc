import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from './Footer';
import { app } from '../fb';
import styles from './styles/home.module.css'

const Home = () => {
  
  const cerrarSesion = () => {
    app.auth().signOut();
  }
  
  const [albums, setAlbums] = useState([]);
  const [albumsVideo, setAlbumsVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [menu, setMenu] = useState(false);

  const togleMenu = () => {
    setMenu(!menu)
  }
   
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://heaudiodb.com/api/v1/json/2/album.php?i=112024`);
        const data = await response.json();
        setAlbums(data.album);

        const response2 = await fetch(`https://heaudiodb.com/api/v1/json/2/mvid.php?i=112024`);
        const data2 = await response2.json();
        setAlbumsVideo(data2.mvids)

        console.log(data2)

      } catch (error) {
        setError('Lo siento, página no encontrada');
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

// DOM de la pagina
  return (
    <>
    {/* header encabezado */}
      <header>
        <ul className={styles.headerUl}>
          <img className={styles.imgLogoHome} src="./Logo_Music_Radio_Inc.png" alt="Logo_Music_Radio_inc.png" />
          <li className={`${menu ? styles.active : ''}`}>
            <button className={styles.hidden}>Buy Now</button>
            <button className={`${styles.hidden}`} onClick={cerrarSesion}>LogOut</button>
          </li>

            <h3> <GiHamburgerMenu className={styles.iconBurgerMenu} onClick={togleMenu} /> </h3>
        </ul>
      </header>
      {/* loading antes de cargar los datos */}
      {isLoading ? (
        // snipper de loading
        <div className={styles.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        ) : error ? (
          <section className={styles.containerFontPageError}>
            <div className={styles.divError}>
              <img src='./fontPageError.png' alt=''className={styles.fontPageErrorPng}/>
              <p className={styles.errorP}>{error}</p>
              <a href='#' className={styles.buttonError}>Contactenos</a>
            </div>
          </section>
          ) : (
            
            // cuerpo del documento
            <main className={styles.containerMain}>
          <section>
            <div className={styles.containerAlbum}>
            {albumsVideo.map((videoUrl) => (
              <div key={videoUrl.idTrack}>
              <h2>{videoUrl.strTrack}</h2>
              <div className={styles.containerImg}>
                <a href={videoUrl.strMusicVid} target="_blank">
                  <img className={styles.ImgAlbum} src={videoUrl.strTrackThumb} alt={videoUrl.strTrack} />
                </a>
              </div>
            </div>
          ))}
            </div>
          {/* mapeo de api de albums de musicas (solo imagenes) */}
          <h2 className={styles.titleAlbums}>Album de musica sin video</h2>
          <div className={styles.containerAlbum}>
          {albums.map((album) => (
            <div key={album.idAlbum}>
              <h2>{album.strAlbum}</h2>
              <div className={styles.containerImg}>
                <a href={album.strAlbumThumb} target="_blank">
                  <img className={styles.ImgAlbum} src={album.strAlbumThumb} alt={album.strAlbumThumb} />
                </a>
              </div>
              <p>{album.intYearReleased}</p>
        </div>
          ))}
          </div>
          </section>
        </main>
      )}
      <Footer />
    </>
  )
}

export default Home
