import "./Navbar.styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
    return (
        <nav className="navStyles">
            <h1>Book Club</h1>
            <input type="text" id="searchInput" placeholder="Search for books..." required />
            <button id="searchButton" className="searchButton"><FontAwesomeIcon icon={faSearch} /></button>
            <ul> 
                <li><a href="#">Home</a></li>
                <li><a href="#">Saved Review</a></li>
                <li><a href="#">Favorites</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}