import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./overlays/Backdrop";
import ModalOverlay from "./overlays/ModalOverlay";

function ErrorModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onError={props.onError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onError={props.onError}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}

export default ErrorModal;
