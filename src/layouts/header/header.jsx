import React from 'react'
import { Link } from "react-router-dom";
import "../../style/header.css"
import {
    useMatch,
    useResolvedPath
} from "react-router-dom";

export default function Headers() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid px-5">
                <Link className="navbar-brand fw-bold" to="/">Umah Bali</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-4 position-relative" id="myTab">
                        <li className="nav-item pe-lg-2">
                            <CustomLink to="/#" aria-current="page">Home</CustomLink>
                        </li>
                        <li className="nav-item pe-lg-2">
                            <CustomLink to="/properties">Properties</CustomLink>
                        </li>
                        <li className="nav-item pe-lg-2">
                            <CustomLink to="/agents">Agents</CustomLink>
                        </li>
                        {/* Khusus Sign in user */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="href={() => false" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-user"></i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a href="href={() => false" className="dropdown-item"><i className="fas fa-heart fa-fw"></i> Wish List</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a href="href={() => false" className="dropdown-item" ><i className="fas fa-sign-out-alt fa-fw"></i> Log Out</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    <Link to="/sign-in" className="nav-link" >
                        <button className="btn btn-primary" style={{ backgroundColor: "#003459", border: "none" }}>Sign in</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link className={"nav-link pb-lg-3 pb-2 " + (match ? "active" : " ")} to={to} {...props}>
                {children}
            </Link>
            {match && ""}
        </div >
    );
}
