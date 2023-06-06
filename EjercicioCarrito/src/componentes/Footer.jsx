import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <a href={"/"}>
                <img
                  src="./src/assets/electrotop.png"
                  alt="electrotop"
                  className="logo-image"
                />
              </a>
          <p>¡Descubre las mejores ofertas!</p>
          <p>©℗2023</p>
        </div>
        <div className="footer-info">
         
         <strong><p>ENLACES RÁPIDOS:</p></strong> <br /><br />

         <a
            className=""
            variant="contained"
            color="succes"
            href="/Productos"
          >Productos
          </a><br /><br />
          
         <a
            className=""
            variant="contained"
            color="succes"
            href="/Carrito"
          >Carrito
          </a><br /><br />
          
          <a
             className=""
             variant="contained"
             color="succes"
             href="/Perfil"
           >Perfil
           </a>

          
        </div>
        <div className="footer-contacto">
        <strong><p>INFORMACIÓN:</p></strong> <br /><br />
        <a
          href="tel:1234567890"
          target="_blank"
          rel="noopener noreferrer"
          >
          <i class="fas fa-phone"></i>   +1 234 567 890
        </a><br /><br />
        <a
          href="mailto:info@electrotop.com"
          target="_blank"
          rel="noopener noreferrer"
          >
          <i class="fas fa-envelope"></i>  info@electrotop.com
          </a><br /><br />
          <a
          href="https://maps.google.com/"
          target="_blank"
          rel="noopener noreferrer"
            >
          <i class="fas fa-map-marker-alt"></i>  Calle Principal 123, COLOMBIA
          </a>
          
        </div>
        <div className="footer-social">
          <p>Síguenos: 

          </p>
          
          <a
            href="https://linkedin.com/electrotop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/electrotop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com/electrotop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/electrotop"
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
