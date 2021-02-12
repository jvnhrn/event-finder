import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileProfilLinks = () => {

    return (
        <div class="mt-3 px-2 space-y-1">
            <NavLink to="/profilpage" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</NavLink>

            <button class="w-1/2 p-2 flex items-center justify-center rounded-full border-2 border-gray-500 text-gray-500 focus:outline-none mt-3">Sign out</button>
        </div>
    )
}

export default MobileProfilLinks; 