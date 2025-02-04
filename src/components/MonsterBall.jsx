import React from "react";
import styled from "styled-components";
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 15px;
  border: 2px dashed black;
  img {
    width: 80px;
  }
`;
const MonsterBall = () => {
  return (
    <StyledCard>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/640px-Pokebola-pokeball-png-0.png" />
    </StyledCard>
  );
};

export default MonsterBall;
