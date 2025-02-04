import React from "react";
import styled from "styled-components";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mockData";
import { useState } from "react";
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const pokemonData = MOCK_DATA;
const DexPage = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  return (
    <StyledDiv>
      <DashBoard
        data={pokemonData}
        listState={{ selectedPokemon, setSelectedPokemon }}
      />
      <PokemonList
        data={pokemonData}
        listState={{ selectedPokemon, setSelectedPokemon }}
      />
    </StyledDiv>
  );
};

export default DexPage;
