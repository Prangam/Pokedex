import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PokemonLists from './pages/PokemonLists';
import PokemonDetail from './pages/PokemonDetail';
import Pocket from './pages/Pocket';
import NavbarComponent from './components/์Navbar';
import NavbarSecondary from './components/์NavberSecondary';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavbarComponent/>
        <NavbarSecondary/>
        <Routes>
          <Route path="/" element={<PokemonLists />} />
          <Route path="/PokemonDetail" element={<PokemonDetail/>} />
          <Route path="/Pocket" element={<Pocket />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
