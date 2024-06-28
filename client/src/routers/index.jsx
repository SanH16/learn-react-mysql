import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Create from "../components/Create";
import Edit from "../components/Edit";
import Read from "../components/Read";

export default function SetupRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/read/:id" element={<Read />} />
    </Routes>
  );
}
