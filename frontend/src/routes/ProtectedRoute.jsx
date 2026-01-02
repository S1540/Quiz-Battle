import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  if (isAuth === null) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Checking authentication...
      </div>
    );
  }

  return isAuth ? children : <Navigate to={"/profile"} replace />;
};

export default ProtectedRoute;
