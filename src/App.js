import React from 'react'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'

const Main = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: calc(100hv);
`

const TasksSection = styled.section`
  flex: 9;
`

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Sidebar />
        <div />
        <TasksSection>
          <Tasks />
        </TasksSection>
      </Main>
    </div>
  )
}

export default App
