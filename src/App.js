import React from 'react'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import { TodosProvider } from './context/TodosContext'
import { SelectedTodoProvider } from './context/SelectedTodoContext'

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
      <SelectedTodoProvider>
        <TodosProvider>
          <Header />
          <Main>
            <Sidebar />
            <div />
            <TasksSection>
              <Tasks />
            </TasksSection>
          </Main>
        </TodosProvider>
      </SelectedTodoProvider>
    </div>
  )
}

export default App
