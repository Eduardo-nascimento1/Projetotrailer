
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './favoritos.css';

export default function Favoritos(){
  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{

    const minhaLista = localStorage.getItem('filmes');
    setFilmes(JSON.parse(minhaLista) || []);

  }, []);

  function handledelete(id){
      let filtrofilmes = filmes.filter((item)=>{
          return(item.id!== id);
      })
      setFilmes(filtrofilmes)
      localStorage.setItem('filmes',JSON.stringify(filtrofilmes))
  }
  
  return(
    <div id="meus-filmes">
      <h1>Meus Filmes</h1>

      <ul>
        {filmes.map((item)=>{
          return(
            <li key={item.id}>
              <span>{item.nome}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={()=>handledelete(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
