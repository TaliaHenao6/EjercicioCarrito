import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import "./styles.css";

const baseUrl = "http://localhost:3001/usuarios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    role: "user",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    role: "",
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
      const dataToSend = { ...formData };
      setFormData({
        name: "",
        phone: "",
        address: "",
        email: "",
        password: "",
        role: "user",
      });
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      signIn(dataToSend);
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

    if (!data.address) {
      errors.address = "Por favor, ingresa tu dirección";
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

  const signIn = async (data) => {
    try {
      const response = await axios.post(baseUrl, data);
      console.log(response);
      if (response.status == 201 || response.status == 200) {
        const resultado = response.data;
        localStorage.setItem("login", true);
        localStorage.setItem("userId", resultado.id);
        localStorage.setItem("role", resultado.role);
        alert(`Bienvenido: ${resultado.name}`);
        window.location.href = "/Productos";
        console.log(response.data);
      } else {
        alert("FALLO EL REGISTRO");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="main-container">
      <div className="container">
        <h1>Crea una cuenta</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group hidden">
            <label htmlFor="">Role:</label>
            <input
              type="text"
              className="input"
              id="role"
              name="role"
              value={formData.role}
              disabled={true}
            />
          </div>
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
          <div className="row">
            <div className="form-group col-6">
              <label htmlFor="phone">Teléfono:</label>
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
            <div className="form-group col-6">
              <label htmlFor="address">Dirección:</label>
              <input
                className="input"
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Escribe tu dirección"
              />
              {errors.address && (
                <p className="error-message">{errors.address}</p>
              )}
            </div>
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
            <Button
              variant="contained"
              size="small"
              color="secondary"
              type="submit"
              className="btn3"
            >
              Registrarme
            </Button>
          </div>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="form-info">
          <p className="nous">
            ¿Ya tienes un usuario y quieres iniciar sesión?
          </p>
          <a className="btn" href="/Login">
            Iniciar Sesión
          </a>
        </div>
      </div>
    </section>
  );
};

export default Register;
