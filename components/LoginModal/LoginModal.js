import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import styled from "styled-components";
import { ClickButton } from "../ClickButton/ClickButton";
import LoginButton from "../LoginButton/LoginButton";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#525252F0",
  },
};

Modal.setAppElement("#__next");

export function LoginModal({ specifyingText, defaultName, isForEpisode }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ClickButton
        handleButtonClick={openModal}
        defaultName={defaultName}
        isForEpisode={isForEpisode}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Info Modal"
      >
        <StyledModalDiv>
          <p>You need to be logged in to {specifyingText}</p>
          <StyledButtonWrapper>
            <LoginButton />
            <StyledButton onClick={closeModal}>Close</StyledButton>
          </StyledButtonWrapper>
        </StyledModalDiv>
      </Modal>
    </>
  );
}

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;

const StyledModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--main-text-color);
`;

const StyledButton = styled.button`
  background-color: var(--main-callToAction-background-color);
  padding: 1rem;
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;
