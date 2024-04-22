// card.jsx
import React from 'react';
import '../styles/card.css'; 

const Card = ({ icon, heading, description }) => {
  return (
    <div className="card-container">
      <i className="fas fa-heartbeat heartbeat-icon"></i> 
        <div className="content">
        <h3 className="heading">{heading}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
