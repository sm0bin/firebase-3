import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);

  if (loading) {
    return (
      <span className="loading loading-ring loading-lg mx-auto absolute inset-0 h-screen"></span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
