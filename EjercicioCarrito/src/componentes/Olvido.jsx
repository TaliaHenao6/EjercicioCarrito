import "./styles.css";
import React from "react";
import { Button } from "@mui/material";

const Olvido = () => {
  return (
    <section className="main-container">
      <div className="container">
        <h1>RECUPERAR CONTRASEÑA</h1>
        <h3>Tiene que ir al medico, que memoria tan mala </h3>
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value=""
              placeholder="Escribe tu correo electrónico"
            />
          </div>
          <div className="form-gruop">
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
