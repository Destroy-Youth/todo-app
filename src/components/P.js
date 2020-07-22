import React from "react";
import styled from "styled-components";

function P({ children }) {
  const Par = styled.p`
    font-size: 1em;
    background-color: #eeee;
    color: #000;
  `;

  return (
    <div>
      <Par>{children}</Par>
    </div>
  );
}

export default P;
