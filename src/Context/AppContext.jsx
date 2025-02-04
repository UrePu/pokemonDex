import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <AppContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
