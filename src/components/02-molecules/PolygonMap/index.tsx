import React, { useState, Dispatch, SetStateAction } from 'react';
import { GeoJSON, Map, TileLayer } from 'react-leaflet';
import { LatLngTuple, Path } from 'leaflet';

interface IPolygonMapProps {
  dataKey?: string,
  highlightColor?: string,
  mapCenter?: LatLngTuple,
  mapData: any[],
  mapZoom?: number,
  setDataKey: Dispatch<SetStateAction<string>>,
  setMapCenter: Dispatch<SetStateAction<LatLngTuple>>,
  setMapZoom: Dispatch<SetStateAction<number>>,
  tilesUrl: string
}

const PolygonMap : React.FC<IPolygonMapProps> = ({
  highlightColor,
  mapCenter,
  mapData,
  mapZoom,
  setDataKey,
  setMapCenter,
  setMapZoom,
  tilesUrl
} : IPolygonMapProps) => {
  const [label, setLabel] = useState<string>('');

  return (
    <section className="polygon-map">
      <h2 className={`polygon-map__label ${label.length > 0 ? 'has-value' : ''}`}>
        { label }
      </h2>
      <Map
        animate={ true }
        center={ mapCenter }
        zoom={ mapZoom }
        viewport={{ center: mapCenter, zoom: mapZoom }}
        scrollWheelZoom={ false }
      >
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
              return layer.setStyle({ fillOpacity: 1 });
            });
            layer.on('mouseout', () => {
              setLabel('');
              return layer.setStyle({ fillOpacity: .4 });
            });
            layer.on({
              click: () => {
                setDataKey(feature.properties.name);
                setMapCenter([51.205, -0.09]);
                setMapZoom(9);
              }
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
}

export default PolygonMap;