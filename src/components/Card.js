import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firstLetter} from '../Lib/utils';

 export default function Card(info) {
  console.log(info)
  const [pokemon, setPokemon] = useState(info.info);
  const [loading, setLoading] = useState(true);

// Abaixo vai ficar azul e ele da dica para usar o usecallback
// antes ele chamava um vez cada, agora com o callback ele vai fazer tudo de uma vez, criando assim uma resposabilidade que a maqiuiva vai fazer
  const getData = useCallback(() =>{
    fetch(info.info.url)
    .then(res => res.json())
    .then ((result)=>{
      setPokemon(result)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
      setLoading(true)
    })
    // pega a imagem dos pokemons
  },[info.info.url]);


  useEffect(()=>{
  getData()
  },[getData])

  let id = ('000'+ pokemon.id).slice(-3);
  // -3 é de direita pra esquerda
  // slice para fatia a string quando os numeros aumentam
// arrumar o id para que ele fica conforme a espera e de uma forma igual ao quantidade pedida: 001,002 ex

  // useEffect( () => {
  //   setPokemon(info.info);
  // }, [info.info]);
  // // Indica que o useeffect depende do info.info, ele para de ficar laranja.Isso porque eles podem depender de mais de uma informação, por isso deve informar


  return(
  


    <div className="app__list__card">   
    <Link className="app__list__card__link" to={{
      pathname:'/sobre/'+ pokemon.id,
      state:pokemon
    }} >
       
      <img className='app__list__card__img' src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+ id + '.png'} alt={pokemon.name}></img>
      <div className='app__list__card__info'>
      <p className='app__list__card__id'>{'#'+id}</p>
      <h2 className='app__list__card__name'>{firstLetter(pokemon.name)}</h2>
      <div className='app__list__card__category'>
        {
          // essas chaves sao loops
          // se estiver carregando insira o span
          // O loading imperde que mostra algo nao foi carregado, esta vazio
          
            loading ? <span className="app__list__card__button"></span> : (
              pokemon.types.map( (item) => (
                <span key={item.type.name} className={'app__list__card__button app__list__card__button--'+item.type.name}>{firstLetter(item.type.name)}</span>
              ))
            )

           
          }
      </div>
      </div>
      
    </Link>
    </div>
  )
 }