import { Routes, Route } from "react-router";
import App from "../pages/App";
import Properties from "../pages/Properties";
import Agents from "../pages/Agents"
import Properties_Search from "../pages/Properties_Search";


export default function Routers(){
    return(
    <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="/properties" element={<Properties />}>
        </Route>
        <Route path="/agents" element={<Agents />}>
        </Route>
        <Route path="/properties_search" element={<Properties_Search/>}>
        </Route>
    </Routes>
    )
}