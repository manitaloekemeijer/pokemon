import React, {useEffect, useState} from "react";
import axios from "axios";

function PokemonCard({name}) {

    const [pokemonData, setPokemonData] = useState({});
    useEffect(() => {
        async function fetchPokemon() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                // console.log(result);
                setPokemonData(result);
            } catch (e) {
                console.error(e);
            }
        }

        fetchPokemon();
    }, []);

    return (
        <>

            <div className="pokemon-card">
                {Object.keys(pokemonData).length > 0 &&
                    <>
                        <h2>{pokemonData.data.name}</h2>
                        <img src={pokemonData.data.sprites.front_shiny} alt="pokemon card"/>
                        <p>Aantal moves: {pokemonData.data.moves.length}</p>
                        <p>Gewicht: {pokemonData.data.weight}</p>
                        <p>Abilities: </p>
                        <ul>
                            {pokemonData.data.abilities.map((a) => {
                                return <li key={a.ability.name}>{a.ability.name}</li>
                            })}
                        </ul>
                    </>
                }
            </div>
        </>
    );
}

export default PokemonCard;