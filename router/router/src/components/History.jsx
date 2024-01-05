import React from "react";
import { Link, Outlet } from "react-router-dom";

const History = () => {
  return (
    <>
      <div>History</div>
      <nav>
        <Link to="team">Team</Link>
        <Link to="company">Company</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default History;
