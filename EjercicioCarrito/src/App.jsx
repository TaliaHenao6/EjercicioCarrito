import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
import Productos from "./componentes/Productos";
import Carrito from "./componentes/Carrito";
import Login from "./componentes/Login";
import NavCarrito from "./componentes/NavCarrito";
import Register from "./componentes/Register";
import Perfil from "./componentes/Perfil";
import Admin from "./componentes/Admin";
import "@madzadev/audio-player/dist/index.css";
import Player1 from "./componentes/Player";

import {
  Home,
  Person2Outlined,
  Logout,
  AccountCircle,
  Blind,
  Boy,
} from "@mui/icons-material";

import "./componentes/styles.css";
import ListaProductos from "./productos.json";

// Importamos el useContext
import CarritoProvider from "./context/CarritoContext";

function App() {
  const login = localStorage.getItem("login");
  const rol = localStorage.getItem("role");
  const logout = () => {
    alert("Vas cerrar la sesión");
    localStorage.removeItem("login");
    window.location.href = "/";
  };

  return (
    <>
      <CarritoProvider>
        <Router>
          <div className="header">
            <div className="logo">
              {/* <Link to={"/"}> */}
              <a href={"/"}>
                <img
                  src="./src/assets/electrotop.png"
                  alt="BackPackers"
                  className="logo-image"
                />
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
                <Link to="/Carrito" className="link">
                  <NavCarrito />
                </Link>
              </li>
              <li>
                {
                  rol === "admin" && login === "true" ? (
                    <Link to="/Admin">
                      {" "}
                      <Boy />
                    </Link>
                  ) : (
                    <span></span>
                  ) //
                }
              </li>
              <li>
                {login === "true" ? (
                  <Link to="/Perfil">
                    <AccountCircle />
                  </Link>
                ) : (
                  <Link to="/Login">
                    <Person2Outlined />
                  </Link>
                )}
              </li>
              <li>
                {login === "true" ? (
                  <a>
                    <Logout onClick={() => logout()} />
                  </a>
                ) : (
                  <span></span>
                )}
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
            <Route exact path="/Admin" element={<Admin />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/Perfil" element={<Perfil />} />
          </Routes>
        </Router>
      </CarritoProvider>
    </>
  );
}

export default App;
