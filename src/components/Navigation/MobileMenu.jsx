import React, { useState, useRef, useEffect } from 'react';
import MobileMenuDropDown from './MobileMenuDropdown';

function MobileMenu () {
    const [hamburgerOpen, setHamburgerOpen] = useState(false); 
    
    return (
        <div className={(!hamburgerOpen ? "h-10" : "")}>
            <button class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-800 absolute top-3 right-4"
                >
                <span class="sr-only">Open main menu</span>

                <svg onClick={() => setHamburgerOpen(hamburgerOpen => !hamburgerOpen)} className={(!hamburgerOpen ? "h-6 w-6" : "hidden h-6 w-6")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>

                <svg onClick={() => setHamburgerOpen(hamburgerOpen => !hamburgerOpen)} className={(hamburgerOpen ? "h-6 w-6" : "hidden h-6 w-6")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
            
            {<MobileMenuDropDown show={hamburgerOpen} /> }
        </div> 
    )
}

export default MobileMenu; 