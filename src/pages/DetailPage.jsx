import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../data/mockData";
import LinkBtn from "../components/LinkBtn";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../redux/slices/selectPokemonSlice";
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const StyledImg = styled.img`
  width: 200px;
  height: 200px;
`;
const StyledName = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;
  color: red;
`;
const StyledType = styled.div`
  font-size: 16px;
  margin-bottom: 30px;
`;
const StyledDetail = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 30px;
`;
const DetailPage = () => {
  const selectedPokemon = useSelector(
    (state) => state.selectPokemon.selectedPokemon
  );
  const dispatch = useDispatch();
  const data = MOCK_DATA;
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const pokemon = data.find((pokemon) => pokemon.id === Number(id));

  const types = pokemon.types.join(", ");

  const right = selectedPokemon.some((pokemon) => pokemon.id === Number(id));

  return (
    <StyledDiv>
      <StyledImg src={pokemon.img_url}></StyledImg>
      <StyledName>{pokemon.korean_name}</StyledName>
      <StyledType>타입 : {types}</StyledType>
      <StyledDetail>{pokemon.description}</StyledDetail>
      <div>
        <LinkBtn style to={"/dex"}>
          돌아가기
        </LinkBtn>
        <Button
          style
          onClick={() => {
            if (right) {
              dispatch(removePokemon(pokemon));
            } else {
              dispatch(addPokemon(pokemon));
            }
          }}
        >
          {right ? "방출" : "추가"}
        </Button>
      </div>
    </StyledDiv>
  );
};

export default DetailPage;
