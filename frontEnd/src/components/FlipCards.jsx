import React, { useState } from 'react';
import './FlipCards.css';

const FlipCards = () => {
  const [flippedCards, setFlippedCards] = useState({
    card1: false,
    card2: false,
    card3: false
  });

  const handleFlip = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const cardsData = [
    {
      id: 'card1',
      frontTitle: 'Blockchain Integrated',
      frontDescription: '',
      backText: 'This is the detailed information on the back of card 1. You can add any content here that you want to reveal when the card flips.'
    },
    {
      id: 'card2',
      frontTitle: 'Fully Transparent',
      frontDescription: '',
      backText: 'This is the detailed information on the back of card 2. You can add any content here that you want to reveal when the card flips.'
    },
    {
      id: 'card3',
      frontTitle: 'Customer Satisfaction',
      frontDescription: '',
      backText: 'This is the detailed information on the back of card 3. You can add any content here that you want to reveal when the card flips.'
    }
  ];

  return (
    <div className="flip-cards-container">
      {cardsData.map((card) => (
        <div key={card.id} className="flip-card">
          <div className={`flip-card-inner ${flippedCards[card.id] ? 'flipped' : ''}`}>
            {/* Front Side */}
            <div className="flip-card-front">
              <h2>{card.frontTitle}</h2>
              <p>{card.frontDescription}</p>
              <button 
                className="flip-button"
                onClick={() => handleFlip(card.id)}
              >
                Know More
              </button>
            </div>

            {/* Back Side */}
            <div className="flip-card-back">
              <p>{card.backText}</p>
              <button 
                className="flip-button"
                onClick={() => handleFlip(card.id)}
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCards;
