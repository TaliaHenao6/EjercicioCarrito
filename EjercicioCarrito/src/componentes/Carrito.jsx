import { Card, List, ListItem, ListItemAvatar, Avatar} from "@mui/material";

import  ProductoCarrito  from "./ProductoCarrito";
import Producto from "./producto";

const Carrito = ({ListaProductos}) =>{

    console.log(ListaProductos);

    // if(ListaProductos.length == 0){
    // }else{
    //     console.log("No hay productos en el carrito");
    // }
    
    return (
        <>
        <h1>Carrito de compras</h1>
        <Card>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {/* {ListaProductos.map(producto =>
                     <Producto  key={producto.id} infoProducto={producto}/>)} */}
            </List>
        </Card>
        </>
    )
}

export default Carrito;