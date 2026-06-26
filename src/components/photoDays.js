import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase";
import AdminDelete from "./AdminDelete";

const PhotoDays = ({ clickHandler }) => {
    const { id } = useParams();
    const [canDelete, setCanDelete] = useState(false);
    // Zmieniono początkowy stan na null dla spójności
    const [images, setImages] = useState(null); 
    
    // 1. Pobieranie zdjęć z Firebase z prawidłowym odsubskrybowaniem
    useEffect(() => {
        setImages(null); // Resetuj zdjęcia przy zmianie ID (ładowanie spinnera)

        const unsubscribePhotos = db
            .collection('photos')
            .doc(id)
            .collection('images')
            .onSnapshot(snapshot => {
                setImages(
                    snapshot.docs.map(doc => ({
                        id2: doc.id,
                        image: doc.data()
                    }))
                );
            }, error => {
                console.error("Błąd pobierania zdjęć z Firebase:", error);
            });

        // TO NAPRAWIA WYCIEK: zwracamy funkcję od Firebase, a nie setImages
        return () => unsubscribePhotos(); 
    }, [id]);

    // 2. Bezpieczne sprawdzenie autoryzacji wewnątrz useEffect
    useEffect(() => {
        const unsubscribeAuth = auth.onAuthStateChanged(user => {
            if (user) {
                setCanDelete(true);
            } else {
                setCanDelete(false);
            }
        });

        return () => unsubscribeAuth();
    }, []);

    return ( 
        <div key={id}>
            <p className="galery__itemsTitle">{id}</p>
            <div className="galery__items">
                {images ? (
                    images.length > 0 ? (
                        images.map(({ id2, image }) => (
                            canDelete ? (
                                <div key={id2} className="admin__galeryItem">
                                    <img 
                                        loading="lazy"  
                                        onClick={() => clickHandler(image.image)} 
                                        className="galery__item" 
                                        src={image.image} 
                                        alt="" 
                                    /> 
                                    <AdminDelete 
                                        storageRef={`${id}/Images/`} 
                                        collection='photos' 
                                        imageName={image.name} 
                                        id={id} 
                                        id2={id2} 
                                        photos="true"
                                    />
                                </div>
                            ) : (
                                <img 
                                    loading="lazy"  
                                    onClick={() => clickHandler(image.image)} 
                                    key={id2}  
                                    className="galery__item" 
                                    src={image.image} 
                                    alt="" 
                                /> 
                            )
                        ))
                    ) : (
                        <p className="galery__noPhotos">Brak zdjęć w tym folderze.</p>
                    )
                ) : (
                    // Spinner kręci się tylko, gdy dane są "null" (czyli się ładują)
                    <div className="lds-ripple"><div></div><div></div></div>
                )}
            </div>
        </div>
    );
}

export default PhotoDays;