import { HexagonLayer } from "@deck.gl/aggregation-layers";

const initialViewState = {
    latitude:  34.0522,
    longitude: -118.2437,
    zoom: 11,
}

const layerOptions = ({
    id: 'hexagon-la-business-layer',
    data: 'https://data.lacity.org/resource/6rrh-rzua.json?$limit=150000&$WHERE=location_1 IS NOT NULL',
    getPosition: data => [parseFloat(data.location_1.longitude),parseFloat(data.location_1.latitude)],
    getFillColor: d => [51, 255, 60],
    getLineColor: d => [0, 0, 0],
    colorRange: [
        [236, 159, 5],
        [236, 100, 5]
    ],
    radius: 100,
    opacity: 0.8,
    coverage: 0.8,
})

export const ActiveBusinessLosAngelesLayer = {
    layerOptions,
    initialViewState,
    LayerClass:HexagonLayer
};