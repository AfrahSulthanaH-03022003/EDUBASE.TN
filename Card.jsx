import React from 'react';
import './Card.css';

const Card = ({ image, title, description }) => {
    return (
        <div className="card">
            {image && <img src={image.src} alt={image.alt} className="card-image" />}
            {title && <h3 className="card-title">{title}</h3>}
            {description && <p className="card-description">{description}</p>}
        </div>
    );
};

export default Card;
