import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addToUsersHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const deleteFromUsersHandler = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addToUsersHandler} />
      {users.length > 0 && (
        <UsersList users={users} onDeleteUser={deleteFromUsersHandler} />
      )}
    </Fragment>
  );
}

export default App;
