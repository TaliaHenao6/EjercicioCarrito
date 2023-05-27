import Producto from "./producto";
//import product1Image from '../images/product1.jpg';
//import product2Image from '../images/product2.jpg';
//import product3Image from '../images/product3.jpg';

const Productos = () =>{
    //const products = [
        //{ id: 1, name: 'Product 1', price: 1, image: product1Image },
       // { id: 2, name: 'Product 2', price: 2, image: product2Image },
       // { id: 3, name: 'Product 3', price: 3, image: product3Image },
      //];
      return (
        <>
        <h1>Lista de Productos</h1>
        <div>
          <Producto/>
         <Producto/>
        <Producto/>
        </div>
        </>
        
      )

}
export default Productos;