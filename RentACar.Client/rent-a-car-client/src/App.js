import NonAuthGuard from "./services/non-auth-guard-service";
import AuthGuard from "./services/auth-guard-service";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { CarList } from "./components/cars/car-list/CarList";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { CarForm } from "./components/cars/car-form/CarForm";
import { UsersTable } from "./components/users/users-table/UsersTable";
import { EditUser } from "./components/users/user-edit-form/EditUser";
import { CarRentalList } from "./components/car-rental/car-rental-list/CarRentalList";
import { RentACarForm } from "./components/car-rental/car-rental-form/RentACarForm";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <NonAuthGuard>
              <Login />
            </NonAuthGuard>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <NonAuthGuard>
              <Register />
            </NonAuthGuard>
          }
        />
        <Route
          exact
          path="/"
          element={
            <AuthGuard>
              <Layout />
            </AuthGuard>
          }
        >
          <Route path="/cars" element={<CarList />} />
          <Route path="/car/add" element={<CarForm />} />
          <Route path="/car/edit/:id" element={<CarForm />} />
          <Route path="/users" element={<UsersTable />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/car-rentals" element={<CarRentalList />} />
          <Route path="/car/rent/:id" element={<RentACarForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
