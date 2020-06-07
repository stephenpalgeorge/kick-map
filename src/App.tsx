import React, { useState } from 'react';
import './App.scss';

import { LONDON_BOROUGHS } from './_data';
import { Card, PolygonMap } from './components';

const App = () => {
  const [dataKey, setDataKey] = useState<string>('');

  return (
    <div className="App">
      <PolygonMap
        highlightColor="#D91F2D"
        mapCenter={[51.505, -0.09]}
        mapData={ LONDON_BOROUGHS }
        mapZoom={10}
        setDataKey={ setDataKey }
        tilesUrl="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
      />
      <Card activeDataKey={dataKey} />
    </div>
  );
}

export default App;
