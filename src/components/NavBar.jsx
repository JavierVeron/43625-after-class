import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src="/images/mcdonalds-logo-footer-bg-white.png" alt="McDonalds" width="88" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/category/hamburguesas"}>Hamburguesas</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/category/papas"}>Papas</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/category/bebidas"}>Bebidas</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname="page" to={"/category/postres"}>Postres</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;