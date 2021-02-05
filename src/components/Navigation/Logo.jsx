import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {

    return (
        <NavLink to='/' class="flex-shrink-0 absolute">
            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
        </NavLink>
    )
}

export default Logo; 