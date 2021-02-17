import React from "react";
import { Link } from "react-router-dom";
import LogoFooter from "./LogoFooter";

function Footer(props) {
  return (
        <div
            id=""
            class="relative w-full mx-auto px-4 py-6 sm:h-auto static bottom-0 left-0"
        >
            <div class="md:flex items-center max-w-7xl mx-auto rounded-3xl mt-12 mb-20 bg-gradient-to-r from-blue-900 via-pink-600 to-red-500 lg:h-40 h-auto">
                <div class="text-white font-bold lg:text-5xl text-4xl lg:py-12 py-6 px-6 mx-auto sm:text-center">
                    Become a member of eventi
        </div>
                <div class="md:mr-auto text-center py-4">
                    <div class="my-4">
                        <button
                            class=""
                            type="button"
                            onClick={() =>
                                props.setOpenLoginModal(true) +
                                props.setOpenRegisterModal(false)
                            }
                            className={
                                (props.openLoginModal
                                    ? "bg-purple-600 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-3 px-6 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200"
                                    : "bg-purple-600 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-3 px-6 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200") +
                                (props.openRegisterModal
                                    ? "hidden"
                                    : "bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-3 px-4 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200")
                            }
                            data-toggle="modal"
                        >
                            Login
                        </button>
                    </div>
                    <div class="my-4">
                        <button
                            class="font-bold text-sm px-1 rounded hover:text-blue-600 hover:underline hover:bg-blue-100"
                            type="button"
                            onClick={() =>
                                props.setOpenRegisterModal(true) +
                                props.setOpenLoginModal(false)
                            }
                            className={
                                (props.openRegisterModal
                                    ? "hidden"
                                    : "font-bold text-white text-sm border-2 py-2 px-4 rounded hover:text-blue-600 hover:bg-blue-100 outline-none focus:outline-none") +
                                (props.openLoginModal
                                    ? "hidden"
                                    : "font-bold text-white text-sm px-1 border-2 py-2 px-4 rounded hover:text-blue-600 hover:bg-blue-100 outline-none focus:outline-none")
                            }
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between max-w-7xl mx-auto space-x-8">
                <div class="grid md:grid-cols-3 md:gap-4 mx-auto text-gray-400 my-4 lg:w-full lg:px-10 md:w-full sm:grid-cols-none">
                    <div class="...">
                        {" "}
                        <LogoFooter />{" "}
                    </div>
                    <div class="... text-left hidden md:block"></div>
                    <div class="... text-right hidden md:block text-md"></div>
                    <div class="...">
                        <div class="text-left hidden md:block items-center">
                            eventi: This project is developed within the Codemaster Bootcamp
                            from Talent Garden Austria.
                        </div>
                    </div>
                    <div class="... text-center hidden md:block"></div>
                    <div class="... hidden md:block">

                        <p class="text-left mb-3"> Do you have a question about eventi?</p>
                        <Link
                            to="/contact"
                            class="-ml-2 py-1 px-2 text-gray-600 font-bold rounded-md text-md hover:underline hover:bg-red-100 hover:text-red-800"
                        >
                            Get in touch with us!
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
