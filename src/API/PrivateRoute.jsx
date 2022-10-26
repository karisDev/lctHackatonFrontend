import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  // get user from context
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }

  return <Navigate to="/signin" />;
};

export default PrivateRoute;
