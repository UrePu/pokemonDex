import { configureStore } from "@reduxjs/toolkit";
import selectPokemonSlice from "../slices/selectPokemonSlice";

const store = configureStore({
  reducer: {
    selectPokemon: selectPokemonSlice,
  },
});

export default store;
