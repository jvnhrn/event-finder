import { React, useState, useEffect } from "react";
import {
  MapContainer,
  ControlledLayer,
  useMap,
  MapConsumer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMapEvents,
  LayersControl,
} from "react-leaflet";
import markerYoureHerePng from "../LandingPage/map_markers/youre-here.png";
import markerYoureHereBW from "../LandingPage/map_markers/youre-hereBW.png";
import { Icon } from "leaflet";
import opencage from "opencage-api-client";

import axios from "axios";
import ContainerDimensions from "react-container-dimensions";
import EventMarker from "./EventMarker";

function LandingPage() {
  const [searchAddress, setSearchAddress] = useState("");
  const [newAdddressGPSCoordinates, setNewAdddressGPSCoordinates] = useState({
    lat: 48.210033,
    lng: 16.363449,
  });
  const [listAddresses, setListAddresses] = useState([]);
  const [showAddressButton, setShowAddressButton] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  const [searchText, setSearchText] = useState("");
  const [eventsData, setEventsData] = useState([]);

  const [position, setPosition] = useState(null);

  //Collect all data all events
  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const allEventsData = await axios.get("http://localhost:7777/explore");
        setEventsData(allEventsData.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAllEvents();
  }, []);

  // Address search and map positioning
  useEffect(() => {
    const getCoordinates = async () => {
      try {
        const gpsCoordinates = await opencage.geocode({
          q: searchAddress,
          key: "dbcf492b8db545538b8b5d9acbeb0313",
        });
        console.log(gpsCoordinates.results);
        setListAddresses(gpsCoordinates.results);
      } catch (error) {
        console.error(error);
      }
    };
    getCoordinates();
  }, [searchAddress]);

  function NewAdress() {
    const map = useMap();
    map.setView(newAdddressGPSCoordinates, map.getZoom(20));
    return (
      <Marker
        position={newAdddressGPSCoordinates}
        icon={new Icon({ iconUrl: markerYoureHereBW })}
      >
        <Popup>{searchAddress}</Popup>
      </Marker>
    );
  }

  useEffect(() => {
    if (!!searchAddress.length) {
      setShowAddressButton(true);
    } else {
      setShowAddressButton(false);
    }
  }, [searchAddress]);

  // Search for an event
  useEffect(() => {
    const getEventsSearch = async () => {
      try {
        const searchTextData = await axios.get(
          `http://localhost:7777/getsearchData/?searchtext=${searchText}`
        );
        console.log(searchTextData.data);
        setEventsData(searchTextData.data);

        /* } */
      } catch (error) {
        console.error(error);
      }
    };
    getEventsSearch();
  }, [searchText]);

  // Locate current position
  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker
        position={position}
        icon={new Icon({ iconUrl: markerYoureHerePng })}
      >
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <div class="container mx-auto">
      <div class="px-12">
        <p class="text-6xl font-bold text-gray-800 mt-20">eventi</p>
        <p class="text-xl font-light mt-2 md:pb-0 mb-6 bg-gradient-to-r from-purple-900 via-pink-400 to-red-600 bg-clip-text text-transparent">
          the new way of finding and hosting events
        </p>
      </div>

      <div className="relative z-50">
        <div>
          <form className="pt-4 content-center flex px-12 items-center">
            <input
              value={searchAddress}
              onChange={(e) => {
                setSearchAddress(e.target.value);
              }}
              className="absolute bg-gray-100 rounded-2xl px-4 py-2 container ml-auto focus:ring-purple-600 outline-none tracking-tighter"
              placeholder="address, city, country"
              type="text"
            />
            <button
              className="hidden absolute inset-0 rounded-md"
              type="submit"
            >
              Go
            </button>
          </form>

          <div class="origin-top-right absolute mt-6 ml-12 w-auto rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {listAddresses.map((address) => {
                return (
                  <form>
                    <button
                      onClick={() => {
                        setSearchAddress(address.formatted);
                        setNewAdddressGPSCoordinates(address.geometry);
                        setShowAddressButton(false);
                        setSelectedAddress(address.formatted);
                      }}
                      type="button"
                      className={
                        showAddressButton &&
                        !!searchAddress.length &&
                        selectedAddress != searchAddress
                          ? "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          : "hidden block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      }
                    >
                      {address.formatted}
                    </button>
                  </form>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <form
            className="content-center px-12 pt-6"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></form>
        </div>
      </div>

      <div id="mapid" className="relative z-0">
        <div className="container">
          <MapContainer
            className="map h-480"
            center={[48.210033, 16.363449]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <LayersControl position="topright">
              <LayersControl.BaseLayer checked name="Light">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name="Descriptive">
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>

              <NewAdress />
              <LocationMarker />

              {eventsData.map((event) => {
                return (
                  <EventMarker
                    key={event.event_id}
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
                );
              })}
            </LayersControl>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
