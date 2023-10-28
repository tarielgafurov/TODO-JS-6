
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import styled from "styled-components";
import Form from "../form/Form";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const Todos = () => {
  const [state, setValue] = useState([]);
  const [stateModal , setStateModal] = useState(false)

  
  function createLists(data) {
    setValue((prev) => {
      return [...prev, data];
    });
  }
  
  const modalToggleHandler = () => {
    setStateModal((prev) => !prev)
  }
  
  const deleteFunction = (id) => {
    const filteredForDelete = state.filter((el) => {
      if(el.id !== id){
        return [el]
      }
    })
    setValue(filteredForDelete)
    setStateModal(false)
  }

  return (
    <div>
      <Form onSave={createLists} />
      {state.map((values) => {
        return (
          <ContainerLists key={values.id} >
            {stateModal ? <Modal onClose={modalToggleHandler} onConfirm={() => deleteFunction(values.id)}/> : null}
            <List>{values.text}</List>
            <Button onClick={modalToggleHandler} >Delete</Button>
          </ContainerLists>
        );
      })}
    </div>
  );
};

const ContainerLists = styled.div`
  width: 850px;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const List = styled.h3`
  width: 80%;
  background-color: rgb(138, 43, 226);
  padding: 20px;
  text-align: start;
  color: white;
  border-radius: 3px;

  &:hover {
    transition-duration: 0.5s;
    background-color: #db7093;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export default Todos;
