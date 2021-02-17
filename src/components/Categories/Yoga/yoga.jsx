import React from "react";
import hotpodyoga from "../Yoga/hotpodyoga.png";

function Yoga() {
  return (
    <div class="px-10 py-6 flex-wrap flex ">
      <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg mr-10 mb-10">
        <img src={hotpodyoga} alt="hotpodyoga" />
        <div className="px-10 py-4">
          <div className="font-bold text-gray-600 text-xl my-4 text-left tracking-tighter">
            24/02/2021
          </div>
          <div className="font-bold text-purple-600 text-xl my-4 text-left tracking-tighter">
            Hotpod Yoga - Bring the heat on
          </div>
          <p
            className="text-gray-400 text-left tracking-tighter mb-4"
            id="address"
          >
            Rudolfsplatz 5 1100, Vienna
          </p>
          <p className="text-left tracking-tighter" /*ca 175 characters*/>
            To understand it, you’ve got to experience it. An otherworldly
            cocoon of glowing lights, heady aromas and enveloping soundscapes,
            taking you a million miles from the everyday.
          </p>
          <ul className="py-4 text-left tracking-tighter">
            <li>
              <strong className="text-gray-400 ">Contact Host:</strong>
            </li>
            <li>+43 6607179110</li>
            <li>vienna@hotpodyoga.com</li>
          </ul>
        </div>
        <div className="pb-8 ">
          <span
            id="yoga"
            className="text-gray-400 px-10 font-semibold tracking-tighter"
          >
            yoga
          </span>
          <span
            id="pricing"
            className="text-gray-400 px-6 font-semibold tracking-tighter"
          >
            € 17
          </span>
          <span
            id="location"
            className="text-gray-400 px-6 font-semibold tracking-tighter"
          >
            indoor
          </span>
          <span
            id="leftspots"
            className="text-red-400 px-6 font-semibold tracking-tighter"
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Yoga;
