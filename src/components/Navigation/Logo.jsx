import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {

    return (
        <NavLink to='/' class="flex-shrink-0 lg:relative lg:top-0 lg:left-0 absolute top-3 left-4">
            <svg class="h-8 w-8 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </NavLink>
    )
}

export default Logo; 