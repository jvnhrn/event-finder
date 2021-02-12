import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const MobileMenuDropdownLogin = (props) => {

    const [activeMenu, setActiveMenu] = useState("Home");

    return(

        <div class="bg-gray-800">
            <div class="pt-12 pb-3">
                <div class="mb-6"> 
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
                <div
                    className={(props.openLoginModal ? "hidden" : "mx-auto mt-2 w-60 rounded-md shadow-lg py-2 bg-white") + (props.openRegisterModal ? "hidden" : "mx-auto mt-2 w-48 rounded-md shadow-lg py-2 bg-white")}
                >

                    {/* Login/ Sign Up*/}
                    <div class="text-center mt-4 mb-2">
                        <button
                            class=""
                            type="button"
                            onClick={() => props.setOpenLoginModal(true) + props.setOpenRegisterModal(false)}
                            className={(props.openLoginModal ? "bg-purple-600 hover:bg-purple-800 active:bg-purple-900 text-white text-md font-bold uppercase py-3 px-6 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200" : "bg-purple-600 hover:bg-purple-800 active:bg-purple-900 text-white text-md font-bold uppercase py-3 px-6 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200") + (props.openRegisterModal ? "hidden" : "bg-purple-600 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-2 px-4 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200")}
                            data-toggle="modal">
                            Login
                    </button>
                    </div>

                    <div class="max-w-lg mx-auto text-center mt-4 mb-2"
                    >
                        <p class="block px-4 text-sm text-gray-700">Don't have an account?</p>
                        <button
                            class="font-bold text-sm px-1 rounded hover:text-blue-600 hover:underline hover:bg-blue-100"
                            type="button"
                            onClick={() => props.setOpenRegisterModal(true) + props.setOpenLoginModal(false)}
                            className={(props.openRegisterModal ? "hidden" : "font-bold text-sm px-1 rounded hover:text-blue-600 hover:underline hover:bg-blue-100") + (props.openLoginModal ? "hidden" : "font-bold text-sm px-1 rounded hover:underline hover:bg-blue-100")}
                        >
                            Sign up
                    </button>
                    </div>
                </div>

            </div>

        
        </div>
    )
}

export default MobileMenuDropdownLogin;