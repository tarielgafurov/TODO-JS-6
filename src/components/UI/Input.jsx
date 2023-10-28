import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
  return (
    <InputText ref={props.ref} style={props} type={props.type || "text"} value={props.value} onChange={props.onChange} />
  )
}

const InputText = styled.textarea`
    width: 380px;
    height: 27px;
    padding: 5px;
    border-radius: 5px;
    
    border: ${(props) => props.border || "1px solid black"};
    &:focus{
        border: 3px solid #800000;
        outline: none;
        background-color: #e1c5ef;
    }
`


export default Input
