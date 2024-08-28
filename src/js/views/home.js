// Home.jsx

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchCharacters();
        actions.fetchPlanets();
        actions.fetchVehicles();
    }, []);

    return (
        <div className="container">
            {/* Characters Section */}
            <div className="category mb-4">
                <h2>Characters</h2>
                <div className="d-flex overflow-auto">
                    <div className="d-flex flex-nowrap">
                        {store.characters.map((character, index) => (
                            <div key={index} className="card mx-1" style={{ width: "16rem" }}>
                                <img 
                                    src={character.imageUrl} 
                                    className="card-img-top img-fluid" 
                                    alt={character.name}
                                    style={{ objectFit: "cover", height: "200px" }} 
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{character.name}</h5>
                                    <p className="card-text">Gender: {character.gender}</p>
                                    <p className="card-text">Hair Color: {character.hair_color}</p>
                                    <p className="card-text">Eye Color: {character.eye_color}</p>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => window.location.href = `/details/characters/${character.uid}`}>
                                        View Details
                                    </button>
                                         <button 
                                            className="btn btn-outline-warning" 
                                            onClick={() => actions.addFavorite(character)}>
                                            {actions.isFavorite(character) 
                                                ? <i className="fa-solid fa-star"></i> 
                                                : <i className="fa-regular fa-star"></i>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Planets Section */}
            <div className="category mb-4">
                <h2>Planets</h2>
                <div className="d-flex overflow-auto">
                    <div className="d-flex flex-nowrap">
                        {store.planets.map((planet, index) => (
                            <div key={index} className="card mx-1" style={{ width: "16rem" }}>
                                <img 
                                    src={planet.imageUrl} 
                                    className="card-img-top img-fluid" 
                                    alt={planet.name}
                                    style={{ objectFit: "cover", height: "200px" }} 
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{planet.name}</h5>
                                    <p className="card-text">Population: {planet.population}</p>
                                    <p className="card-text">Terrain: {planet.terrain}</p>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={() => window.location.href = `/details/characters/${character.uid}`}>
                                        View Details
                                    </button>
                                        <button 
                                            className="btn btn-outline-warning" 
                                            onClick={() => actions.addFavorite(planet)}>
                                            {actions.isFavorite(planet) 
                                                ? <i className="fa-solid fa-star"></i> 
                                                : <i className="fa-regular fa-star"></i>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Vehicles Section */}
            <div className="category mb-4">
                <h2>Vehicles</h2>
                <div className="d-flex overflow-auto">
                    <div className="d-flex flex-nowrap">
                        {store.vehicles.map((vehicle, index) => (
                            <div key={index} className="card mx-1" style={{ width: "16rem" }}>
                                <img 
                                    src={vehicle.imageUrl} 
                                    className="card-img-top img-fluid" 
                                    alt={vehicle.name}
                                    style={{ objectFit: "cover", height: "200px" }} 
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{vehicle.name}</h5>
                                    <p className="card-text">Capacity: {vehicle.capacity}</p>
                                    <p className="card-text">Cost in Credits: {vehicle.cost_in_credits}</p>
                                    <div className="d-flex justify-content-center align-items-center mt-2">
                                    <button 
                                     className="btn btn-primary" 
                                        onClick={() => window.location.href = `/details/characters/${character.uid}`}>
                                        View Details
                                    </button>
                                        <button 
                                            className="btn btn-outline-warning" 
                                            onClick={() => actions.addFavorite(vehicle)}>
                                            {actions.isFavorite(vehicle) 
                                                ? <i className="fa-solid fa-star"></i> 
                                                : <i className="fa-regular fa-star"></i>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
