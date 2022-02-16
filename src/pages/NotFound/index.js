import { Link } from 'react-router-dom';
import './notfound.css';

export default function NotFound() {
    return (
        <div className='error'>
            <h1>404</h1>
            <h4>Pagina não encontrada</h4>
            <Link to='/'>Veja todos os filmes</Link>
       </div>
    )
}