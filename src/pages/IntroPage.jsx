import React from "react";
import styled from "styled-components";
import LinkBtn from "../components/LinkBtn";
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const StyledImg = styled.img`
  margin-bottom: 10px;
`;

const IntroPage = () => {
  return (
    <StyledDiv>
      <StyledImg
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/270px-International_Pok%C3%A9mon_logo.svg.png"
        alt=""
      />
      <LinkBtn to="/dex">포켓몬 도감 시작하기</LinkBtn>
    </StyledDiv>
  );
};

export default IntroPage;
