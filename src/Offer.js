import OfferSVG from "./components/offerSVG";

import img1 from './images/do_cennika1.jpg'
import img2 from './images/do_cennika2.jpg'



const Offer = () => {
    return ( 
        <div className="offer">
            <h2 className="pageTitle">Oferta</h2>
            <div className="offer__upper">
                <p className="offer__left">Dostosujemy trasę do Państwa możliwości i doświadczenia tak, aby każdy był zadowolony.</p>
                <section className="offer__right">
                    <p className="offer__routesTitle">Nasze propozycje: </p>
                    <p className="offer__tip">Żeby sprawdzić długość najedź na informacje o trasie.</p>
                    <ul className="offer__routes">
                    <p className="offer__routesOptions">Najkrótsza trasa – dla Rodzin z małymi dziećmi:</p>
                        <ul>
                            <li className="offer__routesOption offer__routesOption--1">Harasiuki I most – Harasiuki II most – około 1,5 do 2 godzin</li>
                        </ul >
                        <p className="offer__routesOptions">Trasy średniej długości:</p>
                        <ul>
                            <li className="offer__routesOption offer__routesOption--2">Wólka Biska– Harasiuki II most – około 3 godziny</li>
                            <li className="offer__routesOption offer__routesOption--3">Harasiuki II most – Dąbrówka – około 3 godziny</li>
                        </ul >
                        <p className="offer__routesOptions">Trasy dla zapaleńców:</p>
                        <ul>
                            <li className="offer__routesOption offer__routesOption--4">Stare Króle – Harasiuki – 5 – 6 godzin</li>
                            <li className="offer__routesOption offer__routesOption--5">Stare Króle – Dąbrówka – 8 – 9 godzin</li>
                        </ul>
                    </ul>
                    <p className="offer__foot">ZAWSZE istnieje możliwość przedłużenia wybranej trasy lub umówienia się na inną. Długość spływu zależy do intensywności wiosłowania, wysokości stanu wody, długości przerw.</p>
                </section>
            </div>
                <OfferSVG/>
                <p className="offer__down">Zachęcamy również do dłuższych lub krótszych postojów na plażach i napotkanych wyspach. Przypominamy o konieczności zabierania po sobie śmieci. Rzeka jest naszym wspólnym dobrem. Dbajmy o nią!</p>
                <div className="offer__price">
                    <p className="offer__priceText">
                        Koszt wynajęcia kajaka dwuosobowego to <span>od 70 zł (w zależności od liczby kajaków i długości trasy)</span>
                        <br/>
                        Istnieje możliwość udostępnienia miejsca na ognisko lub grilla.
                        <br/>
                        Zaprzyjaźnione Panie ze „Stowarzyszenia Nasze Harasiuki” za niewielką opłatą mogą przygotować przepyszne potrawy z lokalnych produktów.
                    </p>
                        <div className="offer__imagesWrapper">
                            <img src={img1} className="offer__img" alt="koło gospodyń"/>
                            <img src={img2} className="offer__img" alt="kołog gospodyń 2 grill" />
                        </div>
                </div>
        </div>
     );
}
 
export default Offer;