import { useEffect, useState } from "react";
import gsap from 'gsap';
import AdminDelete from "./AdminDelete";
import { Link } from "react-router-dom";

const Card = ({post, id, canDelete}) => {

    const [content, setContent] = useState((post.content.slice(0, 150) + '...'))
    // if(content){
    //     setNewContent(content.slice(0, 150) + '...')
    // }
    useEffect(()=>{
        const cards = document.querySelectorAll('.news__cardWrapper')
        gsap.set([ cards], {autoAlpha:0})
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});
        tl.fromTo(cards ,{x: 500, autoAlpha: 0,}, {autoAlpha: 1, x: 0, stagger:.4,  duration: .5})


    },[])
    



    return ( 
        post ? <div className="news__cardWrapper" >
            <div className='news__cardUp'>
                <p>{id}</p>
                <img className="news__image" src={post.image} alt={post.title + ' image'} />
            </div>
            <div className='news__cardDown'>
                <h3 className="news__title">{post.title}</h3>
                <p className="news__content">{content}</p>
                <div className="news__buttons">
                   {post.link && <Link to={post.link}><button className="news__button">Zdjęcia</button></Link>}
                   
                    <button className="news__button" onClick={() =>content === post.content ? setContent(post.content.slice(0, 150) + '...') : setContent(post.content)}>Więcej</button>
                {canDelete && <AdminDelete id={id} collection='news'  imageName={post.name} storageRef={`news/${id}/Images/`} />}

                </div>
            </div>
        </div> : <div className="lds-ripple"><div></div><div></div></div>
    );
}

export default Card;