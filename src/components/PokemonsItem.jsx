import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./pokemon.module.css"; 
import "./pokemon.module.css"; 

const PokemonsItem = ({ pokemon }) => {
  const [pokemonImage, SetPokemonImage] = useState("");

  const fetchPokemonImage = async () => {
    const { data } = await axios.get(`${pokemon.url}`);
    SetPokemonImage(data.sprites.front_default);
  };

  useEffect(() => {
    fetchPokemonImage();
  }, []);

  if (pokemonImage) {
    return (
      <div className={`card ${styles.card}`}>
        <div className="card-image">
          <img src={pokemonImage} alt={pokemon.name} />
        </div>
        <div className="card-content">
          <div className="card-title">{pokemon.name}</div>
        </div>
      </div>
    );
  }

  return null; 
};

export default PokemonsItem;
