import React from "react";

export function Post({ userId, id, title, body }) {
  return (
    <div className="post">
      <div>User ID: {userId}</div>
      <div>Post ID: {id}</div>
      <div>Title:{title}</div>
      <div>Body:{body}</div>
    </div>
  );
}
