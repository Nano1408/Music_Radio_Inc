import React, { useState, useEffect } from 'react'
import Footer from './Footer';
import { app } from '../fb';
import styles from './styles/home.module.css'

const Home = () => {
  const cerrarSesion = () => {
    app.auth().signOut();
  }

  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://theaudiodb.com/api/v1/json/2/album.php?i=112024');
        const data = await response.json();
        setAlbums(data.album);
      } catch (error) {
        setError('Error al obtener los datos del servidor');
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <ul className={styles.headerUl}>
          <li>
            <h1> Music Radio Inc</h1>
          </li>
          <li>
            <button>Buy Now</button>
            <button className={styles.cerrarSesion} onClick={cerrarSesion}>Cerrar sesion</button>
          </li>
        </ul>
      </header>
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <main>
          <section className={styles.containerAlbum}>
          {albums.map((album) => (
            <div key={album.idAlbum}>
              <h2>{album.strAlbum}</h2>
              <div className={styles.containerImg}>
                <a href="https://www.deezer.com/en/track/565208252" target="_blank">
              <img className={styles.ImgAlbum} src={album.strAlbumThumb} alt={album.strAlbum} />
                </a>
              </div>
              <p>{album.intYearReleased}</p>
            </div>
          ))}
          </section>
        </main>
      )}
      <Footer />
    </>
  )
}

export default Home
