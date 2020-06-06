import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

const PolygonMap = () => {
  return (
    <section className="polygon-map">
      <Map center={[51.505, -0.09]} zoom={10}>
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
         />
      </Map>
    </section>
  );
}

export default PolygonMap;