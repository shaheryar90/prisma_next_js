"use client";

import React from "react";
import getUsers from "../../../../services/getUsers";

export default async function Users(props) {
  const getUserList = getUsers();
  const { users } = await getUserList;

  const currentId = props.params.userId;
  console.log(currentId, "qqqqqqqqqqqqqqq");
  const userData = users[currentId - 1];
  console.log(userData, "zzzzzzzzzzzzzzzzzzzzzz");
  const { id, firstName } = userData;
  return (
    <div>
      <h1>User Page (SSG)</h1>
      <h3>
        {id} {firstName}
      </h3>
    </div>
  );
}
