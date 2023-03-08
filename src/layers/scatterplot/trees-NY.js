import { ScatterplotLayer } from '@deck.gl/layers';

const initialViewState = {
    longitude:  -73.982302,
    latitude: 40.760306,
    zoom: 12,
    pitch: 0,
    bearing: 0
};

const layer = new ScatterplotLayer({
    id: 'scatterplot-layer-tree',
    data: 'https://data.cityofnewyork.us/resource/5rq2-4hqu.json?$limit=65000&&boroname=Manhattan',
    getPosition: d => d.the_geom.coordinates,
    getFillColor: d => [51, 255, 60],
    getLineColor: d => [0, 0, 0],
    opacity: 0.8,
    stroked: true,
    filled: true,
    radiusScale: 6,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1    
});

export const NewYorkTreesLayer = {
    layer,
    initialViewState
};