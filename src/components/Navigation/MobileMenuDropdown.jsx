import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileProfilIcon from './MobileProfil';
import MobileProfilLinks from './MobileProfilLinks';
import MobileUserInfo from './MobileUserInfo';

const MobileMenuDropDown = (props) =>{

    const [activeMenu, setActiveMenu] = useState("Home");
    
    return (

        <div class="block bg-gray-800">
            <div class="pt-14 pb-3">

                <Link to='/' 
                    onClick={() => setActiveMenu("Home")} 
                    className={(activeMenu === "Home" ? "bg-gray-900 text-white rounded-md text-sm font-medium px-3 py-2 " : "text-gray-300 text-sm rounded-md font-medium px-3 py-2")}  
                    class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home</Link>

                <Link to="/explore" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Explore</Link>

                <Link to="/hostevent" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Host an Event</Link>

            </div>

            <div class="pt-4 pb-3 border-t border-gray-700">
                <div class="flex items-center">
                    <MobileProfilIcon />
                    <MobileUserInfo />
                    <button class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span class="sr-only">View notifications</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                </div>
                <MobileProfilLinks />
            </div>
        </div>
    )
        
}

export default MobileMenuDropDown; 