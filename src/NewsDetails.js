import { useParams } from "react-router-dom";
const NewsDetails = () => {
    
    const {id} = useParams()
    console.log(id)


    return ( 
        <div>
            {id&&
            <h2> id to : {id}</h2>}
        </div>

     );
}
 
export default NewsDetails;