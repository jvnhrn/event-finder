import { React, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, LayersControl } from 'react-leaflet';

import yoga from "./map_markers/yoga.png";
import food from "./map_markers/food.png";
import literature from "./map_markers/literature.png";
import architecture from "./map_markers/architecture.png";
import music from "./map_markers/music.png";
import pottery from "./map_markers/pottery.png";
import random from "./map_markers/random.png";

import yogaBW from "./map_markers/yogaBW.png";
import foodBW from "./map_markers/foodBW.png";
import literatureBW from "./map_markers/literatureBW.png";
import architectureBW from "./map_markers/architectureBW.png";
import musicBW from "./map_markers/musicBW.png";
import potteryBW from "./map_markers/potteryBW.png";
import randomBW from "./map_markers/randomBW.png";

import markersShadow from "./map_markers/markers-shadow.png";
import { Icon } from 'leaflet';

function EventMarker(props) {

    const [showActiveIcon, setShowActiveIcon] = useState(true)
    const [test, setTest] = useState(true)
    const [categoryIcon, setCategoryIcon] = useState(random);

    useEffect(() => {
        console.log(categoryIcon)
        console.log(showActiveIcon)

        if (showActiveIcon) {
            switch (props.event_category) {
                case "Yoga":
                    setCategoryIcon(yoga);
                    break;
                case 'Food':
                    setCategoryIcon(food);
                    break;
                case 'Literature':
                    setCategoryIcon(literature);
                    break;
                case 'Architecture':
                    setCategoryIcon(architecture);
                    break;
                case 'Music':
                    setCategoryIcon(music);
                    break;
                case 'Pottery':
                    setCategoryIcon(pottery);
                    break;
                case 'Random':
                    setCategoryIcon(random);
                    break;
                default:
                    setCategoryIcon(random);
            }
        } else {
            switch (props.event_category) {
                case "Yoga":
                    setCategoryIcon(yogaBW);
                    break;
                case 'Food':
                    setCategoryIcon(foodBW);
                    break;
                case 'Literature':
                    setCategoryIcon(literatureBW);
                    break;
                case 'Architecture':
                    setCategoryIcon(architectureBW);
                    break;
                case 'Music':
                    setCategoryIcon(musicBW);
                    break;
                case 'Pottery':
                    setCategoryIcon(potteryBW);
                    break;
                case 'Random':
                    setCategoryIcon(randomBW);
                    break;
                default:
                    setCategoryIcon(randomBW);
            }
        }
    }, [showActiveIcon])

    const newIcon = new Icon({
        iconUrl: categoryIcon,
        shadowUrl: markersShadow,
        iconSize: [31, 40],
        shadowSize: [35, 16],
        shadowAnchor: [5, -13]
    })

    const [onOpenCloseOpacity, setOnOpenOpacity] = useState('0.75')

    return (
        <div className="opacity-50">
            <Marker
                position={[Number(props.event_gps_latitude), Number(props.event_gps_longitude)]}
                icon={newIcon}
                opacity={onOpenCloseOpacity}
                className="bg-gray-400 opacity-50"
                style={{ color: 'red' }}
            >
                <Popup className="bbg-gray-100 opacity-50"
                    onOpen={() => {
                        setOnOpenOpacity('0.75')
                        setShowActiveIcon(false)
                        setCategoryIcon(markersShadow)
                    }}
                    onClose={() => {
                        setOnOpenOpacity('1.0');
                        setShowActiveIcon(true)
                        setCategoryIcon(markersShadow)
                    }}
                >

                    <div className="w-64">
                        <img src={`http://localhost:7777/events/${props.event_id}.png`} />

                        <div className="text-sm font-bold text-gray-600 my-4 text-left tracking-tighter" >
                            {props.event_title}
                        </div>

                        <div className="text-sm text-gray-400 my-4 text-left tracking-tighter">

                            <div >
                                <b>STARTS:</b> {' '}{((new Date(props.event_start_date) + new Date().getTimezoneOffset()).toString()).substr(0, 21)}
                            </div>
                            <div >
                                <b>ENDS:</b> {' '}{((new Date(props.event_end_date) + new Date().getTimezoneOffset()).toString()).substr(0, 21)}
                            </div>

                        </div>

                        <div className="text-sm text-gray-400 my-4 text-left tracking-tighter">
                            <span>
                                {props.event_description}
                            </span>
                        </div>

                        <div className="text-sm text-gray-500 my-4 text-left tracking-tighter">
                            {props.event_category}
                        </div>


                        <div className="text-sm text-gray-500 my-4 text-left tracking-tighter">
                            Do you want to join?
                        </div>

                        <div>
                            <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
                        </div>
                    </div>
                </Popup>
            </Marker>
        </div >
    )
}

export default EventMarker
