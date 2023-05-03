import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import styles from '../../Components/styles/Resetpassword.module.css'
import { app } from '../../fb';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        text: 'No se pudo enviar link para restablecer la contraseña.',
        footer: 'Corrige el correo y vuelve a intentar',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  return (
    <div>
      <h1>Restablecer contraseña</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.divRestPassword}>
          <label htmlFor="email">Correo electronico</label>
          <input
            type="email"
            name="email"
            placeholder='Correo electronico a restablecer contraseña'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.divBtn}>
            <button type="submit" className={styles.btnRestPassword}>Restablece contraseña</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
