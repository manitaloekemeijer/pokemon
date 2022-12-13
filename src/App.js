import React, {useEffect, useState} from 'react';
import './App.css';
import PokemonCard from "./components/pokemonCard/PokemonCard";
import axios from "axios";

function App() {
    const [pokemonArray, setPokemonArray] = useState([]);
    const [arrayMetaData, setArrayMetaData] = useState({});
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    // function goToPreviousPage() {
    //     setUrl(arrayMetaData.previous);
    // }
    //
    // function goToNextPage() {
    //     setUrl(arrayMetaData.next);
    // }
    useEffect(() => {
        async function fetchEmAll() {
            try {
                const result = await axios.get(url);
                console.log(result);
                setArrayMetaData(result.data);
                setPokemonArray(result.data.results);
                console.log(arrayMetaData);
                console.log(url);
            } catch (e) {
                console.error(e);
            }
        }

        fetchEmAll();
    }, [url]);
    return (
        <>
            <>
                <button type="button" onClick={() => setUrl(arrayMetaData.previous)}>Vorige</button>
                <button type="button" onClick={() => setUrl(arrayMetaData.next)}>Volgende</button>
                <ul>
                    {pokemonArray &&
                        pokemonArray.map((pokemon) => {
                            {
                                console.log(pokemon.name)
                            }
                            return <PokemonCard key={pokemon.name} name={pokemon.name}/>
                        })
                    }
                </ul>
            </>
        </>)
}

export default App;