import React from 'react';
import './App.scss';

import { LONDON_BOROUGHS } from './_data';
import { PolygonMap } from './components';

const App = () => (
  <div className="App">
    <PolygonMap
      highlightColor="#D91F2D"
      mapCenter={[51.505, -0.09]}
      mapData={ LONDON_BOROUGHS }
      mapZoom={10}
      tilesUrl="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
    />
  </div>
);

export default App;
