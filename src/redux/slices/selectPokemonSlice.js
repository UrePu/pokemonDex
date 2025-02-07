import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPokemon: [],
};

const selectPokemonSlice = createSlice({
  name: "selectPokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.selectedPokemon.length >= 6) {
        alert("포켓몬은 최대 6마리까지만 추가할 수 있습니다.");
        return;
      }
      const isExist = state.selectedPokemon.some(
        (p) => p.id === action.payload.id
      );
      if (isExist) {
        alert("이미 추가된 포켓몬입니다.");
        return;
      }
      state.selectedPokemon.push(action.payload);
    },
    removePokemon: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.filter(
        (p) => p !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = selectPokemonSlice.actions;
export default selectPokemonSlice.reducer;
