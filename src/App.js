import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './Components/PokemonListPokemonList';
import PokemonDetails from './Components/PokemonDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
