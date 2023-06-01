import React, { useState } from "react";
import {Button} from "@mui/material"
import "./styles.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    direccion: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    direccion: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage("Usuario creado con éxito");
      setFormData({
        name: "",
        phone: "",
        direccion: "",
        email: "",
        password: "",
      });
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name) {
      errors.name = "Por favor, ingresa tu nombre";
    }
    if (!data.phone) {
      errors.phone = "Por favor, ingresa tu teléfono";
    }

    if (!data.direccion) {
      errors.direccion = "Por favor, ingresa tu dirección";
    }

    if (!data.email) {
      errors.email = "Por favor, ingresa tu correo electrónico";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Por favor, ingresa un correo electrónico válido";
    }

    if (!data.password) {
      errors.password = "Por favor, ingresa tu contraseña";
    } else if (data.password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    return errors;
  };

  return (
    <section className="main-container">
    <div className="container">
      <h1 className="login">Crea una cuenta</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Escribe tu nombre"
            />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Escribe tu correo electrónico"
            />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefono:</label>
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Escribe tu teléfono"
            />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Dirección:</label>
          <input
            className="input"
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
            placeholder="Escribe tu dirección"
            />
          {errors.name && <p className="error-message">{errors.direccion}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Escribe tu contraseña"
            />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
            )}
        </div>
        <div className="form-group">
          <Button variant="contained" size="small" color="secondary" type="submit">
            Registrarme
          </Button>
        </div>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="form-info">
        <p className="nous">¿Ya tienes un usuario?</p>
        <a className='btn' type="submit" href='/Login'>Iniciar Sesión</a>

      </div>
    </div>
    </section>
  );
};

export default Register;
