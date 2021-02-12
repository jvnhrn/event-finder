import React from 'react';

const MobileUserInfo = (props) => {

    return (

        <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">{props.user_first_name} {props.user_last_name}</div>
            <div class="text-sm font-medium leading-none text-gray-400">{props.user_email}</div>
        </div>
    )
}

export default MobileUserInfo; 