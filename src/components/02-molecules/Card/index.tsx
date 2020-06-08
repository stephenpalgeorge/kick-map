import React, { Dispatch, SetStateAction } from 'react';
import { LatLngTuple } from 'leaflet';

interface ICardProps {
  activeDataKey: string,
  setActiveDataKey: Dispatch<SetStateAction<string>>
  setMapCenter: Dispatch<SetStateAction<LatLngTuple>>
  setMapZoom: Dispatch<SetStateAction<number>>
}

const Card : React.FC<ICardProps> = ({
  activeDataKey,
  setActiveDataKey,
  setMapCenter,
  setMapZoom
} : ICardProps) => {
  const cardId : string = activeDataKey.toLowerCase().replace(/\s/g, '-');
  return (
    <div className={`card ${activeDataKey.length > 0 ? 'has-content' : ''}`} id={ cardId }>
      <h2 className="card__title">
        { activeDataKey }
      </h2>
      <button onClick={ () => {
        setActiveDataKey('');
        setMapCenter([51.505, -0.09]);
        setMapZoom(10);
      } }>
        close
      </button>
    </div>
  );
}

export default Card;