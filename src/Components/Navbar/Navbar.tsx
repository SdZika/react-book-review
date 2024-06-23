import "./Navbar.styles.css"

export const Navbar = () => {
    return (
        <nav className="navStyles">
            <ul> 
                <li><a href="#">Browse Books</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Saved Review</a></li>
                <li><a href="#">Favorites</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}