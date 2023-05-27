import Producto from "./producto";
import ListaProductos from "../productos.json";
import { useState } from "react";
//import product1Image from '../images/product1.jpg';
//import product2Image from '../images/product2.jpg';
//import product3Image from '../images/product3.jpg';

const Productos = () =>{

      


      return (
        <>
        <h1>Lista de Productos</h1>
        <p>Catidad de productos: { ListaProductos.length}</p>
        <div>
          {ListaProductos.map(producto =>
            <Producto key={producto.id} infoProducto={producto}/>)}
        </div>
        </>
        
      )

}
export default Productos;