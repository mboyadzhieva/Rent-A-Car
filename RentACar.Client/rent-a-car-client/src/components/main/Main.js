import NonAuthGuard from "./../../services/non-auth-guard-service";
import AuthGuard from "./../../services/auth-guard-service";
import { useRoutes } from "react-router-dom";
import { UsersTable } from "../users/users-table/UsersTable";
import { EditUser } from "./../users/user-edit-form/EditUser";
import { CarList } from "../cars/car-list/CarList";
import { CarForm } from "./../cars/car-form/CarForm";
import { RentACarForm } from "../car-rental/RentACarForm";
import { Login } from "./../auth/Login";
import { Register } from "../auth/Register";

export function Main() {
  const CustomRoutes = () =>
    useRoutes([
      {
        path: "/login",
        element: (
          <NonAuthGuard>
            <Login />
          </NonAuthGuard>
        ),
      },
      {
        path: "/register",
        element: (
          <NonAuthGuard>
            <Register />
          </NonAuthGuard>
        ),
      },
      {
        path: "/",
        element: (
          <AuthGuard>
            <UsersTable />
          </AuthGuard>
        ),
      },
      {
        path: "/users",
        element: (
          <AuthGuard>
            <UsersTable />
          </AuthGuard>
        ),
      },
      {
        path: "/user/edit/:id",
        element: (
          <AuthGuard>
            <EditUser />
          </AuthGuard>
        ),
      },
      {
        path: "/cars",
        element: (
          <AuthGuard>
            <CarList />
          </AuthGuard>
        ),
      },
      {
        path: "/car/edit/:id",
        element: (
          <AuthGuard>
            <CarForm />
          </AuthGuard>
        ),
      },
      {
        path: "/car/add",
        element: (
          <AuthGuard>
            <CarForm />
          </AuthGuard>
        ),
      },
      {
        path: "/car/rent/:id",
        element: (
          <AuthGuard>
            <RentACarForm />
          </AuthGuard>
        ),
      },
    ]);

  return <CustomRoutes />;
}
