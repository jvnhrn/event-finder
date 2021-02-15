import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.actions'


const MobileMenuDropDown = (props) => {

    const [activeMenu, setActiveMenu] = useState("Home");

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
                <div class="mt-12 mb-6">
                    <Link to='/'
                        onClick={() => setActiveMenu("Home")}
                        className={(activeMenu === "Home" ? "block bg-gray-900 text-white rounded-md text-md font-medium px-3 py-3 w-full" : "block text-gray-300 text-md rounded-md font-medium px-3 py-3 w-full")}
                        class="block text-gray-300 text-md rounded-md font-medium px-3 py-3 w-full">
                        Home
                    </Link>

                    <Link to="/explore"
                        onClick={() => setActiveMenu("Explore")}
                        className={(activeMenu === "Explore" ? "block bg-gray-900 text-white rounded-md text-md font-medium px-3 py-3 w-full" : "block text-gray-300 text-md rounded-md font-medium px-3 py-3 w-full")}
                        class="block text-gray-300 text-md rounded-md font-medium px-3 py-3 w-full">
                        Explore
                    </Link>

                    <Link
                        to="/hostevent"
                        onClick={() => setActiveMenu("HostEvent")}
                        className={(activeMenu === "HostEvent" ? "block bg-gray-900 text-white rounded-md text-md font-medium px-3 py-3 w-full" : "block text-gray-300 text-md rounded-md font-medium px-3 py-3 w-full")}
                        class="block text-gray-300 text-md rounded-md font-medium px-3 py-3 w-full">
                        Host an Event
                    </Link>
                </div>

            <div class="pt-4 pb-3 border-t border-gray-700">
            </div>
        </div>
        </Transition>
    )

}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuDropDown);