import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MobileProfilIcon from './MobileProfil';
import MobileUserInfo from './MobileUserInfo';
import { Transition } from '@headlessui/react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.actions'


const MobileMenuDropDown = (props) => {

    const [userData, setUserData] = useState('');
    const [user_id, setUser_id] = useState(props.applicationState.appReducer.user_id)

    useEffect(() => {
        console.log(user_id)
        const getUserData = async () => {
            try {
                const allUsersData = await axios.get(`http://localhost:7777/userdata/?user_id=${user_id}`);
                setUserData(allUsersData.data);
                console.log(allUsersData.data);
            } catch (error) {
                console.error(error);
            }
        }
        getUserData()
    }, []);

    const signOut = async () => {
        await props.actions.storeUserData(false, 0)
        props.setShowLogin(false)
    }

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

            <div class="block bg-gray-800">
                
                <div class="pt-4 pb-3 border-t border-gray-700">
                    <div class="flex items-center">
                        <MobileProfilIcon />
                        <MobileUserInfo
                            user_first_name={userData.user_first_name}
                            user_last_name={userData.user_last_name}
                            user_email={userData.user_email}
                        />
                        {/* <button class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span class="sr-only">View notifications</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button> */}
                    </div>
                    <div class="mt-3 px-2 space-y-1">
                        
                        <NavLink to="/profilpage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"
                            >Your Profile
                        </NavLink>

                        <button class="w-1/2 p-2 flex items-center justify-center rounded-full border-2 border-gray-500 text-gray-500 focus:outline-none mt-3" 
                            onClick={signOut}
                            >Sign out
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    )

}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuDropDown);