import React, { useRef, useState } from "react";

export const Modal = () => {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (isOpen) {
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div
          ref={modalRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleClickOutside}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            <h2>Modal Content</h2>
            <p>This is the modal content.</p>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};
