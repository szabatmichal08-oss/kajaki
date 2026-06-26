

import {  useState } from "react";
import AddNews from "./components/addNews";
import AddPhotos from "./components/addPhotos";
import News from './news'
import { auth } from "./firebase";



const Admin = () => {
  const [showNews, setShowNews] = useState(false)




    const [logged, setLogged] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          
          
        })
        .catch((error) => {
          // var errorCode = error.code;
          // var errorMessage = error.message;
        });
    }
    const logOut = (e)=>{
        e.preventDefault()
        auth.signOut().then(() => {
            alert('wylogowałeś się')
          }).catch((error) => {
            // An error happened.
          });
    }

    auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      setLogged(true)
    } else {
        setLogged(false)
      // No user is signed in.
    }
  });



    return ( 
        <div className="admin">
            <h2 className="pageTitle">Admin</h2>
            <p className="admin__isLogged">Zalogowany: {logged ? 'TAK' : 'NIE'}</p>
            <form  className="admin__form">
                <input value={email} onChange={(e)=> setEmail(e.target.value)} className="admin__login" type="email" placeholder="login" />
                <input value={password} onChange={(e)=> setPassword(e.target.value)} className="admin__password" type="password" placeholder="hasło" />
                <button onClick={(e)=>{login(e)}} type="submit" className="admin__button">Zaloguj</button>
                <button onClick={(e)=> logOut(e)}  className="admin__button">Wyloguj</button>
            </form>
            { logged&&  <div className="admin__console">

            <AddPhotos/>
            <AddNews/>
            <button onClick={()=>setShowNews(!showNews)}>Pokaż/ schowaj aktualności</button>
            {showNews && <News canDelete={true}/>}
            </div>}
        </div>
     );
}
 
export default Admin;