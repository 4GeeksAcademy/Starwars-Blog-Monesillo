const getState = ({ getStore, setStore }) => {
    return {
        store: {
            characters: [],
            planets: [],
            vehicles: [],
            favorites: []
        },
        actions: {
            fetchCharacters: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/people');
                    const data = await response.json();

                    const characters = await Promise.all(
                        data.results.map(async (character) => {
                            const detailsResponse = await fetch(character.url);
                            const detailsData = await detailsResponse.json();
                            const properties = detailsData.result.properties;
                            return {
                                ...character,
                                ...properties,
                                imageUrl: `https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`,
                                gender: properties.gender || "N/A",
                                hair_color: properties.hair_color || "N/A",
                                eye_color: properties.eye_color || "N/A"
                            };
                        })
                    );

                    setStore({ characters });
                } catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },

            fetchPlanets: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/planets');
                    const data = await response.json();

                    const planets = await Promise.all(
                        data.results.map(async (planet) => {
                            const detailsResponse = await fetch(planet.url);
                            const detailsData = await detailsResponse.json();
                            const properties = detailsData.result.properties;
                            return {
                                ...planet,
                                ...properties,
                                imageUrl: `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`,
                                population: properties.population || "N/A",
                                terrain: properties.terrain || "N/A"
                            };
                        })
                    );

                    setStore({ planets });
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },

            fetchVehicles: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/vehicles');
                    const data = await response.json();

                    const vehicles = await Promise.all(
                        data.results.map(async (vehicle) => {
                            const detailsResponse = await fetch(vehicle.url);
                            const detailsData = await detailsResponse.json();
                            const properties = detailsData.result.properties;
                            return {
                                ...vehicle,
                                ...properties,
                                imageUrl: `https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`,
                                capacity: properties.cargo_capacity || "N/A",
                                cost_in_credits: properties.cost_in_credits || "N/A"
                            };
                        })
                    );

                    setStore({ vehicles });
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                }
            },

            addFavorite: (item) => {
                const store = getStore();
                const isFavorite = store.favorites.some(fav => fav.uid === item.uid);

                if (isFavorite) {
                    setStore({ 
                        favorites: store.favorites.filter(fav => fav.uid !== item.uid) 
                    });
                } else {
                    setStore({ 
                        favorites: [...store.favorites, item] 
                    });
                }
            },

            isFavorite: (item) => {
                const store = getStore();
                return store.favorites.some(fav => fav.uid === item.uid);
            }
        }
    };
};

export default getState;
