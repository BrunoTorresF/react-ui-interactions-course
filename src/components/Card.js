import React from 'react';
import LazyLoad from 'react-lazyload';
import './Card.css';

const Card = ({ card, showFront, showBack }) => (
  <div className={card.animation}>
    <div className="front" onClick={() => showBack(card)}>
      <img src="/juice.jpg" alt="vitamin juice" className="card-image" />
      <div className="container">
        <h3>
          Vitamin Juice <span className="price">$24.99</span>
        </h3>
        <p>
          Need a job on your vitamin while drinking? Tired of popping pills?
          Drink our vitamin enhanced juice.
        </p>
      </div>
    </div>
    <div className="container-back back" onClick={() => showFront(card)}>
      <h3>
        Vitamin Juice <span className="price">$24.99</span>
      </h3>
      <p>{card.description}</p>
    </div>
  </div>
);

export default Card;
