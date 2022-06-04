import { Navigate } from "react-router-dom";
import { isUserLogged } from "./auth-service";

const NonAuthGuard = ({ children }) => {
  if (isUserLogged()) {
    return <Navigate to="/cars" />;
  }
  return children;
};

export default NonAuthGuard;
