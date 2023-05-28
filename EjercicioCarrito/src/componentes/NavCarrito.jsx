import { ShoppingCart } from "@mui/icons-material";
import { Button, Badge } from "@mui/material";

import Carrito from "./Carrito";
import "./styles.css";

// Componente  de alerta
const BubbleAlert = (number) =>{
    const getNumber = (num) =>{
        if(!num){return ''}
        return num > 9 ? '+9' : num
    }
    return(
        <span className="bubbleAlert">
            {getNumber(number.value)}
        </span>
    )
}

// Componente  de boton
const NavCarrito =({carrito, carritoVisible, toggleCarrito})=>{
    console.log(carritoVisible);
    const cantidad = carrito.reduce((acc, element) => acc + element.cantidad, 0)
    return(
        <>
        <span className="bubble">
            {cantidad !== 0 ? <BubbleAlert value={cantidad }/> :null}
            {/* // <Badge badgeContent={cantidad} /> : null} */}
        </span>
        <Button className="carrito"  onClick={toggleCarrito}><ShoppingCart /></Button>
        
        </>
    )

}

export default NavCarrito;