
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchPokemon from '../Services/PokemonService';

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await fetchPokemon();
      setPokemon(data.results);
      setIsLoading(false);
    };
    fetchPokemonData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {pokemon.map((pokemon) => (
            <li key={pokemon.name}>
              <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PokemonList;