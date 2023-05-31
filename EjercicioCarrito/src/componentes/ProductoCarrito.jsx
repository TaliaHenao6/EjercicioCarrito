import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { Button, BottomNavigationAction } from "@mui/material";
import { Delete, AddShoppingCart } from "@mui/icons-material";
import "./styles.css";

const ProductoCarrito = ({data}) => {
    const cantidad = data.cantidad;

    console.log(data);

     const formatPrice = (totalPrice) => {
       return totalPrice.toLocaleString("es-CO");
     };
  return (
    <>
      <div className="item-carrito">
          <div className="item-img">
            <img className="avatar"
              src={data.infoProducto.image}
              alt={data.infoProducto.id + data.infoProducto.nombre}
            />
          </div>
          <div className="item-text">
            <h4 className="text-titulo">{data.infoProducto.nombre}</h4>
            <p className="text-precio">$ {formatPrice(data.infoProducto.precio)}</p>
            <span className="text-cantidad">Cantidad: {cantidad}</span>
          </div>
          <div className="item-actions">
            <div className="cantidad-buttons">
              <button className="btn">-</button>
              <span>1</span>
              <button className="btn">+</button>
            </div>

            <Button
              variant="outlined" size="small"
              color="error" 
              onClick={() => removeFromCar(infoProducto.id)}>
                <Delete />
            </Button>
          </div>
      </div>
    </>
  );
};

export default ProductoCarrito;
