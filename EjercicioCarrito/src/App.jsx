import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
import Principal from "./componentes/Principal";
import Productos from "./componentes/Productos";
import Carrito from "./componentes/Carrito";
import Login from "./componentes/Login";
import NavCarrito from "./componentes/NavCarrito";
import Register from "./componentes/Register";
import Perfil from "./componentes/Perfil";
import Admin from "./componentes/Admin";
import PanelAdmin from "./componentes/admin/PanelAdmin";


import "@madzadev/audio-player/dist/index.css";

import Player1 from "./componentes/Player";
import Olvido from "./componentes/Olvido";

import {
  Home,
  Person2Outlined,
  Logout,
  AccountCircle,
  Boy,
  AdminPanelSettings,
  Storefront,
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
          <div className="header nav">
            <div className="logo">
              {/* <Link to={"/"}> */}
              <a href={"/"}>
                <img
                  src="./src/assets/electrotop.png"
                  alt="electrotop"
                  className="logo-image"
                />
              </a>
              {/* </Link> */}
            </div>
            <ul className="nav">
              <li>
                <Link to="/" className="link">
                  <span>Home</span>&nbsp;
                  <Home />
                </Link>
              </li>
              <li>
                <Link to="/Productos" className="link">
                  <span>Productos</span>&nbsp;
                  <Storefront />
                </Link>
              </li>
              <li>
                <Link to="/Carrito" className="link">
                  <span>Carrito</span>&nbsp;
                  <NavCarrito />
                </Link>
              </li>
              {
                rol === "admin" && login === "true" ? (
                  <li>
                    <Link to="/Admin" className="link">
                      <span>Panel</span>&nbsp;
                      <AdminPanelSettings />
                    </Link>
                  </li>
                ) : null //
              }
              <li>
                {login === "true" ? (
                  <Link to="/Perfil" className="link">
                    <span>Perfil</span>&nbsp;
                    <AccountCircle />
                  </Link>
                ) : (
                  <Link to="/Login" className="link">
                    <span>Login</span>&nbsp;
                    <Person2Outlined />
                  </Link>
                )}
              </li>
              <li>
                {login === "true" ? (
                  <a className="link" onClick={() => logout()}>
                    <span>Salir</span>&nbsp;
                    <Logout />
                  </a>
                ) : null}
              </li>
            </ul>
          </div>
          <div className="wrap-container">
            <PanelAdmin />
            <Routes>
              <Route exact path="/" element={<Principal />} />
              <Route
                exact
                path="/Productos"
                element={<Productos ListaProductos={ListaProductos} />}
              />

              <Route exact path="/Carrito" element={<Carrito />} />
              <Route exact path="/Admin" element={<Admin />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/Register" element={<Register />} />
              <Route exact path="/Perfil" element={<Perfil />} />
              <Route exact path="/Recuperar" element={<Olvido />} />
            </Routes>
          </div>
        </Router>
      </CarritoProvider>
    </>
  );
}

export default App;
