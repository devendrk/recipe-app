import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../Button/Button";

import "./Modal.scss";

const FormModal = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {!modalIsOpen ? (
        <Button
          handleClick={() => setModalIsOpen(true)}
          text="add new recipe"
          variant="secondary"
        />
      ) : (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="modal"
        >
          <div className="modal__header">
            <div></div>
            <h5 className="modal__title">Add new recipe</h5>
            <div className="modal__closebtn">
              <Button
                handleClick={() => setModalIsOpen(false)}
                text="close"
                variant="danger"
              />
            </div>
          </div>
          {children}
        </Modal>
      )}
    </>
  );
};

export default FormModal;
