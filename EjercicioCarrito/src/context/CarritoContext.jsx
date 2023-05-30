import React, { createContext, useState } from "react";

// Nombre del context que se utilizar
export const CarritoContext = createContext(null);

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [favorito, setfavorito] = useState([]);

  return (
    <CarritoContext.Provider value={[carrito, setCarrito]}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
