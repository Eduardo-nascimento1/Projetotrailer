import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '..//..//services/api';
import './Home.css';


export default function Home() {
    const [Filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function Loadfilmes() {
            const response = await api.get('/r-api/?api=filmes/');
            console.log(response.data);
            setFilmes(response.data);
        }

        Loadfilmes();
    }, [])

    return (
        <div className='container'>
            <div className='lista-filmes'>
                {Filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome}/>
                            <Link to="/">acessar </Link>
                        </article>

                    )
                })}
            </div>
        </div>
    );
}

