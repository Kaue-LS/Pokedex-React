import {BrowserRouter,Switch,Route} from 'react-router-dom';
import CardList from"./components/CardList";
import "./styles/main.scss";
import Info from "./components/Info"
import About from './components/About';
export default function App(){
// se inspecionar scss ele colocara automaticamnete no header da pagina
  return(
    <>
    <div classname='app'>
      <BrowserRouter>
      <Switch>
        <Route path='/'exact={true} component={CardList}/>
        <Route path='/sobre/:id' component={Info}/>
        <Route path='/about' component={About}></Route>
      </Switch>
      </BrowserRouter>
    </div>

    </>
  )
}