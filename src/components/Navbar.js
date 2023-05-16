import "../stylesheets/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  
  const links = ["Home", "Fanfics", "Favorites"]

  const anchors = links.map((link) => (
    <NavLink to={"/" + link}>{link}</NavLink> 
  ));

  

  return (
    <div className="Nav-header">
      <h1 className="page-title">Anime Searcher 3000</h1>
      <nav>{anchors}</nav>
    </div>
  )
}

export default Navbar;