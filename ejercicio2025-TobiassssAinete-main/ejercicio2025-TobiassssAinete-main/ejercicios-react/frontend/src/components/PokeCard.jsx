import { useState } from "react";

const PokeCard = ({ pokemonData }) => {
  const [isShiny, setIsShiny] = useState(false);

  return (
    <div key={pokemonData.id}>
      <img
        src={isShiny ? pokemonData.sprites.front_shiny : pokemonData.sprites.front_default}
        alt={pokemonData.name}
      />
      <h2>{pokemonData.name}</h2>
      <p>ID: {pokemonData.id}</p>
      <p>Peso: {pokemonData.weight}</p>
      <button onClick={() => setIsShiny(!isShiny)}>Shiny</button>
    </div>
  );
};

export default PokeCard;
