import { useState } from "react";

const initialUsers = [
  { id: 1, name: "Sarah", active: true },
  { id: 2, name: "John", active: false },
  { id: 3, name: "Mike", active: true },
  { id: 4, name: "Lisa", active: false },
];

const UserList = () => {
  const [show, setShow] = useState(false);

  const toggleActiveInactive = () => {
    setShow(!show);
  };

  const Users = () => {
    const ActiveUsers = initialUsers.filter((user, index) => {
      return user.active === true;
    });
    return show
      ? ActiveUsers.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })
      : initialUsers.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        });
  };

  return (
    <div>
      <h1>Users: {show ? "True" : "False"}</h1>

      <button onClick={() => toggleActiveInactive()}>
        {show ? "Show All Users" : "Show Active Users"}
      </button>
      <div>
        <ul>{<Users />}</ul>
      </div>
    </div>
  );
};

export default UserList;
