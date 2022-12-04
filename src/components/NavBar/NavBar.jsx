import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgPokemon, CgSearchLoading } from "react-icons/cg";

import "./NavBar.css";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Lembrar de implementar a função de procurar
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search.toLowerCase()}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <CgPokemon id="pokebola" />
          <p>Pokédex</p>
        </Link>
      </h2>

      {/* Search Bar */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um pokemon"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <CgSearchLoading />
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
