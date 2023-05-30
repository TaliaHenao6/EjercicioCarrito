import React, { useState } from 'react';

import './styles.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage('Sesión iniciada con éxito');
      setFormData({
        email: '',
        password: ''
      });
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!data.email) {
      errors.email = 'Por favor, ingresa tu correo electrónico';
    } else if (!emailRegex.test(data.email)) {
      errors.email = 'Por favor, ingresa un correo electrónico válido';
    }

    if (!data.password) {
      errors.password = 'Por favor, ingresa tu contraseña';
    } else if (data.password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    return errors;
  };

  return (
    <div className="container">
    <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
       
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label><br />
          <input className='input'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Escribe tu correo electrónico'
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label><br />
          <input className='input'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder='Escribe tu contraseña'
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <button className='button' type="submit">Iniciar Sesión</button>
        
      </form>
      
      {successMessage && <p className="success-message">{successMessage}</p>}

      <p className="nous">¿No tienes usuario para iniciar sesión?</p>
      <a className='' href='/Register'>Registrarme ahora</a>
    </div>

    
  );
};


export default Login;