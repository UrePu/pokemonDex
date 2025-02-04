import styled from "styled-components";

const StyleBtn = styled.button`
  background-color: ${(props) => (props.primary ? "red" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "darkred" : "darkgray")};
  }
`;
export default function Button({ primary, children }) {
  return <StyleBtn primary={primary}>{children}</StyleBtn>;
}
