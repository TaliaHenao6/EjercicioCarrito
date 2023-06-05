import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const Olvido = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realizar la lógica de recuperación de contraseña aquí
    // Puedes enviar una solicitud al servidor o realizar otras operaciones necesarias

    // Ejemplo básico de validación de correo electrónico
    if (!email || !email.includes("@")) {
      setError("Ingresa un correo electrónico válido");
      return;
    }

    // Lógica adicional de recuperación de contraseña aquí

    // Limpiar el campo de correo electrónico después de enviar
    setEmail("");
    setError("");
  };

  return (
    <section className="main-container">
      <div className="container">
        <h1>RECUPERAR CONTRASEÑA</h1>
        <h3>Tiene que ir al médico, qué memoria tan mala</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <TextField
              className="input"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Escribe tu correo electrónico"
              onChange={handleEmailChange}
              error={error !== ""}
              helperText={error}
            />
          </div>
          <div className="form-group">
            <Button
              className="btn3"
              variant="contained"
              color="secondary"
              size="small"
              type="submit"
            >
              Recuperar contraseña
            </Button>
          </div>
        </form>
        <div className="form-info">
          <a className="btn" href="/Login">
            Iniciar Sesión
          </a>
        </div>
      </div>
    </section>
  );
};

export default Olvido;
