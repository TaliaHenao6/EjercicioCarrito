//import { Card, List, ListItem, ListItemAvatar, Avatar} from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ProductoCarrito from "./ProductoCarrito";
import Producto from "./producto";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Carrito = () => {
  const [carrito, setCarrito] = useContext(CarritoContext);
  // Mostrar un total de productos en el carrito
  const cantidad = carrito.reduce((acc, element) => acc + element.cantidad, 0);

  const totalPrice = carrito.reduce(
    (acc, element) => acc + element.cantidad * element.precio,
    0
  );

  const ListaProductos = carrito;
  console.log(carrito);

  // if(ListaProductos.length == 0){
  // }else{
  //     console.log("No hay productos en el carrito");
  // }

  return (
    <>
      <div className="cart-container">
        <div>item en Carrito: {cantidad} </div>
        <div className="precio-total"> ${totalPrice}</div>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          className="item"
        >
          {/* {cantidadXProducto > 0 && (
            <p className="cantidad">List: {cantidadXProducto} </p>
          )}

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={Producto.image} alt={Producto.nombre} />
            </ListItemAvatar>
            <ListItemText primary>
              <h3 className="name"> {Producto.nombre} </h3>
              <p className="price">{Producto.precio}</p>
              <p className="description">{Producto.descripcion}</p>
            </ListItemText> */}

          {/* {
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {"infoProducto.Producto"}
              </React.Fragment>
            }
          </ListItem> */}
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="/static/images.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Carrito;
