import { NavLink } from "react-router-dom";
import Weather from "./weather";

const Navigation = ({showNav}) => {
    return ( 
        <nav className="nav">
            <NavLink onClick={()=>showNav()} className="nav__item" exact to="/">O nas</NavLink>
            <NavLink onClick={()=>showNav()} className="nav__item" to="/aktualnosci">Aktualności</NavLink>
            <NavLink onClick={()=>showNav()} className="nav__item"  to="/galeria">Galeria</NavLink>
            <NavLink onClick={()=>showNav()} className="nav__item"  to="/kontakt">Kontakt</NavLink>
            <NavLink onClick={()=>showNav()} className="nav__item"  to="/regulamin">Regulamin</NavLink>
            <NavLink onClick={()=>showNav()} className="nav__item"  to="/oferta">Oferta</NavLink>
            <Weather/>
            <a className="nav__item" href="https://www.facebook.com/Kajakiem-po-Tanwi-i-%C5%81adzie-113913240426054" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
        </nav>
     );
}
 
export default Navigation;