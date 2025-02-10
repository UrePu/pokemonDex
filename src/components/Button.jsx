import styled from "styled-components";

const StyleBtn = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "style",
})`
  background-color: red;
  color: white;
  font-size: 17px;
  padding: ${(props) => (props.style ? "13px 35px" : "10px 20px")};
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
export default function Button({ onClick, children, style }) {
  return (
    <StyleBtn style={style} onClick={onClick}>
      {children}
    </StyleBtn>
  );
}
