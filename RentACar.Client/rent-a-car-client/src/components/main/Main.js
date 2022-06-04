import { useRoutes } from "react-router-dom";
import NonAuthGuard from "./../../services/non-auth-guard-service";
import { Register } from "./../auth/register/Register";
import { Login } from "./../auth/login/Login";
import AuthGuard from "./../../services/auth-guard-service";
import { UsersList } from "./../users/user-table/UsersList";
import { EditUser } from "./../users/user-edit-form/EditUser";
import { CarList } from "../cars/car-list/CarList";
import { CarForm } from "./../cars/car-form/CarForm";
import { RentACarForm } from "./../car-rental/rent-a-car-form/RentACarForm";
import { CarRentalDetails } from "../car-rental/user-car-rentals/CarRentalsDetails";

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
            <UsersList />
          </AuthGuard>
        ),
      },
      {
        path: "/users",
        element: (
          <AuthGuard>
            <UsersList />
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
      {
        path: "/car-rentals/:id",
        element: (
          <AuthGuard>
            <CarRentalDetails />
          </AuthGuard>
        ),
      },
    ]);

  return <CustomRoutes />;
}
