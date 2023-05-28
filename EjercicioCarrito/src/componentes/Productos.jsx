import Producto from "./producto";
// import ListaProductos from "../productos.json";
import { useState } from "react";


const Productos = (ListaProductos) =>{
      console.log("Tenemos esto:" +ListaProductos);

      const [carrito, setCarrito] = useState([]);

      const addToCar = (infoProducto) =>{
        console.log("El producto es:" + infoProducto.nombre);

        if(carrito.find(x => x.nombre === infoProducto.nombre)){
          const nuevoCarrito = carrito.map(x => x.nombre  === infoProducto.nombre
            ? ({
              ...x, 
              cantidad: x.cantidad + 1
            })
             :x) 
             setCarrito(nuevoCarrito)
        }
        else{
          setCarrito(carrito.concat({...infoProducto, cantidad: 1}))
        }

        // setCarrito(infoProducto);
        console.log(`Productos en carrito ${carrito.length}`);
        console.log(`Productos en carrito ${carrito}`);
      }

      const [carritoVisible, setCarritoVisible] = useState(true);

      const toggleCarrito = (carrito) =>{
        if(carrito.length === 0){
          return
        }
        setCarritoVisible(!setCarritoVisible)
      }




      return (
        <>
        <h1>lista</h1>
        {/* <h1>Lista de Productos</h1>
        <p>Catidad de productos: { ListaProductos.length}</p>
        <div>
          {ListaProductos.map(producto =>
            <Producto key={producto.id} infoProducto={producto} addToCar={addToCar}/>)}
        </div> */}
        </>
        
      )

}
export default Productos;