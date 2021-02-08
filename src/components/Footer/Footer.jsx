import React from 'react';
import { Link } from 'react-router-dom';
import LogoFooter from './LogoFooter';

function Footer() {
    return (
        <div class="bg-gray-800 w-full mx-auto px-4 py-6 lg:h-22 md:h-22 sm:h-auto absolute bottom-0 left-0">
            <div class="flex items-center justify-between max-w-7xl mx-auto space-x-8">
            <div class="grid md:grid-cols-3 md:gap-4 mx-auto text-gray-400 my-4 lg:w-full lg:px-10 md:w-full sm:grid-cols-none">
                <div class="..."> <LogoFooter/> </div>
                <div class="... text-center hidden md:block">Contact</div>
                <div class="... text-right hidden md:block ">Sidemap</div>
                <div class="..."> 
                        <div class="text-left hidden md:block items-center"> 
                        Eventment:
                        This project is developed within the Codemaster Bootcamp from Talent Garden Austria.
                    </div>
                </div>
                <div class="... text-center hidden md:block">Rainbow Road 7</div>
                <div class="... hidden md:block">

                    <div class="grid grid-cols-1 gap-4 text-right flex items-baseline">

                        <Link to='/' class="text-gray-400 hover:text-gray-100 py-2 rounded-md text-sm font-regular">Home</Link>

                        <Link to='/explore' class="text-gray-400 hover:text-gray-100 py-2 rounded-md text-sm font-regular">Explore</Link>

                        <Link to='/hostevent' class="text-gray-400 hover:text-gray-100 py-2 rounded-md text-sm font-regular">Host an Event</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;
