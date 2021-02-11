import {React, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, LayersControl } from 'react-leaflet';
import markerYoureHerePng from "../LandingPage/map_markers/youre-here.png";
import yoga from "../LandingPage/map_markers/yoga.png";
import food from "../LandingPage/map_markers/food.png";
import literature from "../LandingPage/map_markers/literature.png";
import architecture from "../LandingPage/map_markers/architecture.png";
import music from "../LandingPage/map_markers/music.png";
import pottery from "../LandingPage/map_markers/pottery.png";
import random from "../LandingPage/map_markers/random.png";
import {Icon} from 'leaflet';




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
          position={position}
          icon={new Icon({iconUrl: markerYoureHerePng})}
          >
            <Popup>You are here</Popup>
          </Marker>
        )
      }
   
    return (
        <div class="container pr-2">

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
            
            <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                    />
            </LayersControl.BaseLayer>

        <LocationMarker />

        <Marker position={[48.177412, 16.366777]}
        icon={new Icon({iconUrl: yoga})}> 
          <Popup className="bbg-gray-100">
          on Click the Event Card pops up
          </Popup>
        </Marker>

        <Marker position={[48.216470, 16.399818]}
        icon={new Icon({iconUrl: literature})}>
          <Popup className="bbg-gray-100">
          on Click the Event Card pops up
          </Popup>
        </Marker>

        <Marker position={[48.196035, 16.341517]}
        icon={new Icon({iconUrl: food})}>
          <Popup className="bbg-gray-100">
          on Click the Event Card pops up
          </Popup>
        </Marker>

        <Marker position={[48.178375, 16.384094]}
        icon={new Icon({iconUrl: architecture})}>
          <Popup className="bbg-gray-100">
          on Click the Event Card pops up
          </Popup>
        </Marker>

        <Marker position={[48.185205, 16.408147]}
        icon={new Icon({iconUrl: music})}>
          <Popup className="bbg-gray-100">
          on Click the Event Card pops up
          </Popup>
        </Marker>

        <Marker position={[48.216470, 16.399818]}
        icon={new Icon({iconUrl: pottery})}>
          <Popup className="bbg-gray-100">
            on Click the Event Card pops up
          </Popup>
        </Marker>

        <Marker position={[48.208484, 16.438796]}
        icon={new Icon({iconUrl: random})}>
          <Popup className="bbg-gray-100">
          on Click the Event Card pops up
          </Popup>
        </Marker>

        </LayersControl>
        </MapContainer>

                    
            
        </div>
    )
}


export default LandingPage




