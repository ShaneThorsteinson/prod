import { icon } from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import Head from 'next/head'

export default function Map () {
  if (!process.browser) {
    return null
  }

  const pinIcon = icon({
    iconUrl: '/assets/images/pin.svg',
    iconSize: [51, 57],
    iconAnchor: [51, 57]
  })

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossOrigin="" />
      </Head>
      <MapContainer style={{ width: '100%', height: 460 }} center={[39.95, -75.16]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <Marker icon={pinIcon} position={[39.95, -75.16]} />
      </MapContainer>
    </>
  )
}
