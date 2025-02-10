import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== "style",
})`
  background-color: ${(props) => (props.style ? "black" : "red")};
  color: white;
  padding: 13px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  ${(props) => (props.style ? "margin-right: 10px;" : "")}
  &:hover {
    background-color: ${(props) => (props.style ? "darkgray" : "darkred")};
  }
`;
export default function LinkBtn({ style, children, to }) {
  return (
    <StyleLink style={style} to={to}>
      {children}
    </StyleLink>
  );
}
