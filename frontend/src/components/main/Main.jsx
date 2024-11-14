import React from "react";
import { Outlet } from "react-router";

const Main = () => {
  return <main className="grow">
    <Outlet />
  </main>;
};

export default Main;
