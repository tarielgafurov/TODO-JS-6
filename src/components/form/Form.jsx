import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import Input from '../UI/Input'

const Form = (props) => {



    const [inputValue, setInputValue] = useState("")
    const [isValid, setIsvalid] = useState(true)

    const valueChangeHandler = (e) => {
        if(e.target.value.trim().length > 0){
            setIsvalid(true)
        }
        setInputValue(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if(inputValue.trim().length === 0){
            setIsvalid(false)
            return
        }

        const objectWithValue = {
            text: inputValue,
            id: Math.random().toString()
        }
        props.onSave(objectWithValue)
        setInputValue("")
    }

    
  return (
    <FormContainer onSubmit={submitHandler}>
      <Card className="parent" >
        {!isValid && <h3 style={{color: "red"}} >"Пустой инпут"</h3>}
        <Input border={!isValid ? "2px solid red" : "1px solid black"} value={inputValue} onChange={valueChangeHandler} />
        <Button>ADD</Button>
      </Card>
    </FormContainer>
  )
}

const FormContainer = styled.form`
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    width: 600px;
    height: 200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

const Card = styled.div`
    width: 500px;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
`

export default Form
