import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../data/mockData";
import LinkBtn from "../components/LinkBtn";
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
  const data = MOCK_DATA;
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const pokemon = data.find((pokemon) => pokemon.id === Number(id));

  const types = pokemon.types.join(", ");

  return (
    <StyledDiv>
      <StyledImg src={pokemon.img_url}></StyledImg>
      <StyledName>{pokemon.korean_name}</StyledName>
      <StyledType>타입 : {types}</StyledType>
      <StyledDetail>{pokemon.description}</StyledDetail>
      <LinkBtn provider to={"/dex"}>
        돌아가기
      </LinkBtn>
    </StyledDiv>
  );
};

export default DetailPage;
