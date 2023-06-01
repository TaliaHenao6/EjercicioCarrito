import ProductoCarrito from "./ProductoCarrito";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

import { Button } from "@mui/material";

import "./styles.css";
import { Link } from "react-router-dom";

const Carrito = () => {
  const [carrito, setCarrito] = useContext(CarritoContext);
  // Mostrar un total de productos en el carrito
  const cantidad = carrito.reduce((acc, element) => acc + element.cantidad, 0);

  const totalPrice = carrito.reduce(
    (acc, element) => acc + element.cantidad * element.infoProducto.precio,
    0
  );

  const formatPrice = (totalPrice) => {
    return totalPrice.toLocaleString("es-CO");
  };

  const valorPagar = totalPrice.toString() 

  const cleanCart = () => {
    if (
      confirm(
        `Tienes ${cantidad} productos en el carrito, ¿SEGURO QUE LOS QUIERES ELIMINAR?`
      )
    ) {
      setCarrito([]);
      window.location.href = "/";
    }
  };

  const initPayPalPayment = () => {
    
    window.paypal.Buttons({
        createOrder: function (data, actions) {
          
          return actions.order.create({
            purchase_units: [
                {
                  amount: {
                    //currency_code: "COP",
                    value: valorPagar, // Total a pagar en formato de decimales
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
         
          return actions.order.capture().then(function (details) {
            
            console.log(details);
            
            window.location.href = "/";
          });
        },
        onError: function (err) {
          // Se ejecuta en caso de error
          console.error(err);
          // Muestra un mensaje de error al usuario
          alert("Ocurrió un error al procesar el pago. Por favor, inténtalo de nuevo.");
        },
      })
      .render("#paypal-button-container"); // ID del contenedor donde se mostrará el botón de PayPal
  };

  return (
    <section className="main-container">
      <h1>Mi Carrito</h1>
      <div className="detalle-carrito">
        <div className="cart-productos">
          {carrito.length > 0 ? (
            carrito.map((producto, idx) => (
              <ProductoCarrito key={producto.idx} data={producto} />
            ))
          ) : (
            <>
              <h2>No Has agregado productos al carrito aún!</h2>
              <Link to="/">
                <Button variant="contained" color="secondary">
                  Comprar
                </Button>
              </Link>
            </>
          )}
        </div>
        {/* Posible componente */}
        <div className="resumen-container">
          <h3 className="titulo-resumen">Resumen de tu pedido</h3>
          <ul className="resumen">
            <li>
              <p>Items </p>
              <p className="left">{cantidad}</p>
            </li>
            <li>
              <p>subtotal </p>
              <p className="left">$0</p>
            </li>
            {/* <li><p>envio</p></li> */}
            <li className="resumen-total">
              <h3>total</h3>{" "}
              <h3 className="left">${formatPrice(totalPrice)}</h3>
            </li>
          </ul>
          <div className="resumen-actions">
            <Button variant="contained" color="success" onClick={initPayPalPayment}>
              Procesar compra
            </Button>
            <Button variant="outlined" size="small" onClick={() => cleanCart()}>
              Limpiar carrito
            </Button>
          </div>
        </div>
      </div>
      <div className="paypal" id="paypal-button-container"></div>
    </section>
  );
};

export default Carrito;




