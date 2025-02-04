import React, { Children } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.list ? "120px" : "200px")};
  height: 250px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.15s ease-in-out;
  user-select: none;
  cursor: pointer;
  position: relative;
  top: 0px;

  &:hover {
    position: relative;
    top: -10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  }
`;
const StyledName = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 15px;
`;
const StyledNum = styled.div`
  font-size: 15px;
  color: gray;
  margin-bottom: 15px;
`;
const PokemonCard = ({ pokemon, list = false }) => {
  let num = pokemon.id;
  if (num < 10) {
    num = `No. 00${num}`;
  } else if (num < 100) {
    num = `No. 0${num}`;
  }
  const handleClick = (e) => {
    if (e.target.tagName !== "BUTTON") {
      console.log(pokemon.korean_name);
    }
  };

  const pokemonAdd = (pokemon) => {
    console.log(pokemon);

    listState.setSelectedPokemon([...listState.selectedPokemon, pokemon]);
  };

  return (
    <StyledCard list={list} onClick={handleClick}>
      <img src={pokemon.img_url} />
      <StyledName>{pokemon.korean_name}</StyledName>
      <StyledNum>{num}</StyledNum>
      <Button onClick={() => pokemonAdd(pokemon)}>추가</Button>
    </StyledCard>
  );
};

export default PokemonCard;
