import ProductoCarrito from "./ProductoCarrito";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

import {Button} from "@mui/material";

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
              <h2>No Has agregado productos al carrito aún!.</h2>
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
          {/* <div className="precio-total">
           
          </div> */}
          <Button variant="contained" color="success">
            Procesar compra
          </Button>
          <Button variant="outlined" onClick={() => cleanCart()}>
            Limpiar carrito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Carrito;
