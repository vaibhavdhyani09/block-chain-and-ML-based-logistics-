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
      // Add your image URL here
      frontImage: 'https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg',
      backText: 'Blockchain operates on a peer-to-peer network where each participant (node) maintains a copy of the ledger, ensuring no single point of failure or control'
    },
    {
      id: 'card2',
      frontTitle: 'Fully Transparent',
      frontDescription: '',
      // Add your image URL here
      frontImage: 'https://images.pexels.com/photos/774285/pexels-photo-774285.jpeg',
      backText: 'Offers a high degree of transparency by maintaining a publicly accessible, immutable ledger of transactions, which can be viewed by anyone with access to the network'
    },
    {
      id: 'card3',
      frontTitle: 'Customer Satisfaction',
      frontDescription: '',
      // Add your image URL here
      frontImage: 'https://images.pexels.com/photos/8931705/pexels-photo-8931705.jpeg',
      backText: 'It is a critical driver of business success, as satisfied customers are more likely to remain loyal, spend more, and recommend the business to others, directly impacting revenue and growth.'
    }
  ];

  return (
    <div className="flip-cards-container">
      {cardsData.map((card) => (
        <div key={card.id} className="flip-card">
          <div className={`flip-card-inner ${flippedCards[card.id] ? 'flipped' : ''}`}>
            {/* Front Side */}
            <div 
              className="flip-card-front"
              style={{
                backgroundImage: `url(${card.frontImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="card-overlay">
                <h2>{card.frontTitle}</h2>
                <p>{card.frontDescription}</p>
                <button 
                  className="flip-button"
                  onClick={() => handleFlip(card.id)}
                >
                  Know More
                </button>
              </div>
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
