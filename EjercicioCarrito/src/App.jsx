import {Route, Link, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'
import Productos from './componentes/Productos'
import Carrito from './componentes/Carrito'
import Login from './componentes/Login'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Carrito">Carrito</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </div>
        <Routes>
          <Route exact path="/" element={<Productos/>}/>
          <Route exact path="/Carrito" element={<Carrito/>}/>
          <Route exact path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
