import React from "react";

function Modal() {
  return (
    <div>
      <div className="modal">
        <h4>Remove All Items From Your Shopping Cart?</h4>
        <button className="btn confirm-btn">CONFIRM</button>
        <button className="btn cancel-btn">CANCEL</button>
      </div>
    </div>
  );
}

export default Modal;
