import React from 'react'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'

const Main = styled.section`
  display: flex;
  flex-direction: row;
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
        <TasksSection>
          <Tasks />
        </TasksSection>
      </Main>
    </div>
  )
}

export default App
