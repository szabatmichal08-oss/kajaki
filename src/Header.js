import { useState } from 'react';
import DeskNav from './components/DeskNav';
import NavBtn from './components/navBtn'
import Navigation from './components/Navigation';
import Weather from './components/weather';
import {ReactComponent as Logo} from './images/logo.svg'


const Header = () => {
    const [showNav, setShowNav] = useState(false)
    const showNavigation = ()=>{
        setShowNav(!showNav)
      }

    return ( 
        <header className="header">
            <Logo className="header__logo"/>
            <div className="header__titleWrapper">
            <h1 className="header__title"> Kajakiem po Tanwi i Ładzie</h1>
            <DeskNav/>
            </div>
            <Weather/>
            <NavBtn showNav={showNavigation} />
            {
        showNav &&
      <Navigation showNav= {showNavigation}/>
      }
        </header>
     );
}
 
export default Header;