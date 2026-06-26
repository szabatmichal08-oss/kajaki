import {ReactComponent as LeftSVG} from './images/leftSVG.svg'
import {ReactComponent as RightSVG} from './images/rightSVG.svg'
import Header from './Header';
import Home from './Home';
import './css/style.css'
import './css/small.css'
import './css/medium.css'
import './css/large.css'
import './css/xlarge.css'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import News from './news';
import NewsDetails from './NewsDetails';
import Galery from './Galery';
import Admin from './Admin';
import Contact from './Contact';
import Offer from './Offer';
import Regulamin from './Regulamin';
function App() {
  
  return (
    <div className="App">
    <LeftSVG className="backgroundSVG backgroundSVG--left"/>
    <RightSVG className="backgroundSVG backgroundSVG--right"/>
    <BrowserRouter>
    <Header  />
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route  exact path='/aktualnosci'><News c/></Route>
        <Route   path='/aktualnosci/:id'><NewsDetails/></Route>
        <Route  path='/galeria'><Galery /></Route> 
        <Route  path='/regulamin'><Regulamin /></Route> 
        <Route exact path='/admin'><Admin/></Route>
        <Route  path='/oferta'><Offer/></Route> 
        <Route exact path='/kontakt'><Contact/></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
