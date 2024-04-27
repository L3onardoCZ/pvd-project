import React from 'react';

interface CardProps {
  heading: String;
  paragraph: String;
}

const Card: React.FC<CardProps> = ({ heading, paragraph }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
}

export default Card;