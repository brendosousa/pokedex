import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const fetchPokemon = async (name) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchPokemon;