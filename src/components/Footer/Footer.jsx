import React from 'react';
import { Link } from 'react-router-dom';
import LogoFooter from './LogoFooter';

function Footer(props) {
    return (
        <div class="relative w-full mx-auto px-4 py-6 sm:h-auto static bottom-0 left-0">
            <div class="flex items-center max-w-7xl mx-auto rounded-3xl mt-12 mb-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-80">
                <div class="text-white font-bold text-5xl mx-auto">
                    Become a member of eventi
                </div>
                <div class="max-w-lg ml-6 mr-auto text-center mt-4 mb-2"> 
                    <div class="mt-4 mb-2">
                    <button
                        class=""
                        type="button"
                        onClick={() => props.setOpenLoginModal(true) + props.setOpenRegisterModal(false)}
                            className={(props.openLoginModal ? "bg-purple-400 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-3 px-6 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200" : "bg-purple-400 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-3 px-6 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200") + (props.openRegisterModal ? "hidden" : "bg-purple-600 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-3 px-4 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200")}
                        data-toggle="modal">
                        Login
                    </button>
                </div>
                    <div class="mt-4 mb-2">
                    <button
                        class="font-bold text-sm px-1 rounded hover:text-blue-600 hover:underline hover:bg-blue-100"
                        type="button"
                        onClick={() => props.setOpenRegisterModal(true) + props.setOpenLoginModal(false)}
                            className={(props.openRegisterModal ? "hidden" : "font-bold text-white text-sm px-1 border-2 py-2 px-4 rounded hover:text-blue-600 hover:bg-blue-100 outline-none focus:outline-none") + (props.openLoginModal ? "hidden" : "font-bold text-white text-sm px-1 border-2 py-2 px-4 rounded hover:text-blue-600 hover:bg-blue-100 outline-none focus:outline-none")}
                    >
                        Sign up
                    </button>
                </div>
                </div>
                    
            </div>
            <div class="flex items-center justify-between max-w-7xl mx-auto space-x-8">
            <div class="grid md:grid-cols-3 md:gap-4 mx-auto text-gray-400 my-4 lg:w-full lg:px-10 md:w-full sm:grid-cols-none">
                <div class="..."> <LogoFooter/> </div>
                <div class="... text-center hidden md:block">Contact</div>
                <div class="... text-right hidden md:block ">Navigate</div>
                <div class="..."> 
                        <div class="text-left hidden md:block items-center"> 
                        eventi:
                        This project is developed within the Codemaster Bootcamp from Talent Garden Austria.
                    </div>
                </div>
                <div class="... text-center hidden md:block">Rainbow Road 7</div>
                <div class="... hidden md:block">

                    <div class="grid grid-cols-1 gap-4 text-right flex items-baseline">

                        <Link to='/' class="text-gray-400 hover:text-gray-100 py-2 rounded-md text-sm font-regular">Home</Link>

                        <Link to='/explore' class="text-gray-400 hover:text-gray-100 py-2 rounded-md text-sm font-regular">Explore</Link>

                        <Link to='/hostevent' class="text-gray-400 hover:text-gray-100 py-2 rounded-md text-sm font-regular">Host an Event</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;
