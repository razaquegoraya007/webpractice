import React, { useState } from "react";
export default function Qamyab() {
  const [users, setUsers] = useState([]);
  
  const goForward = (index) => {
    setUsers(prevUsers => {
      return prevUsers.map((user, i) => {
        if (i === index && user.step < 3) {
          return {...user, step: user.step + 1};
        }
        return user;
      });
    });
  };
  
  return (
    <div className="container">
      <div>
        <button
          onClick={() => {
            setUsers(prev => [
              ...prev,
              {
                userName: `user-${prev.length + 1}`,
                step: 1,
              },
            ]);
          }}
        >
          Create User
        </button>
      </div>
      <div>
        {users.map((userItem, index) => (
          <div key={index} style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
            <div>{JSON.stringify(userItem)}</div>
            <div style={{ display: "flex", gap: "20px" }}>
              <button disabled={userItem.step < 1}>Step 1</button>
              <button disabled={userItem.step < 2}>Step 2</button>
              <button disabled={userItem.step < 3}>Step 3</button>
            </div>
            <div>
              <button
                className="forward"
                onClick={() => {
                  goForward(index);
                }}
              >
                Forward
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
