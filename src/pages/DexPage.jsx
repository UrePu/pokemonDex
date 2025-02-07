import React from "react";
import styled from "styled-components";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mockData";
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const pokemonData = MOCK_DATA;
const DexPage = () => {
  return (
    <StyledDiv>
      <DashBoard />
      <PokemonList data={pokemonData} />
    </StyledDiv>
  );
};

export default DexPage;
