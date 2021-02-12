import { React, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, LayersControl } from 'react-leaflet';
import markerYoureHerePng from "../LandingPage/map_markers/youre-here.png";
import yoga from "./map_markers/yoga.png";
import food from "./map_markers/food.png";
import literature from "./map_markers/literature.png";
import architecture from "./map_markers/architecture.png";
import music from "./map_markers/music.png";
import pottery from "./map_markers/pottery.png";
import random from "./map_markers/random.png";
import markersShadow from "./map_markers/markers-shadow.png";
import { Icon } from 'leaflet';

function EventMarker(props) {

    const [categoryIcon, setCategoryIcon] = useState(random);

    useEffect(() => {

        console.log(props.event_category)

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
        console.log(categoryIcon)
    }, [props.event_category]);


    const iconPlusShadown = new Icon({
        iconUrl: categoryIcon,
    });

    return (
        <div>
            <Marker position={[Number(props.event_gps_latitude), Number(props.event_gps_longitude)]} icon={iconPlusShadown} >
                <Popup className="bbg-gray-100">
                    {props.event_title}
                </Popup>
            </Marker>
        </div>
    )
}


export default EventMarker
