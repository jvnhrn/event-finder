import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Navigation/Logo';

function Footer() {
    return (
        <div class="bg-gray-800 w-full mx-auto px-4 py-6 lg:h-22 md:h-22 sm:h-auto absolute bottom-0 left-0">
            <div class="flex items-center justify-between max-w-7xl mx-auto space-x-8">
                
            </div>

            <div class="grid grid-cols-3 gap-4 mx-auto text-gray-300 my-4 lg:w-full lg:px-10 md:w-full">
                <div class="..."> <Logo/> </div>
                <div class="... text-center hidden md:block">Contact</div>
                <div class="... text-right hidden md:block">Sidemap</div>
                <div class="..."> 
                    <div class="text-left hidden md:block md:my-4 items-center"> 
                        Eventment:
                        This project is developed within the Codemaster Bootcamp from Talent Garden Austria.
                    </div>
                </div>
                <div class="... text-center hidden md:block">Contact</div>
                <div class="... hidden md:block">

                    <div class="grid grid-cols-1 gap-4 text-right flex items-baseline">

                        <Link to='/' class="text-gray-300 hover:bg-gray-700 hover:text-white py-2 rounded-md text-sm font-medium">Home</Link>

                        <Link to='/search' class="text-gray-300 hover:bg-gray-700 hover:text-white py-2 rounded-md text-sm font-medium">Search</Link>

                        <Link to='/explore' class="text-gray-300 hover:bg-gray-700 hover:text-white py-2 rounded-md text-sm font-medium">Explore</Link>

                        <Link to='/hostevent' class="text-gray-300 hover:bg-gray-700 hover:text-white py-2 rounded-md text-sm font-medium">Host an Event</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
