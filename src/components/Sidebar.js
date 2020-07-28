import React from 'react'
import styled from 'styled-components'
import Todos from './Todos'
import Colors from './../constants/Colors'

const Container = styled.section`
  background-color: #0000;
  height: 100%;
  width: calc(100vw / 5);
  padding-top: 75px;
  position: fixed;
  border-right: 1px solid black;
  border-left: 10px solid ${Colors.secundary};
`

function Sidebar() {
  return (
    <Container>
      <Todos />
    </Container>
  )
}

export default Sidebar
