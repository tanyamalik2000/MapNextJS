import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Map from 'react-map-gl'
import DeckGL from '@deck.gl/react';
import { NewYorkTreesLayer } from '../layers/scatterplot/trees-NY'
import { useState } from 'react';
import { ActiveBusinessLosAngelesLayer } from '../layers/hexagon/active-businesses-LA';

const MAPBOX_TOKEN = 'pk.eyJ1IjoieXV5YWZ1amltb3RvIiwiYSI6ImNsZWdyZDA4NTA1ZGwzeG53Y2c2OGY0bjAifQ._mbKMYj_moCfX1GcJmxAJg'

const layers = {
  '1': NewYorkTreesLayer,
  '2': ActiveBusinessLosAngelesLayer
}

export default function Home() {
  const [layerId, setLayerId] = useState('2');
  const { LayerClass, layerOptions, initialViewState, title, description, source, sourceLink } = layers[layerId];

  const layer = new LayerClass(layerOptions);

  return (
    <>
      <Head>
        <title>Big Data Explorer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <nav>
          <h1>Big Data Explorer</h1>
          <div className="buttons">
            <button onClick={() => setLayerId('1')} className={layerId === '1' && 'selected'}>New York</button>
            <button onClick={() => setLayerId('2')} className={layerId === '2' && 'selected'}>Los Angeles</button>
          </div>
          <div className="dummy" />
        </nav>
        <div className="source">
          <h2>{title}</h2>
          <p>{description}</p>
          <a target='_blank' href={sourceLink}>Source: {source}</a>
        </div>
        <DeckGL
          initialViewState={initialViewState}
          controller={true}
          layers={[layer]}
        >
          <Map
            style={{width: '100vw', height: '100vh'}}
            mapStyle="mapbox://sprites/mapbox/bright-v8"
            mapboxAccessToken={MAPBOX_TOKEN}
          />
        </DeckGL>
      </main>
    </>
  )
}