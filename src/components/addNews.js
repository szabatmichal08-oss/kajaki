import { useState } from "react";
import { db, storage } from "../firebase";


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
    
    
    
    const addPost = (e)=>{
    e.preventDefault()
    var fileName = image.name;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if(extFile==="jpg" || extFile==="jpeg" || extFile==="png"){

        const uploadTask = storage.ref(`news/${newdate}/Images/${image.name}`).put(image)
        uploadTask.on(
            "stage_changed",
            (snapshot) => {
                //progress func...
                setLoading(true)
            },
            (error) => {
                //Error function
                console.log(error);
                alert(error.message)
            },
            ()=> {
                //complete function

                storage
                .ref(`news/${newdate}/Images`)
                .child(`${image.name}`)
                .getDownloadURL()
                .then(url => {
                    db.collection('news').doc(newdate).set({
                        title: title,
                        content: content,
                        image: url,
                        name: image.name,
                        date: newdate,
                        link: link.slice(link.indexOf('galeria'), link.length)
                    });
                    // setProgress(0);
                    setImage(null);
                    setTitle('');
                    setContent('')
                    setLink('')
                    alert('wysłałeś post')
                    setLoading(false)
                })
            }
        )
    }else {
        alert('To nie jest zdjęcie')
    }
}









    return ( 
    
    <div className="addPost">

    <form action="" className="admin__addThings" onSubmit={(e)=>addPost(e)}>
        <input type="date" required   onChange={e=> {setNewDate(e.target.value)}} />
        <input required onChange={e =>setTitle(e.target.value)} value={title} className="admin__item" type="text" name="" id="" placeholder="Tytuł" />
        <textarea required onChange={e =>setContent(e.target.value)} value={content} className="admin__item" name="" id="" cols="30" rows="10" placeholder='treść'></textarea>
        <input required className="user-profile__form-input" type="file" accept="image/*" onChange={handleChange}/>
        <input type="text"  onChange={e =>setLink(e.target.value)} placeholder="link do galerii"/>
        {!loading ? <button type="submit"   >Dodaj Post</button> : <div className="lds-ripple"><div></div><div></div></div>}
    </form> 


        


    </div>
    
    );
}
 
export default AddNews;