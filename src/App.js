import React, {useEffect, useState} from 'react';
import './App.css';
import PokemonCard from "./components/pokemonCard/PokemonCard";
import axios from "axios";

function App() {
    const [pokemon, setPokemon] = useState({});

    async function fetchPokemon() {
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/JigglyPuff`);
            console.log(result);
            setPokemon(result);
        } catch
            (e) {
            console.error(e);
        }
    }
    fetchPokemon();

    return (
        <>
            <h2>naam</h2>

            <h3>abilities</h3>
            <h3>weight</h3>
            <h3>moves</h3>
        </>

    )
}

export default App;