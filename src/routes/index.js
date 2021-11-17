import { Routes, Route } from "react-router";
import App from "../pages/App";
import Properties from "../pages/Properties";
import Agents from "../pages/Agents";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import DetailProperty from "../pages/Detail";

import Properties_Search from "../pages/Properties_Search";

import Userpage from "../pages/Userpage";
import NotFound from "../pages/NotFound";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/properties" element={<Properties />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/userpage" element={<Userpage />}></Route>
      <Route path="/properties/detail/:id" element={<DetailProperty />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
