import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";
function UsersList(props) {
  const deleteUserHandler = (event) => {
    props.onDeleteUser(event.target.id);
  };

  return (
    <Card className={styles["users-card"]}>
      <ul>
        {props.users.map((user) => (
          <li id={user.id} key={user.id} onClick={deleteUserHandler}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
