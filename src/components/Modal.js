import ReactDOM from "react-dom";
import Button from "./Button";

const modalRoot = document.getElementById("modal-root");
const Modal = ({ title, children, show, setShow }) => {
  const ModalComp = () => {
    return (
      <div className={`modal ${show ? "active" : "hide"}`}>
        <div className="modal__content">
          <p className="modal__title">{title}</p>
          <div className="modal__description">{children}</div>
          <Button onClick={() => setShow(false)} label={"Dismiss"} />
        </div>
      </div>
    );
  };
  return ReactDOM.createPortal(<ModalComp />, modalRoot);
};

export default Modal;
