import { useState } from 'react';
import { Link } from 'react-router-dom';
import { firstLetter } from '../Lib/utils';
import '../styles/info.scss'


export default function Info(info) {

  const [pokemons, setPokemons] = useState(info.location.state);

  let id = ('000' + pokemons.id).slice(-3);

  return (
    <div className="container">
    

      <div className="info">
       
      
        <div className="info__body">


          <div className="info__body__characteristics">
           
         
                
                <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id + ".png"} alt={pokemons.name} />
       
                <table>
              <tr className="info__body__characteristics__row" >
                
                  <p><strong>Nome: </strong>{firstLetter(pokemons.name)} <span>#{id}</span></p>
                
              </tr>
              <tr className="info__body__characteristics__row" >
                
                  <p><strong>Altura: </strong> {pokemons.height} m</p>
                
              </tr>
              <tr className="info__body__characteristics__row" >
                
                  <p><strong>Peso: </strong> {pokemons.weight} Kg</p>
                
              </tr>
            <div className="info__body__abilities">
            <th>
      
            <p><strong>Habilidades:</strong></p>

            {
              pokemons.abilities.map((item) => (
                <td>
                <p key={item.ability.name}>{firstLetter(item.ability.name)}</p>
                </td>
              ))
            }
            </th>
          </div>
          <div className="info__body__type">
            <p><strong>Tipo: </strong></p>
            {
              pokemons.types.map((item) => (
                <span key={item.type.name} className={"info__body__type__button info__body__type__button--" + item.type.name}>{firstLetter(item.type.name)}</span>
              ))
            }
          </div>
            </table>
            
          </div>

        
          <div className='info__body__data'>
          <div className="info__body__status">
          <table>
          <tr>
            <td>
            <p><strong>Estatísticas</strong></p>
            </td>
            {
              pokemons.stats.map((item) => (
                <td>
                <p><strong>{firstLetter(item.stat.name)}:</strong> {item.base_stat}</p>
                  </td>
              ))
            
            }
            </tr>
             </table>
          </div>
           
          <div className="info__body__moves">
            <tr>
            <th>
            <p><strong>Movimentos</strong></p>
           </th>
              {
                pokemons.moves.map((item) => (
                  <td>
                  <p>{
                  firstLetter(item.move.name)}
                  </p>
                  </td>
                ))
              }
            </tr>
          </div>

         </div>
        </div>

        <div className="info__footer">
          <Link className="info__footer__link" to="/">Voltar</Link>
        </div>
      </div>
    </div>

  );
}