import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import PokeCard from "../../components/PokeCard/PokeCard";

import "./Search.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [pokemons, setPokemons] = useState([]);
  const query = searchParams.get("q");

  useEffect(() => {
    let searchWithQueryURL = `https://pokeapi.co/api/v2/pokemon/${query}`;

    getSearchedPokemons(searchWithQueryURL);
    setPokemons([]);
  }, [query]);

  const getSearchedPokemons = (url) => {
    axios
      .get(url)
      .then((res) => setPokemons(res.data))
      .catch((err) => console.log(err));
  };

  const id = pokemons.id;

  return (
    <div className="container">
      <div className="poke-container">
        {pokemons.length === 0 && <p id="notfound">Pokemon não encontrado!</p>}
        {pokemons.length !== 0 && (
          <PokeCard
            name={pokemons.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
            id={pokemons.order}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
