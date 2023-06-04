import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="./src/assets/electrotop.png" alt="Logo" />
        </div>
        <div className="footer-info">
          <p>Número de contacto: +1 234 567 890</p>
          <p>¡Descubre las mejores ofertas!</p>
          <p> Calle Principal 123, COLOMBIA PAPA!</p>
          <p>MAS QUE UN GRUPO UNA FAMILIA</p>
          <p>ESTAMOS MELOS, SISAS</p>
        </div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
