import styled from "styled-components";

const StyleBtn = styled.button`
  background-color: red;
  color: white;
  font-size: 17px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 530px) {
    font-size: 30px;
    padding: 15px 25px;
  }
`;
export default function Button({ onClick, children }) {
  return <StyleBtn onClick={onClick}>{children}</StyleBtn>;
}
