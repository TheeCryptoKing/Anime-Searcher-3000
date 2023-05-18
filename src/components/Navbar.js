import { NavLink } from "react-router-dom";

import "../stylesheets/index.css"
import "../stylesheets/Navbar.css";


function Navbar() {
  const links = ["Home", "Favorites", "Fanfics", "Search"];

  const anchors = links.map((link) => (
    <NavLink className="nav-link" key={link} to={"/" + link}>
      {link}
    </NavLink>
  ));

  return (
    <header className="nav-header">
      <h1 className="page-title">Anime Searcher 3000</h1>
        <nav>{anchors}</nav>
    </header>
  );
}

export default Navbar;
