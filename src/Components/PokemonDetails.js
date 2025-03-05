import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchPokemon from './PokemonService';

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await fetchPokemon(name);
      setPokemon(data);
    };
    fetchPokemonData();
  }, [name]);

  if (!pokemon) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Tipo: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
      {/* Exibir outras informações do Pokémon aqui */}
    </div>
  );
}

export default PokemonDetails;