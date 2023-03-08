import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Map from 'react-map-gl'
import DeckGL from '@deck.gl/react';
import { NewYorkTreesLayer } from '../layers/scatterplot/trees-NY'

const MAPBOX_TOKEN = 'pk.eyJ1IjoieXV5YWZ1amltb3RvIiwiYSI6ImNsZWdyZDA4NTA1ZGwzeG53Y2c2OGY0bjAifQ._mbKMYj_moCfX1GcJmxAJg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DeckGL
          initialViewState={NewYorkTreesLayer.initialViewState}
          controller={true}
          layers={[NewYorkTreesLayer.layer]}
        >
        <Map
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
          }}
          style={{width: '100vw', height: '100vh'}}
          mapStyle="mapbox://sprites/mapbox/bright-v8"
          mapboxAccessToken={MAPBOX_TOKEN}
        />
        </DeckGL>
      </main>
    </>
  )
}