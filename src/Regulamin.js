import gsap from 'gsap';
import { useEffect } from "react";
import RegulaminItem from "./components/RegulaminItem";
import doc from './images/UMOWA.docx';

const content = [
    ["I","Wypożyczanie sprzętu odbywa się na zasadach odpłatności zgodnie z cennikiem."],
    ["II","Aby wypożyczyć sprzęt należy okazać dokument tożsamości ze zdjęciem. Nie obsługuje się osób niepełnoletnich, pod wpływem alkoholu lub innych środków odurzających."],
    ["III","Osoby nieletnie mogą płynąć tylko pod opieką osób pełnoletnich."],
    ["IV","Osoba wypożyczająca odpowiada za sprzęt i szkody."],
    ["V","Na jednostce musi być tyle kamizelek ile osób."],
    ["VI","Wypożyczalnia nie organizuje spływów."],
    ["VII","Odbiór i zwrot sprzętu w ustalonym miejscu."],
    ["VIII","Sprzęt musi być zwrócony w stanie umożliwiającym ponowne wypożyczenie."],
    ["IX","Za spóźnienia naliczana jest dodatkowa opłata."],
    ["X","Wypożyczalnia nie ponosi odpowiedzialności za wypadki."],
    ["XI","Naruszenie regulaminu skutkuje zakończeniem wypożyczenia."],
    ["XII","Zmiany terminu wymagają zgody wypożyczalni."],
    ["XIII","Wypożyczenie oznacza akceptację regulaminu."],
];

const Regulamin = () => {

    useEffect(() => {
        const numbers = document.querySelectorAll('.regulamin__number');
        const text = document.querySelectorAll('.regulamin__text');

        gsap.set([numbers, text], { autoAlpha: 0 });

        const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

        tl
            .addLabel('start')
            .fromTo(numbers, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.3, duration: 0.5 }, 'start')
            .fromTo(text, { y: -5, autoAlpha: 0 }, { autoAlpha: 1, y: 0, stagger: 0.3, duration: 0.5 }, 'start += 0.2');

    }, []);

    return (
        <div className="regulamin">
            <h2 className="pageTitle">Regulamin</h2>

            <div className="regulamin__content">
                {content.map(([nr, text], index) => (
                    <RegulaminItem
                        key={nr}
                        nr={nr}
                        content={text}
                    />
                ))}
            </div>

            <a download href={doc}>
                <button className="regulamin__umowa">UMOWA</button>
            </a>
        </div>
    );
}

export default Regulamin;