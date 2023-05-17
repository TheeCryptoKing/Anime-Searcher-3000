import "../stylesheets/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  
  const links = ["Home", "Favorites", "Search", "Fanfics", "Details"]

  const anchors = links.map((link) => (
    <NavLink 
    className='nav-link'
      key={link} 
      to={"/" + link}>{link}
    </NavLink> 
  ));

  return (
    <div>
      <h1 className="page-title">Anime Searcher 3000</h1>
      <div className='nav-bar'>
        <nav>{anchors}</nav>
      </div>
    </div>
  )
}

export default Navbar;