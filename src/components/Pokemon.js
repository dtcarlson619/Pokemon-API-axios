import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () =>
{
    const[pokemonState, setPokemonState] = useState([]);

    function listPokemon()
    {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
            .then(response => setPokemonState(response.data.results))
            .catch(console.log);
        }
    return (
        <div>
            <button onClick= {listPokemon}>Fetch Pokemon</button>
            <ol>
                {pokemonState.map((pokemon, i) =>
                (
                    <li key={i}>{pokemon.name}</li>
                ))}
            </ol>
        </div>
    );
}

export default Pokemon;