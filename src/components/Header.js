import React from 'react'
import styled from 'styled-components'
import Colors from './../constants/Colors'

const Bar = styled.section`
  background-color: ${Colors.primary};
  width: 100%;
  height: 3rem;
  -webkit-box-shadow: 0px 8px 22px -7px rgba(0, 0, 0, 0.69);
  -moz-box-shadow: 0px 8px 22px -7px rgba(0, 0, 0, 0.69);
  box-shadow: 0px 8px 22px -7px rgba(0, 0, 0, 0.69);

  display: grid;
  grid-template-columns: 1fr auto 1fr;
`

const Icon = styled.svg`
  fill: none;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke: red;
  background-color: white;
  border-radius: 50px;
  margin-left: 1rem;
  margin-top: 0.5rem;

  display: flex;
  align-items: center;

  grid-column: 1;
`
const Title = styled.div`
  font-size: 2rem;
  font-family: Garamond, Baskerville, 'Baskerville Old Face';
  color: white;
  margin-top: 0.5rem;
  grid-column: 2;
`

function Header() {
  return (
    <div id="header">
      <Bar>
        <Icon width="30" height="30" viewBox="0 0 24 24">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </Icon>
        <Title>Ultimate procastinator 1000</Title>
      </Bar>
    </div>
  )
}

export default Header
