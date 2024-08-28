import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const Details = () => {
    const { store, actions } = useContext(Context);
    const { id, category } = useParams();
    const [itemDetails, setItemDetails] = useState(null);

    useEffect(() => {
        // Fetch item details based on the category and ID
        const fetchDetails = async () => {
            try {
                let url = '';

                if (category === 'characters') {
                    url = `https://www.swapi.tech/api/people/${id}`;
                } else if (category === 'planets') {
                    url = `https://www.swapi.tech/api/planets/${id}`;
                } else if (category === 'vehicles') {
                    url = `https://www.swapi.tech/api/vehicles/${id}`;
                }

                const response = await fetch(url);
                const data = await response.json();

                setItemDetails(data.result.properties);
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };

        fetchDetails();
    }, [id, category]);

    if (!itemDetails) return <div>Loading...</div>;

    // Determine image URL based on category
    const imageUrl = `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={imageUrl} alt="Item" className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <h2>{itemDetails.name}</h2>
                    <p>Hace mucho tiempo, en una galaxia muy, muy lejana...

Episodio IV
Una Nueva Esperanza


Es un periodo de guerra civil.
Naves espaciales rebeldes, atacando
desde una base secreta, han ganado su
primera batalla en contra del
malvado Imperio Galáctico.


Durante la batalla, los espías
rebeldes lograron robar los planos
de la mas moderna arma del impero,
La Estrella de la Muerte, una estación
espacial armada, con poder suficiente
para destruir a un planeta entero.


Perseguida por el impero, La Princesa
Leia huye, resguardando los planos robados
para restaurar la paz y libertad en la galaxia....</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                {category === 'characters' && (
                                    <>
                                        <th scope="col">Name</th>
                                        <th scope="col">Birth Year</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Height</th>
                                        <th scope="col">Skin Color</th>
                                        <th scope="col">Eye Color</th>
                                    </>
                                )}
                                {category === 'planets' && (
                                    <>
                                        <th scope="col">Name</th>
                                        <th scope="col">Climate</th>
                                        <th scope="col">Population</th>
                                        <th scope="col">Terrain</th>
                                        <th scope="col">Diameter</th>
                                    </>
                                )}
                                {category === 'vehicles' && (
                                    <>
                                        <th scope="col">Name</th>
                                        <th scope="col">Model</th>
                                        <th scope="col">Manufacturer</th>
                                        <th scope="col">Cost in Credits</th>
                                        <th scope="col">Passengers</th>
                                    </>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{itemDetails.name || 'N/A'}</td>
                                {category === 'characters' && (
                                    <>
                                        <td>{itemDetails.birth_year || 'N/A'}</td>
                                        <td>{itemDetails.gender || 'N/A'}</td>
                                        <td>{itemDetails.height || 'N/A'}</td>
                                        <td>{itemDetails.skin_color || 'N/A'}</td>
                                        <td>{itemDetails.eye_color || 'N/A'}</td>
                                    </>
                                )}
                                {category === 'planets' && (
                                    <>
                                        <td>{itemDetails.climate || 'N/A'}</td>
                                        <td>{itemDetails.population || 'N/A'}</td>
                                        <td>{itemDetails.terrain || 'N/A'}</td>
                                        <td>{itemDetails.diameter || 'N/A'}</td>
                                    </>
                                )}
                                {category === 'vehicles' && (
                                    <>
                                        <td>{itemDetails.model || 'N/A'}</td>
                                        <td>{itemDetails.manufacturer || 'N/A'}</td>
                                        <td>{itemDetails.cost_in_credits || 'N/A'}</td>
                                        <td>{itemDetails.passengers || 'N/A'}</td>
                                    </>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Details;