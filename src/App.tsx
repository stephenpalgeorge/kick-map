import React, { useState } from 'react';
import './App.scss';

import { LONDON_BOROUGHS } from './_data';
import { Card, PolygonMap } from './components';
import { LatLngTuple } from 'leaflet';

const App = () => {
  const [mapCenter, setMapCenter] = useState<LatLngTuple>([51.505, -0.09]);
  const [mapZoom, setMapZoom] = useState<number>(10);
  const [dataKey, setDataKey] = useState<string>('');

  return (
    <div className="App">
      <PolygonMap
        dataKey={ dataKey }
        highlightColor="#D91F2D"
        mapCenter={ mapCenter }
        mapData={ LONDON_BOROUGHS }
        mapZoom={ mapZoom }
        setDataKey={ setDataKey }
        setMapCenter={ setMapCenter }
        setMapZoom={ setMapZoom }
        tilesUrl="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
      />
      <Card
        activeDataKey={ dataKey }
        setActiveDataKey={ setDataKey }
        setMapCenter={ setMapCenter }
        setMapZoom={ setMapZoom }
      />
    </div>
  );
}

export default App;
