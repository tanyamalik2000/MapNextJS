import { ScatterplotLayer } from '@deck.gl/layers';

const initialViewState = {
    longitude:  -73.982302,
    latitude: 40.760306,
    zoom: 12,
    pitch: 0,
    bearing: 0
};

const layerOptions = ({
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
    layerOptions,
    initialViewState,
    LayerClass: ScatterplotLayer,
    title: '2015 Street Tree Census - Tree Data',
    description: 'Street tree data from the TreesCount! 2015 Street Tree Census, conducted by volunteers and staff organized by NYC Parks & Recreation and partner organizations. Tree data collected includes tree species, diameter and perception of health. Accompanying blockface data is available indicating status of data collection and data release citywide.',
    source: 'NYC OpenData',
    sourceLink: 'https://data.cityofnewyork.us/Environment/2015-Street-Tree-Census-Tree-Data/pi5s-9p35'
};