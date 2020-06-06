import React, { useState } from 'react';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import { LatLngTuple, Path } from 'leaflet';

interface IPolygonMapProps {
  highlightColor?: string,
  mapCenter?: LatLngTuple,
  mapData: any[],
  mapZoom?: number,
  tilesUrl: string
}

const PolygonMap : React.FC<IPolygonMapProps> = ({
  highlightColor,
  mapCenter,
  mapData,
  mapZoom,
  tilesUrl
} : IPolygonMapProps) => {
  const [label, setLabel] = useState<string>('');

  return (
    <section className="polygon-map">
      <h2 className={`polygon-map__label ${label.length > 0 ? 'has-value' : ''}`}>
        { label }
      </h2>
      <Map center={mapCenter} zoom={mapZoom}>
        <GeoJSON
          data={ mapData }
          style={() => {
            return {
              color: highlightColor,
              fillOpacity: .4,
              weight: 2
            }
          }}
          onEachFeature={(feature, layer: Path) => {
            layer.on('mouseover', () => {
              setLabel(feature.properties.name);
              return layer.setStyle({ fillOpacity: 1 })
            });
            layer.on('mouseout', () => {
              setLabel('');
              return layer.setStyle({ fillOpacity: .4 })
            });
          }}
        />
        <TileLayer url={ tilesUrl } />
      </Map>
    </section>
  );
}

PolygonMap.defaultProps = {
  highlightColor: '#000000',
  mapCenter: [51.505, -0.09],
  mapZoom: 8
}

export default PolygonMap;