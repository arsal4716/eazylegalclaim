import React from 'react';
import '../styles/card.css';

const Card = ({ icon, heading, description, backgroundColor, color }) => {
    return (
        <div className="card" style={{ backgroundColor: backgroundColor, color: color }}>
            <div className="icon">{icon}</div>
            <div className="content">
                <h2 className="heading">{heading}</h2>
                <div className="line"></div>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}

export default Card;
