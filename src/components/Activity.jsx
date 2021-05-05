import React from 'react';
import './Activity.scss';

const Activity = ({activity, style}) => {

    return (
        <div className={"item " + style} key={activity.title}>
            <div className="image-container"> 
                <img src={activity.img}></img>
            </div>
            <div className="details-container">
                <h2>{activity.title}</h2>
                
                <img className="pin" src="assets/pin.png"></img>
                <h3>{activity.location}</h3>
            </div>
        </div>
    )
};

export default Activity;