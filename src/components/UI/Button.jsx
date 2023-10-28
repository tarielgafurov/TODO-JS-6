import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <Btn onClick={props.onClick} >{props.children}</Btn>
  )
}


const Btn = styled.button`
    padding: 10px 35px;
    background-color: #8A2BE2;
    border: none;
    border-radius: 3px;

    &:active{
        border: 2px solid black;
        color: white;
        background-color: #8B008B;
    }
`

export default Button
