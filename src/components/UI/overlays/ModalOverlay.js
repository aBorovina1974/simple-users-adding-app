import React from "react";
import Card from "../Card";
import Button from "../Button";
import styles from "./ModalOverlay.module.css";

function ModalOverlay(props) {
  return (
    <Card className={styles["modal-card"]}>
      <header className={styles["modal-card__header"]}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles["modal-card__content"]}>
        <p>{props.message}</p>
      </div>
      <footer className={styles["modal-card__footer"]}>
        <Button onClick={props.onError}>Okay</Button>
      </footer>
    </Card>
  );
}

export default ModalOverlay;
