import React from 'react';
import { Link } from 'react-router-dom';

const Pocket: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact Page</h1>
      <nav className="text-center mt-4">
        <Link to="/" className="btn btn-primary mx-2">Home</Link>
        <Link to="/PokemonDetail" className="btn btn-secondary mx-2">About</Link>
      </nav>
    </div>
  );
};

export default Pocket;
