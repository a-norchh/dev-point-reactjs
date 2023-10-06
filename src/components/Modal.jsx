import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

const Modal = ({ image, onCloseHandler }) => {
  const [modalShow, setModalShow] = useState(false);

  const closeModalHandler = () => {
    document.body.style.overflow = "auto";
    onCloseHandler();
  };

  setTimeout(() => {
    setModalShow(true);
  }, 100);

  return (
    <div className={`modal ${modalShow ? "modal--active" : ""}`}>
      <div className="modal__overlay" onClick={closeModalHandler}></div>
      <div className="modal__content">
        <FaTimesCircle
          className="modal__close--btn"
          size={30}
          onClick={closeModalHandler}
        />
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Modal;
