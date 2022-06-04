import { Navigate } from "react-router-dom";
import { isUserLogged } from "./auth-service";

const AuthGuard = ({ children }) => {
  if (!isUserLogged()) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default AuthGuard;
