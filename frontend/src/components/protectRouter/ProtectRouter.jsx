import React from "react";
import { useGetmeQuery } from "../../app/services/userSlicer";
import { Navigate } from "react-router-dom";

const ProtectRouter = ({ children }) => {
  const { data: user, isLoading } = useGetmeQuery();
  console.log(user);
  if (isLoading) {
    // Display a loading state while authentication is being checked
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectRouter;
