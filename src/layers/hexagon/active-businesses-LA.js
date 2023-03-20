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
    LayerClass:HexagonLayer,
    title: 'Listing of Active Businesses',
    description: 'Listing of all active businesses currently registered with the Office of Finance. An "active" business is defined as a registered business whose owner has not notified the Office of Finance of a cease of business operations. Update Interval: Monthly.',
    source: 'Los Angeles Open Data',
    sourceLink: 'https://data.lacity.org/Administration-Finance/Listing-of-Active-Businesses/6rrh-rzua'
};