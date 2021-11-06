import { Routes, Route } from "react-router";
import App from "../pages/App";



export default function Routers(){
    return(
    <Routes>
        <Route path="/" element={<App />}>
        </Route>
    </Routes>
    )
}