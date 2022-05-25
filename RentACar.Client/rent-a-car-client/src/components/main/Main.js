import { Route, Routes } from "react-router-dom";
import { Register } from "../auth/register/Register";
import { Login } from "./../auth/login/Login";

export function Main() {
  return (
    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}
