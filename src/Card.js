import React from "react"

const Card = (
    { ImageSrc="#",
    CardTitle="Default",
    CardText="Some quick example text to build on the card title and make upthe bulk of the card's content.",
    ButtonText="Go Somewhere"}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img
            src={ImageSrc}
            className="card-img-top"
            alt="..."
            height="240px"
            />
            <div className="card-body">
                <h5 className="card-title">{CardTitle}</h5>
                <p className="card-text"> {CardText}</p>
                <a href="#" className="btn btn-success">{ButtonText}</a>
            </div>
        </div>
    
    );
}

export default Card;