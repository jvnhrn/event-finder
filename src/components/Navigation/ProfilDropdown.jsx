import React from 'react'; 
import { NavLink } from 'react-router-dom';

const ProfilDropdown = () =>{

    return (    

         <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <NavLink to="/profilpage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</NavLink>

            <NavLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</NavLink>

            <NavLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</NavLink>
        </div>
    )

}

export default ProfilDropdown;