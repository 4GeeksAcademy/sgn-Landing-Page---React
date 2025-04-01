
import React from "react";
import PropTypes from "prop-types";

// const Card = () => {
//     return (
//         <div className="card" style={{ width: "18rem" }}>
//             <img  className="card-img-top"  src="..." alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-title">Card title</h5>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="#" className="btn btn-primary">Go somewhere</a>
//                 </div>
//         </div>
//     );

// };

// export default Card;

const Card = (props) => {
    return (

        
            <div className="col-12 col-md-3">
                <div className="card">
                    <img className="card-img-top" src={props.imageUrl} alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
                        </div>
                </div>
            </div>
       

    );

};
Card.propTypes = {
    // PropTypes here
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    buttonUrl : PropTypes.string,
    buttonLabel :PropTypes.string,
};



export default Card;
