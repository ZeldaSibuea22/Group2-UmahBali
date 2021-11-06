import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "../../style/header.css"



export default function Headers() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid px-5">
                    <Link className="navbar-brand fw-bold" to="/">Umah Bali</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-4 profile-menu" id="myTab">
                            <li className="nav-item me-lg-3">
                                <Link to="/#" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item me-lg-3">
                                <Link to="/properties" className="nav-link">Properties</Link>
                            </li>
                            <li className="nav-item me-lg-3">
                                <Link to="/agents" className="nav-link">Agents</Link>
                            </li>
                            {/* Sign in user */}
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item"><i class="fas fa-heart fa-fw"></i> Wish List</a></li>
                                    <li><hr class="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" ><i class="fas fa-sign-out-alt fa-fw"></i> Log Out</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <Link to="/sign-in" className="nav-link" >
                            <button className="btn btn-primary" style={{ backgroundColor: "#003459" }}>Sign in</button>
                        </Link>
                    </div>
                </div>

            </nav>
        </div >
    )
}
