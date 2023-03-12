import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Map from 'react-map-gl'
import DeckGL from '@deck.gl/react';
import { NewYorkTreesLayer } from '../layers/scatterplot/trees-NY'
import { useState } from 'react';
import { ActiveBusinessLosAngelesLayer } from '../layers/hexagon/active-businesses-LA';
import { ScatterplotLayer } from '@deck.gl/layers';

const MAPBOX_TOKEN = 'pk.eyJ1IjoieXV5YWZ1amltb3RvIiwiYSI6ImNsZWdyZDA4NTA1ZGwzeG53Y2c2OGY0bjAifQ._mbKMYj_moCfX1GcJmxAJg'

const layers = {
  '1': NewYorkTreesLayer,
  '2': ActiveBusinessLosAngelesLayer
}

export default function Home() {
  const [layerID,setLayerId] = useState('2');
  const {LayerClass,layerOptions, initialViewState} = layers[layerID];

  const layer = new LayerClass(layerOptions);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div style={{zIndex:10000}}>
          <button onClick={()=>setLayerId('1')} style={{height:50, width:150, fontSize:16}}>New York</button>
          <button onClick={()=>setLayerId('2')} style={{height:50, width:150, fontSize:16}}>Los Angeles</button>
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