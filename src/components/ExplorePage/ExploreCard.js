import React, { useState, useEffect } from 'react';
/* import ArchitectureCulture from '../Categories/Architecture-Culture/wiener brutalismus.png';
import Literature from '../Categories/Literature/1.png';
import Music from '../Categories/Music/funk.png';
import Pottery from '../Categories/Pottery/1.png';
import Random from '../Categories/Random/drawing.png';
import Yoga from '../Categories/Yoga/hotpodyoga.png';
import Festival from '../Categories/Music/funk.png';
import Restaurant from '../Categories/Pottery/1.png'; */

function ExploreCard(props) {
    const [imageToUse, setImageToUse] = useState(false);
    const [openSpotsColor, setOpenSpotsColor] = useState("text-gray-400 px-6 font-semibold tracking-tighter")

    console.log(!!props.open_spots)
    useEffect(() => {
        if (!!props.open_spots) {
            setOpenSpotsColor("text-green-400 px-6 font-semibold tracking-tighter")
        } else {
            setOpenSpotsColor("text-red-400 px-6 font-semibold tracking-tighter")
        }
    }, [])

    /*     useEffect(() => {
            console.log(props.event_category)
            switch (props.event_category) {
                case ('Yoga'):
                    setImageToUse(Yoga)
                    break;
                case ('Literature'):
                    setImageToUse(Literature)
                    break;
                case ('Restaurant'):
                    setImageToUse(Restaurant)
                    break;
                case ('Festival'):
                    setImageToUse(Festival)
                    break;
            }
        }, [props.event_category]) */

    return (
        <div class="px-10 py-6 flex-wrap flex">
            <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg mr-10 mb-10">
                <img src={`http://localhost:7777/events/${props.event_id}.jpg`} />
                <div className="px-10 py-4">

                    <div className="font-bold text-gray-600 my-4 text-left tracking-tighter">
                        STARTS: {' '}{((new Date(props.event_start_date) + new Date().getTimezoneOffset()).toString()).substr(0, 21)}
                    </div>
                    <div className="font-bold text-gray-600 my-4 text-left tracking-tighter">
                        ENDS: {' '}{((new Date(props.event_end_date) + new Date().getTimezoneOffset()).toString()).substr(0, 21)}
                    </div>
                    <div className="font-bold text-purple-600 text-xl my-4 text-left tracking-tighter">
                        {props.event_title}
                    </div>
                    <p className="text-gray-400 text-left tracking-tighter mb-4" id="address">{props.event_country}, {props.event_city}, {props.event_postalcode}, {props.event_address}</p>
                    <p className="text-left tracking-tighter" /*ca 175 characters*/>
                        {props.event_description}
                    </p>
                    <ul className="py-4 text-left tracking-tighter">
                        <li>
                            <strong className="text-gray-400 ">Contact Host:</strong>
                        </li>
                        <li>
                            {props.event_host_phone}
                        </li>
                        <li>
                            {props.event_host_email}
                        </li>
                    </ul>
                </div>

                <div class="pb-8 grid grid-cols-4 gap-4">
                    <div><span id="yoga" className="text-gray-400 px-10 font-semibold tracking-tighter">
                        {props.event_category}
                    </span></div>
                    <div><span id="pricing" className="text-gray-400 px-6 font-semibold tracking-tighter">
                        € {props.event_price}
                    </span></div>
                    <div><span id="location" className="text-gray-400 px-6 font-semibold tracking-tighter">
                        {props.event_location}
                    </span></div>
                    <div><span id="leftspots" className={openSpotsColor} >
                        {props.open_spots}
                    </span></div>
                </div>
            </div>
        </div>
    )
}
export default ExploreCard;