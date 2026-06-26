import React from "react";

const RegulaminItem = ({nr, content}) => {
    return ( 
            <div className="regulamin__item">
            <h3 className="regulamin__number">{nr}</h3>
            <p className="regulamin__text">{content}</p>
            </div>
     );
}
 
export default RegulaminItem;