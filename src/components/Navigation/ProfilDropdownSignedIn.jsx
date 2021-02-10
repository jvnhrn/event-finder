import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react'

const ProfilDropdown = (props) =>{

    return (    

        <Transition
            show={props.show}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
         <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <NavLink to="/profilpage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</NavLink>

            <NavLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</NavLink>
        </div>
        </Transition>
    )

}

export default ProfilDropdown;