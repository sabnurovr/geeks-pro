import React, { useState, useEffect } from 'react';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(data => {
          setPokemonList(data.results);
        })
  }, []);

  return (
      <div>
        <h1>List</h1>
        <ul>
          {pokemonList.map((list, index) => (
              <li key={index}>{list.name} <img src={list.url}/></li>
          ))}
        </ul>
      </div>
  );
}

export default PokemonList;

