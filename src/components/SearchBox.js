import Logo from '../img/pokemon.png'
import { Link } from 'react-router-dom';
export default function SearchBox(filter){
    return(
        <>
        <div className='app__header'>
        <img className='app__header__img' src={Logo} alt='Pokemon' />
        <Link className='app__header__about' to='/about'>Sobre</Link>
  
        <div className='app__header__search'>
        <input className='app__header__search__input'
        type='text'
        placeholder={filter.placeholder}
        onChange={filter.action }/>
        </div>       
        </div>
        </>
       
        
    )
}