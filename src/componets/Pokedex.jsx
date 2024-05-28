
import { useState, useEffect } from "react";

export default function Pokedex() {
  const [id, setId] = useState(1); // ID inicial do Pokémon
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const nextPokemon = () => {
    setId(id + 1);
  };

  const prevPokemon = () => {
    if (id > 1) {
      setId(id - 1);
    } else {
      console.warn("Não é possível ir abaixo do Pokémon #1");
    }
  };

  return (
    <div>
      {pokemon && (
        <div className="pokemon">
          <h1>Pokémon</h1>
          <p>{pokemon.name}</p>
          <p>Peso: {pokemon.weight}g</p>
          <img src={pokemon.sprites.front_default} alt="Pokémon" />
          <div className="buttons">
            <button onClick={prevPokemon} className="previous">
              Anterior
            </button>
            <button onClick={nextPokemon}>Próximo</button>
          </div>
        </div>
      )}
    </div>
  );
}
