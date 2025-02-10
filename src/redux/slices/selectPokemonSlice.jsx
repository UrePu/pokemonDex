import { createSlice } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const initialState = {
  selectedPokemon: [],
};
const notify = (str) => {
  let message = "";
  if (str === "max") {
    message = "포켓몬은 최대 6마리까지만 추가할 수 있습니다.";
  } else if (str === "exist") {
    message = "이미 추가된 포켓몬입니다.";
  }
  toast(message);
  return;
};
const selectPokemonSlice = createSlice({
  name: "selectPokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.selectedPokemon.length >= 6) {
        notify("max");
        return;
      }
      const isExist = state.selectedPokemon.some(
        (p) => p.id === action.payload.id
      );
      if (isExist) {
        notify("exist");
        return;
      }
      state.selectedPokemon.push(action.payload);
    },
    removePokemon: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.filter(
        (p) => p.id !== action.payload.id
      );
    },
  },
});

export const { addPokemon, removePokemon } = selectPokemonSlice.actions;
export default selectPokemonSlice.reducer;
