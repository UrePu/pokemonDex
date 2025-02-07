import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import { addPokemon, removePokemon } from "../redux/slices/selectPokemonSlice";
import { useDispatch, useSelector } from "react-redux";

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
  padding-bottom: 16px;

  &:hover {
    position: relative;
    top: -10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 530px) {
    width: 300px;
  }
`;

const StyledName = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 15px;

  @media (max-width: 530px) {
    font-size: 30px;
  }
`;

const StyledNum = styled.div`
  font-size: 15px;
  color: gray;
  margin-bottom: 15px;
  @media (max-width: 530px) {
    font-size: 25px;
  }
`;

const PokemonCard = ({ pokemon, list = false }) => {
  const dispatch = useDispatch();
  let num = pokemon.id;
  if (num < 10) {
    num = `No. 00${num}`;
  } else if (num < 100) {
    num = `No. 0${num}`;
  } else {
    num = `No. ${num}`;
  }

  return (
    <StyledCard list={list} to={`/detail?id=${pokemon.id}`}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <StyledName>{pokemon.korean_name}</StyledName>
      <StyledNum>{num}</StyledNum>
      <Button
        onClick={(e) => {
          e.preventDefault();
          if (!list) {
            dispatch(addPokemon(pokemon));
          } else {
            dispatch(removePokemon(pokemon));
          }
        }}
      >
        {list ? "방출" : "추가"}
      </Button>
    </StyledCard>
  );
};

export default PokemonCard;
