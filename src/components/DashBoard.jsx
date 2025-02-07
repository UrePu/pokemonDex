import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MonsterBall from "./MonsterBall";
import { useSelector } from "react-redux";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(90% - 40px);
  padding: 0px 20px;
  background-color: #f6f6f6;
  border-radius: 25px;
  margin-top: 30px;
`;

const StyledTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-top: 40px;
  margin-bottom: 30px;
  color: red;
`;

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 70px;
  margin-bottom: 30px;
`;

const DashBoard = () => {
  const selectedPokemon = useSelector(
    (state) => state.selectPokemon.selectedPokemon
  );

  const encodeList = (pokemonList) => {
    let result = [...pokemonList];

    let count = result.length;
    if (count < 6) {
      for (let i = 0; i < 6 - count; i++) {
        result.push(0);
      }
    }

    return result;
  };

  return (
    <StyledContainer>
      <StyledTitle>나만의 포켓몬</StyledTitle>
      <StyledList>
        {encodeList(selectedPokemon).map((pokemon, index) =>
          pokemon === 0 ? (
            <MonsterBall key={index} />
          ) : (
            <PokemonCard key={index} pokemon={pokemon} list="true" />
          )
        )}
      </StyledList>
    </StyledContainer>
  );
};

export default DashBoard;
