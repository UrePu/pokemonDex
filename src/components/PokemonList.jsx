import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  border-radius: 25px;
  margin-top: 20px;
  flex-wrap: wrap;
  width: 1200px;
  gap: 30px;
  padding-top: 20px;
`;
const PokemonList = ({ data, listState }) => {
  return (
    <StyledDiv>
      {data.map((pokemon, index) => {
        return (
          <PokemonCard
            key={index}
            pokemon={pokemon}
            list={false}
            listState={listState}
          />
        );
      })}
    </StyledDiv>
  );
};

export default PokemonList;
