import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase";
import gsap from "gsap";

const GaleryMain = () => {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const unsub = db
            .collection('dates')
            .orderBy('date')
            .onSnapshot(snapshot => {
                setDates(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        dates: doc.data()
                    }))
                );
            });

        return () => unsub();
    }, []);

    useEffect(() => {
        const items = document.querySelectorAll('.galery__bgItem');

        if (!items || items.length === 0) return;

        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
            defaults: { ease: "power3.inOut" }
        });

        gsap.set(items, { autoAlpha: 0 });

        tl
            .set(items[0], { autoAlpha: 1 })
            .to(items[0], { autoAlpha: 1, duration: 2 })
            .to(items[1], { autoAlpha: 1, duration: 2 })
            .to(items[2], { autoAlpha: 1, duration: 2 })
            .to(items[3], { autoAlpha: 1, duration: 2 })
            .to(items[4], { autoAlpha: 1, duration: 2 })
            .to(items[5], { autoAlpha: 1, duration: 2 })
            .to(items[6], { autoAlpha: 1, duration: 2 })
            .to(items[7], { autoAlpha: 1, duration: 2 });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="galery__dates">
            {dates &&
                dates
                    .slice()
                    .reverse()
                    .map(({ id, dates }) => (
                        <Link
                            className="galery__date"
                            key={id}
                            to={`/galeria/${id}`}
                        >
                            {dates.date}
                        </Link>
                    ))}

            <div className="galery__bgItem galery__bgItem--1"></div>
            <div className="galery__bgItem galery__bgItem--2"></div>
            <div className="galery__bgItem galery__bgItem--3"></div>
            <div className="galery__bgItem galery__bgItem--4"></div>
            <div className="galery__bgItem galery__bgItem--5"></div>
            <div className="galery__bgItem galery__bgItem--6"></div>
            <div className="galery__bgItem galery__bgItem--7"></div>
            <div className="galery__bgItem galery__bgItem--8"></div>
            <div className="galery__bgItem galery__bgItem--9"></div>
        </div>
    );
};

export default GaleryMain;