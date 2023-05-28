import {Route, Link, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'
import Productos from './componentes/Productos'
import Carrito from './componentes/Carrito'
import Login from './componentes/Login'
import NavCarrito from './componentes/NavCarrito'
import {useState} from 'react'

import {Home, Person2Outlined} from '@mui/icons-material'

import "./componentes/styles.css"
import ListaProductos from "./productos.json";

function App() {

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
        // console.log(`Productos en carrito ${carrito.length}`);
        // console.log(`Productos en carrito ${carrito}`);
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
      <BrowserRouter>
      <div className='nav'>
        <ul>
          <li><Link to="/"><Home/> Home</Link></li>
          <li><Link to="/Carrito"><NavCarrito/></Link></li>
          <li><Link to="/Login"><Person2Outlined/> Login</Link></li>
        </ul>
      </div>
        <Routes>
          <Route exact path="/" element={<Productos ListaProductos={ListaProductos}/>}/>
          <Route exact path="/Carrito" element={<Carrito/>}/>
          <Route exact path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
