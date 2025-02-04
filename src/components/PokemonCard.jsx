import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

// list 속성을 DOM에 전달하지 않도록 설정
const StyledCard = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== "list",
})`
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
  text-decoration: none;
  color: black;

  &:hover {
    position: relative;
    top: -10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
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
  const { selectedPokemon, setSelectedPokemon } = useAppContext();

  let num = pokemon.id;
  if (num < 10) {
    num = `No. 00${num}`;
  } else if (num < 100) {
    num = `No. 0${num}`;
  }
  const pokemonAdd = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6마리까지만 추가할 수 있습니다.");
      return;
    }
    if (selectedPokemon.includes(pokemon)) {
      alert("이미 추가된 포켓몬입니다.");
      return;
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const pokemonRemove = (pokemon) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p !== pokemon));
  };

  return (
    <StyledCard list={list} to={`/detail?id=${pokemon.id}`}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <StyledName>{pokemon.korean_name}</StyledName>
      <StyledNum>{num}</StyledNum>
      <Button
        onClick={(e) => {
          e.preventDefault();
          if (!list) {
            pokemonAdd(pokemon);
          } else {
            pokemonRemove(pokemon);
          }
        }}
      >
        {list ? "방출" : "추가"}
      </Button>
    </StyledCard>
  );
};

export default PokemonCard;
