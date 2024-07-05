"use client";

import React, { useEffect, useState } from "react";
import getUsers from "../../../../services/getUsers";
import Link from "next/link";

export default function UserListing(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { users } = await getUsers();
      setUsers(users);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Page (SSG)</h1>
      <div style={{ display: "grid" }}>
        {users?.map((user, index) => (
          <div key={index}>
            <Link href={`/users/${user?.id}`}>{user.firstName}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
