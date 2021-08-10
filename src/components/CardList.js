import { useEffect, useState } from 'react';
import Card from '../components/Card';
import SearchBox from './SearchBox';
export default function CardList() {
// useState indica que a pagina vai sofrer alterações, e para usala-as e altera-ças é com o useeffect
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false)
  const [busca,setBusca] = useState([])
  // começar sendo falso caso ele nao carrega a tempo
  // Card list pega as infromações do api e usa o useeffetct para coloca-los no site
  // CONECTANDO A API
  const getData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      // o 100 no final indica a quatidade de pokemosn ele vai buscar
      // ele busca array de 100 A 100
      .then( res => res.json() )
      .then( (result) => {
        setPokemons(result.results)
        // results é o atrinbuto de um objeto, ele é um array, graças ao console log vimos que ele é um
        setBusca(result.results)
        // console.log(filter) vai mostrar os arrays de todos os pokemons, ja tendo dados para a pesquisa
        setLoading(false)
        // para ele noa inciar a busca, para ativa usa o useeffect
      })
      .catch((error) => {
        console.log(error)
        setLoading(true)
      })
    // diferente do fetch que é buscar, ele é capturar, que no caso é se der erro
    // com o link na insomnia entao pega o link da resposta com o nome de json
  }
  // Elemento que ve da funcao para filtrare e atualizar o setPokemons pq ele é q atualiza o state
  const filterPokemon= (evento) =>{
    // o filter recebe que nem o pokemon a lista results onde esta tdos os pokemonss
    const filtered = busca.filter(item=>item.name.includes(evento.target.value))
    // ele vai byuscar qual das letras coincide
    // se o valor no input colocado inclui sobre o que esta dentro da busca, ou seja, todos os pokemosn que tem o mesmo valor
    setPokemons(filtered)
    // Que evento ele recebe?
    // no javascirpt tem o filter que é o array, pode usar para alterar e especicar o tipo de valor que vc quer, pesquisa o filter
  }
  useEffect(() => {
    getData();
  }, []);
  // Assim sem o useeffect ele vai buscas infinitamente, usa o setLoading

  /* ou ao inves de usar fetch e catch
  async function getData() {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      const result = await res.json()
      setPokemons(result.results)
    } catch(error) {
      console.log(error)
    }
  }
 */

  return (

    <>
    <SearchBox className='app__search' placeholder='Buscar pokemons' action = {filterPokemon}></SearchBox>
      <div className='app__list'>
        {
          loading ? (
            <Card></Card>
            // o ? é um "if" so que deps do loading, é se loading é true, se for colocar o card vazio

          ) : (
            // : é o else que no caso se nao houver error
            pokemons.map((item) => (
              <Card key={item.name} info={item} />
              // esse info é para o card
            ))
          )
        }
      </div>
    </>
  )
  /*
  // <div>
  //   <div className="card-list">
  //     {
  //       // () = > {} esses metodods retorna uma expressao que é em java script
  //       // () => () retorna a expresaso que esta no react como o <Card> com JSX
  //       pokemons.map( (item) => (
  //         <Card info={item} key={item.id}></Card>
  //         // o item id é o id que estava no pokemon
  //       ))
  //     }
  //   </div>
  //   <button onClick={listPokemons}>Listar Pokemons</button>
  // </div>
)
*/
}