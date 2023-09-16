import React, { useState, useEffect } from "react";
import PokemonsItem from "./PokemonsItem";
import axios from "axios";

const PokemonsList = () => {
  const API = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemons, SetPokemons] = useState([]);
  const getPokemons = async () => {
    const { data } = await axios.get(API);
    // console.log(data.results);
    return SetPokemons(data.results);
  };
  useEffect(() => {
    getPokemons();
  }, []);

  if (pokemons.length === 20) {
    return (
      <div >
        {pokemons.map((pokemon, index) => (
          <PokemonsItem key={index} pokemon={pokemon} />
        ))}
      </div>
    );
  }
};

export default PokemonsList;
