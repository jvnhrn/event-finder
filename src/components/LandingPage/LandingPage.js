import {React, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';





function LandingPage() {


    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          },
        })
      
        return position === null ? null : (
          <Marker
          position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )
      }
   
    return (
        <div class="container">

            <div>
                <form className="content-center pl-8 ml-12 pt-6" onSubmit="event.preventDefault();" role="search">
                    <input className="bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none tracking-tighter" id="search" type="search" placeholder="find out what's popping" />  
                </form>
            </div>
    
        <MapContainer
            className="map"
            center={{ lat:  48.210033, lng: 16.363449}} 
            zoom={13}
             scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        <LocationMarker />

        <Marker position={[48.210033, 16.363449]}> color coordinated
          <Popup className="bbg-gray-100">
            An Event Card pops up
          </Popup>
        </Marker>

        <Marker position={[48.216470, 16.399818]}>
          <Popup className="bbg-gray-100">
            An Event Card pops up
          </Popup>
        </Marker>

        </MapContainer>

                    
            
        </div>
    )
}


export default LandingPage




