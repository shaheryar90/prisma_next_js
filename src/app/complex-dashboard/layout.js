import React from "react";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <>
      <div>{children}</div>;
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  ) : (
    login
  );
}

// how to make section in complex-dashbaord this is called paralell route to split a single layout into various slots
// this is called conditional rendering
