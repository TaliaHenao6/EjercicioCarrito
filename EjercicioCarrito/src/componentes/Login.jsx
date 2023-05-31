import React, { useState } from "react";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

import {Button} from "@mui/material"

import "./styles.css";

const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
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
      setSuccessMessage("Sesión iniciada con éxito");
      setFormData({
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

  // Iniciar sesion
  const login = async () => {
    await axios
      .get(baseUrl, {
        params: { email: formData.email, password: formData.password },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          const respuesta = response[0];
          localStorage.setItem("login", true);
          localStorage.setItem("userId", respuesta.id);
          alert(`Bievenido: ${respuesta.name}`);
          window.location.href = "/";
        } else {
          alert("usuario  Y/O contraseña son incorrectos");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // // axios.post('https://localhost:5001/api/login', body)
    // //   .then((response) => {
  };

  return (
    <section className="main-container">
      <div className="container">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="form">
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
            <Button variant="contained" color="secondary" size="small" type="submit" onClick={() => login()}>
              Iniciar Sesión
            </Button>
          </div>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="info-login">
        <p className="nous">¿No tienes usuario para iniciar sesión?</p>
        <a className="btn" href="/Register">
          Registrarme ahora
        </a>

        </div>
      </div>
    </section>
  );
};

export default Login;
