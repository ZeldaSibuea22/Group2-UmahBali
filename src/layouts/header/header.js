/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import "../../style/header.css"
import {
    Link,
    useMatch,
    useResolvedPath,
    useLocation,
    useNavigate
} from "react-router-dom";

export default function Headers() {
    const isLogin = localStorage.getItem('isLogin');
    let location = useLocation()

    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("isLogin");
        navigate("/");
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
            <div className="container-fluid px-5">
                <Link className="navbar-brand fw-bold" to="/">Umah Bali</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-4 position-relative" id="myTab">
                        <li className="nav-item pe-lg-2">
                            <CustomLink to="/#" aria-current="page">Beranda</CustomLink>
                        </li>
                        <li className="nav-item pe-lg-2">
                            {location.pathname.includes('/properties/detail/') ? 
                            <div>
                                <Link className={"nav-link pb-lg-3 pb-2 active"} to='/properties'>
                                    Properti
                                </Link>
                            </div > : 
                            <CustomLink to="/properties">Properti</CustomLink>
                            }
                        </li>
                        
                        {/* Khusus Sign in user */}
                        <li className={"nav-item dropdown " + (isLogin ? "" : "d-none")}>
                           <a className="nav-link dropdown-toggle" href="href={() => false" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-user"></i>
                           </a>
                           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li>
                                <Link to="/userpage" className="dropdown-item">
                                  <i className="fas fa-heart fa-fw"></i> Wish List
                                </Link>
                              </li>
                              <li>
                                 <hr className="dropdown-divider"></hr>
                              </li>
                              <li>
                                  <a onClick={() => logout()} className="dropdown-item">
                                      <i className="fas fa-sign-out-alt fa-fw"></i> Keluar
                                  </a>
                              </li>
                            </ul>
                          </li>
                         </ul>
                    {/* {isLogin ? } */}
                    <Link to="/sign-in" className={"nav-link " + (isLogin ? "d-none" : "")} >
                        <button className="btn btn-primary" style={{ backgroundColor: "#003459", border: "none" }}>Masuk</button>
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
            <Link className={"nav-link pb-lg-3 pb-2 " + (match ? 'active' : '')} to={to} {...props}>
                {children}
            </Link>
            {match && ""}
        </div >
    );
}