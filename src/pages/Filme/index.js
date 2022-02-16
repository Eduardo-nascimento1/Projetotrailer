import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import './filme.info.css'

export default function Filme() {
    const { id } = useParams();
    const { history } = useHistory();
    const [Filme, setFilme] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadfilme() {
            const response = await api.get(`/r-api/?api=filmes/${id}`)

            if (response.data.length === 0) {
                history.replace('/');
                return;
            };

            setFilme(response.data)
            setLoading(false);

        }

        loadfilme();
    },
        [id, history])
    
    function salvarFilmes(){
        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos =JSON.parse(minhaLista) || []; 

        const hasfilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === Filme.id)

        if(hasfilme){
            alert('Você ja possui esse filme salvo');
            return;
        }
        filmesSalvos.push(Filme);
        localStorage.setItem('filmes',JSON.stringify(filmesSalvos));
        alert('filme salvo com sucesso');

    }
    
        if (loading) {
        return (
            <div className='filme-info'>
                <h1> carregando seu filme...</h1>
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{Filme.nome}</h1>
            <img src={Filme.foto} alt={Filme.nome} />
            <h3> sinopse</h3>
            {Filme.sinopse}

            <div className='botao'>
                <button onClick={salvarFilmes}>salvar</button>
                <button>
                    <a target="blank" href={`https://www.youtube.com/results?search_query=${Filme.nome}Filme`}>
                        filme
                    </a>
                </button>
            </div>
        </div>

    )
};