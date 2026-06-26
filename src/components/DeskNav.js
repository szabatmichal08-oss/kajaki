import { NavLink } from "react-router-dom";


const DeskNav = () => {
    return ( 
        <nav className="deskNav">
            <NavLink className="deskNav__item" exact to="/">O nas</NavLink>
            <NavLink className="deskNav__item"  to="/aktualnosci">Aktualności</NavLink>
            <NavLink className="deskNav__item"  to="/galeria">Galeria</NavLink>
            <NavLink className="deskNav__item"  to="/kontakt">Kontakt</NavLink>
            <NavLink className="deskNav__item"  to="/regulamin">Regulamin</NavLink>
            <NavLink className="deskNav__item"  to="/oferta">Oferta</NavLink>
            <a className="deskNav__item" href="https://www.facebook.com/Kajakiem-po-Tanwi-i-%C5%81adzie-113913240426054" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
        </nav>
    );
}
 
export default DeskNav;