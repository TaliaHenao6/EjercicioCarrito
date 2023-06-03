import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Player1 from "./componentes/Player.jsx";
import Footer from "./componentes/Footer.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Player1 />
    <Footer />
  </React.StrictMode>
);
