
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify';

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
      
      setFilmes(filtrofilmes);
      localStorage.setItem('filmes',JSON.stringify(filtrofilmes));
      toast.success("excluido com sucesso")
  }
  
  return(
    <div id="meus-filmes">
      <h1>Meus Filmes</h1>
        {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

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
