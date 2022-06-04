import { Navigate } from "react-router-dom";
import { isUserLogged } from "./auth-service";

const AuthGuard = ({ children }) => {
  const isAuthenticated = isUserLogged();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default AuthGuard;
