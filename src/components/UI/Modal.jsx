import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Button from "./Button";

const Modal = ({ onClose, onConfirm }) => {
  return (
    <>
      {createPortal(
        <>
          <BaskDrop onClick={onClose} />
          <Card>
            <h3>Delete ? </h3>
            <ContainerButtons>
              <Button onClick={onConfirm}>Yes</Button>
              <Button onClick={onClose}>No</Button>
            </ContainerButtons>
          </Card>
        </>,
    document.getElementById("modal")  
      )}
    </>
  );
};

const Card = styled.div`
  background-color: white;
  border: 2px solid;
  padding: 30px;
  width: 550px;
  height: 200px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BaskDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
`;

const ContainerButtons = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Modal;
