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
`;
export default function Button({ onClick, children }) {
  return <StyleBtn onClick={onClick}>{children}</StyleBtn>;
}
