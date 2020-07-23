import React from 'react'
import styled from 'styled-components'
import Todos from './Todos'

const Container = styled.section`
  flex: 2;
  background-color: gray;
  height: 100%;
`

function Sidebar() {
  return (
    <Container>
      <Todos />
    </Container>
  )
}

export default Sidebar
