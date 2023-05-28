import { Card, List, ListItem, ListItemAvatar, Avatar} from "@mui/material";

import  ProductoCarrito  from "./ProductoCarrito";
import Producto from "./producto";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Carrito = () =>{

    const [carrito, setCarrito] = useContext(CarritoContext);

    const ListaProductos = carrito;
    console.log(carrito);

    // if(ListaProductos.length == 0){
    // }else{
    //     console.log("No hay productos en el carrito");
    // }
    
    return (
        <>
        <h1>Carrito de compras</h1>
        <Card>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {ListaProductos.map(producto =>
                     <Producto  key={producto.id} infoProducto={producto}/>)}
            </List>
        </Card>
        </>
    )
}

export default Carrito;