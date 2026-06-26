import { db, storage } from "../firebase";

const AdminDelete = ({id, id2, collection, storageRef, imageName, photos}) => {



    const photoRef = storage.ref(`${storageRef}`).child(`${imageName}`);
    const handelDelete = ()=> {
        photoRef.delete().then(()=>{
            console.log('usunięto zdjęcie z bazy')
        }).catch((error)=>{
            alert(error)
        })
        if(photos){
            db.collection(collection).doc(id).collection('images').doc(id2).delete().then(()=>{
                console.log('usunięto link do zdjęcia');
            }).catch((error)=>{
                console.log(error);
            })
        }else{

            db.collection(collection).doc(id).delete().then(()=>{
                console.log('usunięto link do zdjęcia');
            }).catch((error)=>{
                console.log(error);
            })
        }
    }
    return ( 
            <button className="admin__delete" onClick={handelDelete}><i className="far fa-trash-alt"></i></button>
     );
}
 
export default AdminDelete;