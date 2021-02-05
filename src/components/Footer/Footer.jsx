import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Navigation/Logo';

function Footer() {
    return (
        <div class="bg-gray-800 w-full mx-auto px-4 py-6 lg:h-20 md:h-20 sm:h-auto absolute bottom-0 left-0">
            <div class="flex items-center justify-between max-w-7xl mx-auto">
                <div class="flex space-x-8 items-center">
                    <Logo />
                    {/* large Menu - NavLinks */}
                    <div class="grid justify-items-end">
                        <div class="ml-10 flex items-baseline space-x-4">

                            <Link to='/' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                            <Link to='/search' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Search</Link>

                            <Link to='/explore' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Explore</Link>

                            <Link to='/hostevent' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Host an Event</Link>
                        </div>
                    </div> 
                </div>
            </div>
           
        </div>
    );
}

export default Footer;
