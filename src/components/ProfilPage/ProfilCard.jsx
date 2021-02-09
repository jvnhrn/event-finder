import React from 'react';
import hotpodyoga from '../Categories/Yoga/hotpodyoga.png';
import ProfilTab from './ProfilTabs';

function ProfilCard(props) {

    return (
        <div class="px-1 py-6 flex-wrap flex">
           {/*  Idea for large Screen */} 
            {/* <div id="profilCard" class="lg:w-3/12 rounded-3xl overflow-hidden shadow-lg ml-auto mr-3">
            <img class="h-24 w-24 mx-auto rounded-full" src={hotpodyoga} alt="hotpodyoga" />
                <div className="px-10 py-4">
                    <div className="font-bold text-gray-600 text-xl my-4 text-center tracking-tighter">
                        Hallo
                    </div>
                    <div className="font-bold text-purple-600 text-xl my-4 text-center tracking-tighter">
                        {props.firstname} {props.lastname}
                    </div>
    
                    <ul className="py-4 text-left tracking-tighter">
                        <li>
                            <strong className="text-gray-400 ">Details</strong>
                        </li>
                        <li>
                            {props.email}
                        </li>
                        <li>
                            {props.password}
                        </li>
                    </ul>
                </div>
            </div>
            <div id="profilCard" class="lg:w-6/12 rounded-3xl overflow-hidden shadow-lg mr-auto mr-3">
                <img class="h-24 w-24 mx-auto rounded-full" src={hotpodyoga} alt="hotpodyoga" />
                <div className="px-10 py-4">
                    <div className="font-bold text-gray-600 text-xl my-4 text-center tracking-tighter">
                        Hallo
                    </div>
                    <div className="font-bold text-purple-600 text-xl my-4 text-center tracking-tighter">
                        {props.firstname} {props.lastname}
                    </div>

                    <ul className="py-4 text-left tracking-tighter">
                        <li>
                            <strong className="text-gray-400 ">Details</strong>
                        </li>
                        <li>
                            {props.email}
                        </li>
                        <li>
                            {props.password}
                        </li>
                    </ul>
                </div>
            </div> */}
            <div id="profilCard" class="lg:w-3/12 rounded-3xl overflow-hidden shadow-lg m-auto">
                
                <img class="h-24 w-24 mx-auto rounded-full" src={hotpodyoga} alt="hotpodyoga" />
                <div className="px-10 py-4">
                    <div className="font-bold text-gray-600 text-xl my-4 text-center tracking-tighter">
                        Hallo
                    </div>
                    <div className="font-bold text-purple-600 text-xl my-4 text-center tracking-tighter">
                        {props.firstname} {props.lastname}
                    </div>

                    <ul className="py-4 text-left tracking-tighter">
                        <li>
                            <strong className="text-gray-400 ">Details</strong>
                        </li>
                        <li>
                            {props.email}
                        </li>
                        <li>
                            {props.password}
                        </li>
                    </ul>
                </div>
                <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>Sign Out</button>
            </div>
            <ProfilTab /> 
        </div>
    )
}
export default ProfilCard;