import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ProfilDropdown from './ProfilDropdown';
import Notification from './Notification';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import ProfilIcon from './ProfilIcon';


function Navigation() {

    /* isActive State for Navigation  */

    const [isActive, setIsActive] = useState(false);
    const [isActiveExplore, setIsActiveExplore] = useState(false);
    const [isActiveHost, setIsActiveHost] = useState(false); 

    const [activeMenu, setActiveMenu] = useState("Home");

    /* Handle the isActive State for Navigation  */

    function handleNavigation(e){
        if(e.target){
            setIsActive(false);
            setIsActiveHost(false);
            setIsActiveExplore(false); 
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleNavigation);
        return () => {
            document.removeEventListener("click", handleNavigation);
        };
    }); 
    
    /* show State for Dropdown */ 
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
                    

                                        <NavLink to='/'
                                            onClick={() => setActiveMenu("Home")} 
                                        className={(activeMenu === "Home" ? "bg-gray-900 text-white rounded-md text-sm font-medium px-3 py-2 " : "text-gray-300 text-sm rounded-md font-medium px-3 py-2")} 
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white visited:text-gray-300 px-3 py-2 rounded-md text-sm">
                                            Home
                                        </NavLink>


            
                                        <NavLink to='/explore' 
                                            onClick={() => setActiveMenu("Explore")}
                                        className={(activeMenu === "Explore" ? "bg-gray-900 text-white rounded-md text-sm font-medium px-3 py-2 " : "text-gray-300 text-sm rounded-md font-medium px-3 py-2")}
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white visited:text-gray-300 px-3 py-2 rounded-md text-sm">
                                            Explore
                                        </NavLink>

                                        <NavLink to='/hostevent' 
                                            onClick={() => setActiveMenu("HostEvent")}
                                        className={(activeMenu === "HostEvent" ? "bg-gray-900 text-white rounded-md text-sm font-medium px-3 py-2 " : "text-gray-300 text-sm rounded-md font-medium px-3 py-2")}
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white visited:text-gray-300 px-3 py-2 rounded-md text-sm">
                                            Host an Event
                                        </NavLink>
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
                                                <ProfilIcon />
                                            </button>
                                            {/* Click outside the ProfilDropdown -> close Dropdown*/}
                                            {/* <button onClick={() => setShow(show => !show)} className={(show ? "block" : "hidden")} class="fixed left-0 h-full w-full cursor-default"></button> */}
                                            {/* Show Profil Dropdown*/}
                                            {<ProfilDropdown show={show} /> }  
                                    </div>
                                </div>
                            </div>
                        {/* MobileMenu */}
                        <div class="md:hidden flex"> 
                            <MobileMenu /> 
                        </div>
                    </div>
                </div>
        </nav>
    </div>
    )
}

export default Navigation;