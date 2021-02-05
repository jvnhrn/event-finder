import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div class="bg-gray-700 w-full mx-auto px-4 py-6 lg:h-20 md:h-20 sm:h-auto absolute bottom-0 left-0">
            <div class="flex items-center justify-between max-w-7xl mx-auto">
                <div class="flex items-center">
                    <div class="flex items-center">
                        Logo
                    </div>

                    {/* large Menu - NavLinks */}
                    <div class="md:block ">
                        <div class="ml-10 flex items-baseline space-x-4">

                            <NavLink to='/' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>

                            <NavLink to='/search' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Search</NavLink>

                            <NavLink to='/explore' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Explore</NavLink>

                            <NavLink to='/hostevent' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Host an Event</NavLink>
                        </div>
                    </div> 
                </div>
            </div>
           
        </div>
    );
}

export default Footer;
