import { Routes, Route } from "react-router";
import App from "../pages/App";
import Properties from "../pages/Properties";
import Agents from "../pages/Agents";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/properties" element={<Properties />}></Route>
      <Route path="/agents" element={<Agents />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
    </Routes>
  );
}
