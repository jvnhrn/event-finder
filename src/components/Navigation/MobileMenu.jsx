import Reat from 'react'; 
import React, { useState, useRef, useEffect } from 'react';
import MobileMenuDropDown from './MobileMenuDropdown';

function MobileMenu () {
    const [open, setOpen] = useState(false); 
    const dropit = useRef(null);

    function handleClick(e) {
        if (!e.target.closest(`.${dropit.current.className}`) && open) {
            setOpen(false);
        }
    }
    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    });

    return (
        <div className="dropdown" ref={dropit} >
            <button class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={() => setOpen(open => !open)}>
                <span class="sr-only">Open main menu</span>

                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {open && <MobileMenuDropDown /> }
        </div> 
    )
}

export default MobileMenu; 