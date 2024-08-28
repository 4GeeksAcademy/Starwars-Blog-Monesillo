import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" alt="Logo" className="navbar-brand mb-0 h1" style={{ height: "80px" }} />
            </Link>
            <div className="ml-auto dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    {store.favorites.length > 0 ? (
                        store.favorites.map((item, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                <Link to={`/details/${item.uid}`} className="dropdown-item">
                                    {item.name}
                                </Link>
                                <button 
                                    className="btn btn-link text-danger p-0" 
                                    onClick={() => actions.addFavorite(item)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))
                    ) : (
                        <li>
                            <span className="dropdown-item">No favorites added</span>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};