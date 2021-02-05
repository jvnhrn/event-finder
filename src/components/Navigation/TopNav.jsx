import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ProfilDropdown from './ProfilDropdown';
import Notification from './Notification';
import MobileMenu from './MobileMenu';
import Logo from './Logo';


function Navigation() {

    const [show, setShow] = useState(false); 

    const drop = useRef(null);

    function handleClick (e){
        if (!e.target.closest(`.${drop.current.className}`) && show){
            setShow(false);
        } 
    }
    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    });

    return (
        <div>
            <nav class="bg-gray-800">
                <div class="max-w-7xl mx-auto px-4 py-3 lg:h-16 md:h-16 sm:h-16">
                    <div class="flex items-center justify-between">
                        {/* large Menu */}
                        <div class="flex items-center">
                            {/* Logo */}
                            <Logo />
                            {/* large Menu - NavLinks */}
                                <div class="hidden md:block">
                                    <div class="ml-10 flex items-baseline space-x-4">
                    
                                        <NavLink to='/' class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>

                                        <NavLink to='/search' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Search</NavLink>

                                        <NavLink to='/explore' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Explore</NavLink>

                                        <NavLink to='/hostevent' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Host an Event</NavLink>
                                    </div>
                                </div>
                        </div>
                        {/* large Menu - Notification + Profil + ProfilDropdown*/}
                        <div class="hidden md:block">
                                <div class="ml-4 flex items-center md:ml-6">
                                    <Notification />
                                    
                                    <div className="dropdown" ref={drop} class="ml-3 relative">
                                        
                                            <button class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true"
                                             onClick={()=> setShow(show => !show)} >
                                                <span class="sr-only">Open user menu</span>
                                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                            </button>
                                        
                                        {show && <ProfilDropdown /> }
                                    </div>
                                </div>
                            </div>
                        {/* MobileMenu */}
                        <div class="md:hidden block">      
                            <MobileMenu /> 
                        </div>
                    </div>
                </div>
        </nav>
    </div>
    )
}

export default Navigation;
