import React from 'react';
import { Link } from 'react-router-dom';

const PokemonLists: React.FC = () => {
  const pokemons = [
    { id: 1, name: 'Bulbasaur', image: 'bulbasaur.png', types: ['Grass', 'Poison'] },
    { id: 2, name: 'Ivysaur', image: 'ivysaur.png', types: ['Grass', 'Poison'] },
    { id: 3, name: 'Venusaur', image: 'venusaur.png', types: ['Grass', 'Poison'] },
    { id: 4, name: 'Charmander', image: 'charmander.png', types: ['Fire'] },
    { id: 5, name: 'Charmeleon', image: 'charmeleon.png', types: ['Fire'] },
    { id: 6, name: 'Charizard', image: 'charizard.png', types: ['Fire', 'Flying'] },
    { id: 7, name: 'Squirtle', image: 'squirtle.png', types: ['Water'] },
    { id: 8, name: 'Wartortle', image: 'wartortle.png', types: ['Water'] },
  ];

  return (
    <div className="container-fluid ">
      <div className="row mt-4 px-4">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={`path/to/images/${pokemon.image}`}
                className="card-img-top"
                alt={pokemon.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{pokemon.name}</h5>
                <div className="d-flex justify-content-center mb-2">
                  {pokemon.types.map((type, index) => (
                    <span key={index} className={`badge bg-${type.toLowerCase()} me-1`}>
                      {type}
                    </span>
                  ))}
                </div>
                <Link to={`/pokemon-detail/${pokemon.id}`} className="btn btn-dark">
                  Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonLists;
