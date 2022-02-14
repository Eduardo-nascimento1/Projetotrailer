import './header.css';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <header>
            <Link className="logo" to="/" > Filmes </Link>
            <Link className="favoritos"to="/" > Salvos </Link>

        </header>
    );
}

export default Header;
