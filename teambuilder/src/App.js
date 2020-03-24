import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import Form from './components/Form'
import styled from "styled-components";

const initialTeam = [
  { id: uuid(), name: 'Steven Spencer', email: 'stevespencerspam@gmail.com', position: "Form Builder" },
  { id: uuid(), name: 'John Doe', email: 'johndoe@aol.com', position: "Generic Programmer" },
  { id: uuid(), name: 'Jane Doe', email: 'janedoe@hotmail.com', position: "Generic Programmer" },
  { id: uuid(), name: 'Lauren Epson', email: 'lepson@loremipsum.com', position: "Placeholder Scripter" },
]

function App() {
  const [team, setTeam] = useState(initialTeam)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    position: '',
  })

  const onInputChange = event => {
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }
  const onFormSubmit = event => {
    event.preventDefault()
    const newMember = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      position: formValues.position,
    }
    setTeam([...team, newMember]) 
  }

  const TeamCard = styled.div`
  background: rgb(156, 175, 179);
  padding: 2%;
  width: 20%;
  margin: 2% 1%;
  border-radius: 10px;
  border: 2px solid black;
  `
  const TeamGrid = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `

  const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
  `

  const Email = styled.p`
  font-style: italic;
  `

  const Pos = styled.p`
  text-decoration: underline;
  `


  return (
    <div className="App">
      <h3>List of Team Members:</h3>
      <TeamGrid>
      {
        team.map(tm => <TeamCard key={tm.id}>
          <Name>{tm.name}</Name>
          <Email>{tm.email}</Email>
          <Pos>{tm.position}</Pos>
        </TeamCard>)
      }
      </TeamGrid>

      <Form
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />
    </div>
    
  )
}


export default App
