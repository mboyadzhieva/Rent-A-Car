import { Route, Routes } from "react-router-dom";
import { Register } from "../auth/Register";

export function Main() {
  return (
    <Routes>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}
