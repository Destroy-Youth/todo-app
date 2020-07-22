import React from "react";
import styled from "styled-components";

const Par = styled.p`
  font-size: 1em;
  background-color: #eeee;
  color: #000;
`;

function P({ children }) {
  return (
    <div>
      <Par>{children}</Par>
    </div>
  );
}

export default P;
