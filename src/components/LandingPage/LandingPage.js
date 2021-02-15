import { React, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, LayersControl } from 'react-leaflet';
import markerYoureHerePng from "../LandingPage/map_markers/youre-here.png";
import yoga from "../LandingPage/map_markers/yoga.png";
import food from "../LandingPage/map_markers/food.png";
import literature from "../LandingPage/map_markers/literature.png";
import architecture from "../LandingPage/map_markers/architecture.png";
import music from "../LandingPage/map_markers/music.png";
import pottery from "../LandingPage/map_markers/pottery.png";
import random from "../LandingPage/map_markers/random.png";
import { Icon } from 'leaflet';

import axios from 'axios';
import EventMarker from './EventMarker';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


function LandingPage() {

  const [position, setPosition] = useState(null)
  const [eventsData, setEventsData] = useState([]);
  const [searchText, setSearchText] = useState('');


  function LocationMarker() {

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
        icon={new Icon({ iconUrl: markerYoureHerePng })}
      >
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const allEventsData = await axios.get('http://localhost:7777/explore');
        setEventsData(allEventsData.data);
        /* console.log(allEventsData.data) */
      } catch (error) {
        console.error(error);
      }
    }
    getAllEvents()
  }, []);

  useEffect(() => {
    const getSearch = async () => {
      try {
        const searchData = await axios.get(`http://localhost:7777/search/?searchtext=${searchText}`);
        setEventsData(searchData.data);
        /* console.log(searchData.data) */
      } catch (error) {
        console.error(error);
      }
    }
    getSearch()
  }, [searchText]);

  return (
    <div class="container content-center mx-auto">

      <div>
        <p class="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl text-3xl font-bold text-gray-800 lg:mt-32 md:mt-24 mt-12 md:pb-0">eventi</p>
        <p class="2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-xl font-light text-gray-500 mt-2 md:pb-0 mb-6">the new way of finding and hosting events</p>
        <form className="content-center md:flex lg:pt-24 xl:mx-2 lg:mx-4 md:mx-6 md:p-4 mx-5 block p-4" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} role="search">
          <input className="bg-gray-100 rounded-2xl px-4 py-2 container focus:ring-purple-600 outline-none tracking-tighter" /* id="search" type="search" */ placeholder="Search" />
          <button className="hidden absolute inset-0 rounded-md" type="submit">Go</button>
        </form>
      </div>


      <MapContainer
        className="map"
        center={{ lat: 48.210033, lng: 16.363449 }}
        zoom={13}
        scrollWheelZoom={true}
      >

        <LayersControl position="topright">

          <LayersControl.BaseLayer checked name="Light">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Descriptive">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>


          <LayersControl.BaseLayer name="Light 02">
            <TileLayer
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="BlackAndWhite">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LocationMarker />

          {eventsData.map((event) => {
            return (
              <EventMarker
                event_id={event.event_id}
                event_category={event.event_category}
                event_title={event.event_title}
                event_description={event.event_description}
                event_location={event.event_location}
                event_country={event.event_country}
                event_city={event.event_city}
                event_postalcode={event.event_postalcode}
                event_address={event.event_address}
                event_gps_latitude={event.event_gps_latitude}
                event_gps_longitude={event.event_gps_longitude}
                event_host_phone={event.event_host_phone}
                event_host_email={event.event_host_email}
                event_price={event.event_price}
                event_start_date={event.event_start_date}
                event_end_date={event.event_end_date}
                open_spots={event.open_spots}
              />
            )
          }
          )
          }

        </LayersControl>
      </MapContainer>

    </div>
  )
}

export default LandingPage
