import React from 'react';

interface ICardProps {
  activeDataKey: string
}

const Card : React.FC<ICardProps> = ({
  activeDataKey
} : ICardProps) => {
  return (
    <div className="card">
      <h2 className="card__title">
        { activeDataKey }
      </h2>
    </div>
  );
}

export default Card;