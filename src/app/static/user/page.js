"use client";

import React from "react";
import getUsers from "../../../../services/getUsers";
import Link from "next/link";

export default async function UserListing(props) {
  const getUserList = getUsers();
  const { users } = await getUserList;
  console.log(users, "asidusaidusaoiduaso");
  return (
    <div>
      <h1>User Page (SSG)</h1>
      <div style={{ display: "grid" }}>
        {users?.map((user) => (
          <Link href={`/users/${user?.id}`}>{user.firstName}</Link>
        ))}
      </div>
    </div>
  );
}
