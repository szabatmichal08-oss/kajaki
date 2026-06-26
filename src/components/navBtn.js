const NavBtn = ({showNav}) => {
    return ( 
        <button onClick={()=>showNav()} className="header__hamburger">
            <div className="header__hamBar header__hamBar--up"></div>
            <div className="header__hamBar header__hamBar--mid"></div>
            <div className="header__hamBar header__hamBar--down"></div>
        </button>
     );
}
 
export default NavBtn;