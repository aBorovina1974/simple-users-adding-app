import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div>
      <div className={styles["modal-card__backdrop"]} />
      <Card className={styles["modal-card"]}>
        <header className={styles["modal-card__header"]}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles["modal-card__content"]}>
          <p>{props.message}</p>
        </div>
        <footer className={styles["modal-card__footer"]}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
