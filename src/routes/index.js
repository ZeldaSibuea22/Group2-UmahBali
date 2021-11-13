import { Routes, Route } from "react-router";
import App from "../pages/App";
import Properties from "../pages/Properties";
import Agents from "../pages/Agents";
import DetailProperty from "../pages/Detail";




export default function Routers(){
    return(
    <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="/properties" element={<Properties />}>
        </Route>
        <Route path="/agents" element={<Agents />}>
        </Route>
        <Route path="/detail" element={<DetailProperty />}>
        </Route>
    </Routes>
    )
}