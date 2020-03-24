import React, {useState} from 'react'
import {Collapse} from 'reactstrap'
import styled from 'styled-components'

function Form(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    const NewMemberButton = styled.button`
    margin-bottom: 1%;
    `
    return (
      <div>
        <NewMemberButton onClick={toggle}>New Member</NewMemberButton>
        <Collapse isOpen={isOpen}>
        <form onSubmit={props.onFormSubmit}> 
          <input
              placeholder='Name'
              onChange={props.onInputChange}
              value={props.formValues.name}
              name='name'
              type='text'
            /><br />
  
          <input
              placeholder="Email"
              onChange={props.onInputChange}
              value={props.formValues.email}
              name='email'
              type='text'
            /><br />
          
          <input
              placeholder="Position"
              onChange={props.onInputChange}
              value={props.formValues.position}
              name='position'
              type='text'
            /><br />
  
          <input type='submit' />
        </form>
        </Collapse>
      </div>
    )
  }

  export default Form;