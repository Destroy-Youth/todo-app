import React from "react";
import styled from "styled-components";

function H1({ children }) {
  const H1 = styled.h1`
    font-size: 2em;
    color: tomato;
  `;

  return <H1>{children}</H1>;
}

export default H1;
