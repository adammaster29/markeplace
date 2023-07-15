import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistering) {
      // Realizar acciones de registro
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      alert('Registro exitoso. Ahora puedes iniciar sesión con tus credenciales.');
    } else {
      // Realizar acciones de inicio de sesión
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');

      if (username === storedUsername && password === storedPassword) {
        alert('Inicio de sesión exitoso');
        setIsLoggedIn(true);
      } else {
        alert('Nombre de usuario o contraseña incorrectos');
      }
    }
  };

  const handleToggleMode = () => {
    setIsRegistering(!isRegistering);
  };

  useEffect(() => {
    if (isLoggedIn) {
      // Redirigir al componente de productos
      navigate('/productos');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className='contenedor__login'>
      <form onSubmit={handleSubmit} className="login">
        <h1 className='login__title'>{isRegistering ? 'Registro' : 'Login'}</h1>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='login__input'
          type="text"
          name="text"
          id="text"
          placeholder='Usuario'
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='login__input'
          type="password"
          name="password"
          id="password"
          placeholder='Contraseña'
        />
        <div className="login__contenedor-register">
          {isRegistering ? (
            <button type="submit">Registrarse</button>
          ) : (
            <>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Recuérdame</label>
              <button type="submit">Iniciar Sesión</button>
            </>
          )}
          <p onClick={handleToggleMode} className='login__registrarse'>
            {isRegistering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes una cuenta? Regístrate'}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
