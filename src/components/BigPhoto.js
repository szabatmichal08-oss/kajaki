const BigPhoto = ({photo, showPhoto}) => {
    return ( <div className="galery__bigPhotoWrapper" onClick={showPhoto}>
        <img className="galery__bigPhoto" src={photo} alt="" />
    </div> );
}
 
export default BigPhoto;