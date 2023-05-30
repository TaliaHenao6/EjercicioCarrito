import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Productos from "./componentes/Productos";
import Carrito from "./componentes/Carrito";
import Login from "./componentes/Login";
import NavCarrito from "./componentes/NavCarrito";
import Wishlist from "./componentes/Wishlist";

import { Favorite, Home, Person2Outlined } from "@mui/icons-material";

import "./componentes/styles.css";
import ListaProductos from "./productos.json";

// Importamos el useContext
import CarritoProvider from "./context/CarritoContext";
import WishlistProvider from "./context/WishlistContext";

function App() {
  return (
    <>
      <WishlistProvider>
        <CarritoProvider>
          <Router>
            <div className="header">
              <div className="Logo">
                {/* <Link to={"/"}> */}
                <a href={"/"}>
                  <img src="./src/assets/electrotop.png" alt="BackPackers" />
                </a>
                {/* </Link> */}
              </div>
              <ul className="nav">
                <li>
                  <Link to="/">
                    <Home />
                  </Link>
                </li>
                <li>
                  <Link to="/Carrito">
                    <NavCarrito />
                  </Link>
                </li>

                <li>
                  <Link to="/Fav">
                    <Favorite />
                  </Link>
                </li>

                <li>
                  <Link to="/Login">
                    <Person2Outlined />
                  </Link>
                </li>
              </ul>
            </div>
            <Routes>
              <Route
                exact
                path="/"
                element={<Productos ListaProductos={ListaProductos} />}
              />
              <Route exact path="/Carrito" element={<Carrito />} />

              <Route exact path="/Login" element={<Login />} />
            </Routes>
          </Router>
        </CarritoProvider>
      </WishlistProvider>
    </>
  );
}

export default App;
