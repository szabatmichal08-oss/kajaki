import { useEffect, useState } from "react";
import { db } from "../firebase"; // Usunięto import 'storage'

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

const AddPhotos = () => {
    const [newdate, setNewDate]  = useState(day + "-" + month + "-" + year);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState(0);

    const handleChange = (e)=>{
        if(e.target.files){
            setImages(e.target.files)
            setProgress(0)
        }
    }

    useEffect(()=>{
        if(images){
            for (let index = 0; index < images.length; index++) {
                const image = images[index];
                console.log(image.name)
            }
        }
    },[images])

    let i = 1;

    useEffect(()=>{
        if(i === (images.length )){
            setProgress(0)
        }
    },[i, images.length])

    function add(image){
        return new Promise (async (resolve, reject)=>{
            var fileName = image.name;
            var idxDot = fileName.lastIndexOf(".") + 1;
            var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
            
            if(extFile!=="jpg" && extFile!=="jpeg" && extFile!=="png"){
                alert('To nie jest zdjęcie: ' + image.name);
                return resolve();
            }

            try {
                const formData = new FormData();
                formData.append('image', image);

                // ⚠️ TUTAJ WPISZ SWOJĄ DOMENĘ:
                const response = await fetch('https://kajakiempotanwi.pl/upload.php', {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();

                if (data.status === 'success') {
                    // Zapisujemy link z Hostinger w Firestore
                    await db.collection('photos').doc(`${newdate}`).collection('images').doc(image.name).set({
                        image: data.url, // URL z Twojego hostingu
                        name: image.name
                    });

                    await db.collection('photos').doc(`${newdate}`).set({
                        date: newdate
                    });

                    setProgress(i);
                    i++;
                    resolve();
                } else {
                    alert('Błąd przy pliku ' + image.name + ': ' + data.message);
                    resolve();
                }
            } catch (error) {
                console.error(error);
                alert('Błąd sieci przy pliku ' + image.name);
                resolve();
            }
        })
    }

    async function addPhoto (e){
        e.preventDefault()
        setLoading(true)
        
        for (let i = 0; i < images.length;) {
            const image = images[i];
            i++
            await add(image)
        }

        await db.collection('dates').doc(newdate).set({
            date: newdate
        })

        alert('Wysłałeś zdjęcia')
        setLoading(false)
        setImages('')
        setNewDate('')
    }

    return ( 
        <form className="admin__addThings" onSubmit={(e)=>addPhoto(e)}>
            <h3>Twoje zdjęcia</h3>
            <input type="date" required pattern="\d{2}-\d{2}-\d{4}" onChange={e=> {setNewDate(e.target.value)}} />
            <p className="user-profile__form-procentage">{progress}/{images.length}</p>
            <progress className="user-profile__form-progress" value={[progress]} max={images.length}/>
            <input required className="user-profile__form-input" type="file" multiple accept="image/*" onChange={handleChange}/>
            
            {!loading ?
                <button type="submit" className="primary-btn">Wyslij</button> : <div className="lds-ripple"><div></div><div></div></div>
            }
        </form>
     );
}
 
export default AddPhotos;