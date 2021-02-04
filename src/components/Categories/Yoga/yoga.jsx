import React from 'react';
import hotpodyoga from '../Yoga/hotpodyoga.png';
import stretchyoga from '../Yoga/stretchyoga.jpg';
import namaste from '../Yoga/namaste.png';
import flexing from '../Yoga/flexing.gif';






function Yoga() {

    return (

        <div class="px-10 py-6 flex-wrap flex ">


            <div class ="max-w-sm rounded-3xl overflow-hidden shadow-lg mr-10 mb-10">
                <img src={hotpodyoga} alt="hotpodyoga"/>  
                <div className="px-10 py-4">
                <div className="font-bold text-gray-600 text-xl my-4 text-left tracking-tighter">
                    24/02/2021 
                </div>
                    <div className="font-bold text-purple-600 text-xl my-4 text-left tracking-tighter">
                        Hotpod Yoga - Bring the heat on 
                    </div>
                    <p className="text-gray-400 text-left tracking-tighter mb-4" id= "address">Rudolfsplatz 5 1100, Vienna</p>
                    <p className="text-left tracking-tighter" /*ca 175 characters*/>
                        To understand it, you’ve got to experience it. An otherworldly cocoon of glowing lights, heady aromas and enveloping soundscapes, taking you a million miles from the everyday. 
                    </p>
                        <ul className="py-4 text-left tracking-tighter"> 
                            <li>
                            <strong className="text-gray-400 ">Contact Host:</strong>
                            </li>
                            <li>
                            +43 6607179110
                            </li>
                            <li>
                            vienna@hotpodyoga.com
                            </li>
                        </ul>
                </div>
                <div className="pb-8 ">
                    <span id="yoga" className="text-gray-400 px-10 font-semibold tracking-tighter">
                        yoga
                    </span>
                    <span id="pricing" className="text-gray-400 px-6 font-semibold tracking-tighter">
                        € 15 
                    </span>
                    <span id="location" className="text-gray-400 px-6 font-semibold tracking-tighter">
                        indoor
                    </span>
                    <span id="leftspots" className="text-red-400 px-6 font-semibold tracking-tighter">
                        0
                    </span>
                </div>
            </div> 




            <div class ="max-w-sm rounded-3xl overflow-hidden shadow-lg mr-10 mb-10">
                <img src={stretchyoga} alt="hotpodyoga"/>  
                <div className="px-10 py-4">
                <div className="font-bold text-gray-600 text-xl my-4 text-left tracking-tighter">
                    Monday - Friday
                </div>
                    <div className="font-bold text-purple-600 text-xl my-4 text-left tracking-tighter">
                        V-Studio Yoga
                    </div>
                    <p className="text-gray-400 text-left tracking-tighter mb-4" id= "address">Virtual</p>
                    <p className="text-left tracking-tighter" /*ca 175 characters*/>
                    We had a need, so they built the solution: When the pandemic hit, We needed a seamless, time saving solution to teaching online... Join us virtually from anywhere.
                    </p>
                        <ul className="py-4 text-left tracking-tighter"> 
                            <li>
                            <strong className="text-gray-400 ">Contact Host:</strong>
                            </li>
                            <li>
                            +43 6607165231
                            </li>
                            <li>
                            hello@vstudio.live
                            </li>
                        </ul>
                </div>
                <div className="pb-8">
                    <span id="yoga" className="text-gray-400 px-10 font-semibold tracking-tighter">
                        yoga
                    </span>
                    <span id="pricing" className="text-gray-400 px-6 font-semibold tracking-tighter">
                        € free
                    </span>
                    <span id="location" className="text-gray-400 px-6 font-semibold tracking-tighter">
                        virtual
                    </span>
                    <span id="leftspots" className="text-green-400 px-6 font-semibold tracking-tighter">
                        +9
                    </span>
                </div>
            </div> 




            <div class ="max-w-sm rounded-3xl overflow-hidden shadow-lg mr-10 mb-10">
                <img src={namaste} alt="hotpodyoga"/>  
                <div className="px-10 py-4">
                <div className="font-bold text-gray-600 text-xl my-4 text-left tracking-tighter">
                    2/03/2021
                </div>
                    <div className="font-bold text-purple-600 text-xl my-4 text-left tracking-tighter">
                        Namaste
                    </div>
                    <p className="text-gray-400 text-left tracking-tighter mb-4" id= "address">Meidlinger Hauptstraße 15 1120, Vienna</p>
                    <p className="text-left tracking-tighter" /*ca 175 characters*/>
                    To understand it, you’ve got to experience it. An otherworldly cocoon of glowing lights, heady aromas and enveloping soundscapes, taking you a million miles from the everyday. 
                    </p>
                        <ul className="py-4 text-left tracking-tighter"> 
                            <li>
                            <strong className="text-gray-400 ">Contact Host:</strong>
                            </li>
                            <li>
                            +43 6801370591
                            </li>
                            <li>
                            office@namaste.at
                            </li>
                        </ul>
                </div>
                <div className="pb-8">
                    <span id="yoga" className="text-gray-400 px-10 font-semibold tracking-tighter">
                        yoga
                    </span>
                    <span id="pricing" className="text-gray-400 px-6 font-semibold tracking-tighter">
                        € 20
                    </span>
                    <span id="location" className="text-gray-400 px-6 font-semibold tracking-tighter">
                        indoor
                    </span>
                    <span id="leftspots" className="text-yellow-400 px-6 font-semibold tracking-tighter">
                        +3
                    </span>
                </div>
            </div> 



            <div class ="max-w-sm rounded-3xl overflow-hidden shadow-lg mr-10 mb-10">
                <img src={flexing} alt="hotpodyoga"/>  
                <div className="px-10 py-4">
                <div className="font-bold text-gray-600 text-xl my-4 text-left tracking-tighter">
                    Weekends
                </div>
                    <div className="font-bold text-purple-600 text-xl my-4 text-left tracking-tighter">
                        Yoga by 6
                    </div>
                    <p className="text-gray-400 text-left tracking-tighter mb-4" id= "address">Stadtpark Vienna</p>
                    <p className="text-left tracking-tighter" /*ca 175 characters*/>
                    Spend a sporty and active time with yourself. Changing facilities are available. You can also use mats and yoga equipment for free. Come by, get to know the team and feel good!
                    </p>
                        <ul className="py-4 text-left tracking-tighter"> 
                            <li>
                            <strong className="text-gray-400 ">Contact Host:</strong>
                            </li>
                            <li>
                            +43 6662899234
                            </li>
                            <li>
                            office@yoga-eleven.at
                            </li>
                        </ul>
                </div>
                <div className="pb-8">
                    <span id="yoga" className="text-gray-400 px-10 font-semibold tracking-tighter">
                        yoga
                    </span>
                    <span id="pricing" className="text-gray-400 px-6 font-semibold tracking-tighter">
                        free
                    </span>
                    <span id="location" className="text-gray-400 px-6 font-semibold tracking-tighter">
                        outdoor
                    </span>
                    <span id="leftspots" className="text-yellow-400 px-6 font-semibold tracking-tighter">
                        +3
                    </span>
                </div>
            </div> 


        </div>
    )
}


export default Yoga;