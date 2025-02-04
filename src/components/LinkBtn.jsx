import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleLink = styled(Link)`
  background-color: red;
  color: white;
  padding: 13px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: darkred;
  }
`;
export default function LinkBtn({ children, to }) {
  return <StyleLink to={to}>{children}</StyleLink>;
}
