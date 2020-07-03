import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

function Modal(props) {
  return ReactDOM.createPortal(
    <div
      id="back-drop"
      className={"back-drop" + (props.show ? "" : " modal-hide")}
      onClick={(e) => e.target.id === "back-drop" && props.close()}
    >
      <div className="modal">{props.children}</div>
    </div>,
    document.getElementById("modal-root")
  );
}
export default Modal;
