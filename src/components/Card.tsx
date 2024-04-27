import React from 'react';
import "./card.css";

interface CardProps {
  heading: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ heading, paragraph }) => {
  return (
    <div className="div">
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
}

export default Card;