import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
  state: {
    cod: number
    latitude: number
    longitude: number
    uf: string
    uf_cod: string
    zoom: number
  }
}

const Map = ({ state, places }: MapProps) => (
  <MapContainer
    center={[state.latitude, state.longitude]}
    zoom={state.zoom}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {places?.map(({ id, name, location }) => {
      const { latitude, longitude } = location
      return (
        <Marker
          key={`place-${id}`}
          position={[latitude, longitude]}
          title={name}
        />
      )
    })}
  </MapContainer>
)

export default Map
