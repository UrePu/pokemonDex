import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== "provider",
})`
  background-color: ${(props) => (props.provider ? "black" : "red")};
  color: white;
  padding: 13px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: ${(props) => (props.provider ? "darkgray" : "darkred")};
  }
`;
export default function LinkBtn({ provider, children, to }) {
  return (
    <StyleLink provider={provider} to={to}>
      {children}
    </StyleLink>
  );
}
