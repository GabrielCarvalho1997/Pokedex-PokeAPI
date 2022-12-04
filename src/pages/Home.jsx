import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";
import "../components/PokeCard/PokeCard.css";

import PokeCard from "../components/PokeCard/PokeCard";
import axios from "axios";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=60")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  };

  let id = 0;

  console.log(pokemons);
  return (
    <div className="container">
      {pokemons.length !== 0 &&
        pokemons.map((pokemon) => {
          id = id + 1;
          return (
            <div className="card">
              <Link to={`/search?q=${pokemon.name}`}>
                <PokeCard
                  name={pokemon.name}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
                  key={id}
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
