import { Link } from "react-router-dom"
import Addiction from '../img/addiction.jpg'
import Me from '../img/Photo.jpg.png'
import Logo from '../img/pokemon.png'


export default function About(){
    return(
       
            <div className='app__about'>
                 <div className='app__about__menu'>
                 <img className='app__about__logo' src={Logo} alt='Pokemon' />
                 <Link className='app__about__back' to='/'>Voltar</Link>

                </div>

            <div className='app__about__me'>
            <img className='app__about__img' src={Me} alt='me'/>
            <h1>Kauê Leite Santos</h1>
            </div>

            <div className='app__about__description'>
            <h1 className= 'app__about__topic'>Quem sou eu? :</h1>

            <p>Sou de São Paulo, tenho 17 anos, além de cursar a BlueEdtech, eu estou fazendo o último ano do ensino médio integrado ao
            curso de Desenvolvimento de Sistema na ETEC de Ilha Solteira.</p>
            
            <h2 className='app__about__topic'>Um pouco sobre mim: </h2>
        
            <p>Meu interesse na área de Desenvolvimento Web foi por causa da presença da tecnologia que tive durante a infância, desde então meu hobby foi de gostar de jogar videogames de computadores e consoles.
                Com isso eu me acostumei a ficar presente em tecnologias durante grandes períodos, e graças ao curso da Etec, meu interesse  na área de TI foi em programação web, principalmente no Front-End.
                   </p>
                   <img  className='app__about__picture' src={Addiction} alt='vicio'/>

                <img className='app__about__picture' src='https://ilha.news/wp-content/uploads/2020/11/vestibulinho-etec-ilha-solteira-ilha-news.jpg' alt='Etec de Ilha Solteira'/>
            </div>
            <h2 className='app__about__topic'>Links que você pode me seguir: </h2>

            <div>
            <h3 className='app__about__link'>Linkedin: <a href='https://www.linkedin.com/in/kau%C3%AA-leite-8bb83320b/'>https://www.linkedin.com/in/kau%C3%AA-leite-8bb83320b/</a></h3>
            <h3 className='app__about__link'>GitHub: <a href='https://github.com/Kaue-LS'>https://github.com/Kaue-LS</a></h3>
            </div>

        </div>
    )
}