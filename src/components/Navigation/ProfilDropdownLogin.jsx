import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const ProfilDropdown = (props) => {
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
      <div
        id="nav-profil-dropdown"
        class="relative"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
        className={
          (props.openLoginModal
            ? "hidden"
            : "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white") +
          (props.openRegisterModal
            ? "hidden"
            : "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white")
        }
      >
        <div class="max-w-lg mx-auto text-center mt-4 mb-2">
          <button
            class=""
            type="button"
            onClick={() =>
              props.setOpenLoginModal(true) + props.setOpenRegisterModal(false)
            }
            className={
              (props.openLoginModal
                ? "bg-purple-600 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-2 px-4 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200"
                : "bg-purple-600 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-2 px-4 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200") +
              (props.openRegisterModal
                ? "hidden"
                : "bg-purple-600 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-2 px-4 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200")
            }
            data-toggle="modal"
          >
            Login
          </button>
        </div>

        <div class="max-w-lg mx-auto text-center mt-4 mb-2">
          <p class="block px-4 text-sm text-gray-700">Don't have an account?</p>
          <button
            class="font-bold text-sm px-1 rounded hover:text-blue-600 hover:underline hover:bg-blue-100"
            type="button"
            onClick={() =>
              props.setOpenRegisterModal(true) + props.setOpenLoginModal(false)
            }
            className={
              (props.openRegisterModal
                ? "hidden"
                : "font-bold text-sm px-1 rounded hover:text-blue-600 hover:underline hover:bg-blue-100") +
              (props.openLoginModal
                ? "hidden"
                : "font-bold text-sm px-1 rounded hover:underline hover:bg-blue-100")
            }
          >
            Sign up
          </button>
        </div>
      </div>
    </Transition>
  );
};

export default ProfilDropdown;
