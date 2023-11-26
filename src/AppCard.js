// AppCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Person, Envelope } from 'react-bootstrap-icons';
import { FaHdd } from 'react-icons/fa';
import './App.css'; 

function AppCard({ title, content, isSquare, price, discountedPrice, users, storage, email, buttonColor, exploreLink}) {
  const cardStyle = isSquare ? 'square-card' : 'rectangular-card';

  return (
    <div className={`card ${cardStyle}`}>
      
      <h3 className='title'>{title}</h3>
      <p className='content'>{content}</p>
      <div className="card-content">
        <div className="price">
          <span className="cancel-mark">${price}</span>
          <span className="current-price">${discountedPrice}</span>
        </div>
        <button className={`get-started-btn ${buttonColor}`}>
          Get Started <span className="arrow">&#8594;</span>
        </button>
        <div className="divide-line"></div>

      
        <div className="additional-features">
          <div className="feature">
            <Person size={20} />
            <span>{users}</span>
          </div>
          <div className="feature">
            <FaHdd size={20} />
            <span>{storage}</span>
          </div>
          <div className="feature">
            <Envelope size={20} />
            <span>{email}</span>
          </div>
        </div>

        {!isSquare && (
          
          <div className="additional-features-rectangular"></div>
        )}

        <div className="what-you-get">
          <p></p>
        </div>
        <div className="explore-link">
          <a href={exploreLink} target="_blank" rel="noopener noreferrer">
            Explore Features
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppCard;