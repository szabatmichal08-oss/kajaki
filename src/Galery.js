import { useEffect, useState } from 'react';
import BigPhoto from './components/BigPhoto';
import { db } from './firebase';
import PhotoDays from './components/photoDays';
import GaleryMain from './GaleryMain';
import { Route, Switch } from 'react-router-dom';

const Galery = ({ canDelete }) => {
    const [showPhoto, setShowPhoto] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [days, setDays] = useState(null);

    const clickHandler = (img) => {
        setPhoto(img);
        setShowPhoto(true);
    };

    // Firebase cleanup FIX
    useEffect(() => {
        const unsub = db
            .collection('photos')
            .orderBy('date')
            .onSnapshot(snapshot => {
                setDays(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        image: doc.data()
                    }))
                );
            });

        return () => unsub();
    }, []);

    // ESC FIX (bez spamowania listenerów)
    useEffect(() => {
        if (!showPhoto) return;

        const handler = (e) => {
            if (e.key === 'Escape') {
                setShowPhoto(false);
            }
        };

        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [showPhoto]);

    return (
        <div className="galery">
            <h2 className="pageTitle">Galeria</h2>

            <Switch>
                <Route exact path="/galeria">
                    <GaleryMain />
                </Route>

                <Route path="/galeria/:id">
                    <PhotoDays
                        clickHandler={clickHandler}
                        canDelete={canDelete}
                    />
                </Route>
            </Switch>

            {showPhoto && (
                <BigPhoto
                    photo={photo}
                    showPhoto={() => setShowPhoto(false)}
                />
            )}
        </div>
    );
};

export default Galery;