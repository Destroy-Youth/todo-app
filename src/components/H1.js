import React from "react";
import styled from "styled-components";

const Hh1 = styled.h1`
  font-size: 2em;
  color: tomato;
`;

function H1({ children }) {
  return <Hh1>{children}</Hh1>;
}

export default H1;
