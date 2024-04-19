import React from 'react'
import '../styles/card2.css'
const Card2 = ({ icon, heading, description })  => {
  return (
    <div className="card">
    <div className="icon">{icon}</div>
    <div className="heading">{heading}</div>
    <div className="description">{description}</div>
  </div>
)
}

export default Card2