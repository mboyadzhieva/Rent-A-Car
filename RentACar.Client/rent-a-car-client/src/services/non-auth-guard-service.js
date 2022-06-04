import { Navigate } from "react-router-dom";
import { isUserLogged } from "./auth-service";

const NonAuthGuard = ({ children }) => {
  const isAuthenticated = isUserLogged();

  if (isAuthenticated) {
    // TODO Navigate to cars
    return <Navigate to="/users" />;
  }
  return children;
};

export default NonAuthGuard;
