import { useState } from "react";
import { db } from "../firebase"; // Usunięto import 'storage'

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

const AddNews = () => {
    const [newdate, setNewDate]  = useState(day + "-" + month + "-" + year); //dodaje dzisejszą datę
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [link, setLink] = useState('')
    const [image, setImage]= useState('')
    const [loading, setLoading] = useState(false)
    
    const handleChange = (e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
            console.log(image)
        }
    }
    
    const addPost = async (e) => {
        e.preventDefault()
        var fileName = image.name;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        
        if(extFile==="jpg" || extFile==="jpeg" || extFile==="png"){
            setLoading(true);

            try {
                // 1. Przygotowanie pliku do wysłania na Hostinger
                const formData = new FormData();
                formData.append('image', image);

                // 2. Wysyłanie na Twój serwer w Hostingerze
                // ⚠️ TUTAJ WPISZ SWOJĄ DOMENĘ:
                const response = await fetch('https://kajakiempotanwi.pl/upload.php', {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();

                if (data.status === 'success') {
                    // 3. Zapisywanie danych tekstowych i nowego linku z Hostinger do bazy Firestore
                    await db.collection('news').doc(newdate).set({
                        title: title,
                        content: content,
                        image: data.url, // URL z Twojego hostingu
                        name: image.name,
                        date: newdate,
                        link: link.slice(link.indexOf('galeria'), link.length)
                    });

                    setImage(null);
                    setTitle('');
                    setContent('')
                    setLink('')
                    alert('wysłałeś post')
                } else {
                    alert('Błąd serwera: ' + data.message);
                }
            } catch (error) {
                console.error(error);
                alert('Wystąpił błąd podczas wysyłania: ' + error.message);
            } finally {
                setLoading(false);
            }
        } else {
            alert('To nie jest zdjęcie')
        }
    }

    return ( 
        <div className="addPost">
            <form action="" className="admin__addThings" onSubmit={(e)=>addPost(e)}>
                <input type="date" required onChange={e=> {setNewDate(e.target.value)}} />
                <input required onChange={e =>setTitle(e.target.value)} value={title} className="admin__item" type="text" name="" id="" placeholder="Tytuł" />
                <textarea required onChange={e =>setContent(e.target.value)} value={content} className="admin__item" name="" id="" cols="30" rows="10" placeholder='treść'></textarea>
                <input required className="user-profile__form-input" type="file" accept="image/*" onChange={handleChange}/>
                <input type="text" onChange={e =>setLink(e.target.value)} placeholder="link do galerii"/>
                {!loading ? <button type="submit">Dodaj Post</button> : <div className="lds-ripple"><div></div><div></div></div>}
            </form> 
        </div>
    );
}
 
export default AddNews;