import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/app.actions";

const ProfilDropdown = (props) => {
  const signOut = async () => {
    await props.actions.storeUserData(false, 0);
    props.setShowLogin(false);
  };

  const [activeProfil, setActiveProfil] = useState(false)

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
        class="origin-top-right absolute right-0 mt-3 w-48 rounded-md shadow-lg py-1 bg-gray-50 ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <NavLink
          to="/profilpage"
          onClick={() => setActiveProfil(!activeProfil)}
          className={
            activeProfil
              ? "block underline text-purple-700 px-4 py-2 rounded-md text-md font-medium"
              : "block w-48 text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          }
          class="block w-48 text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Your Profile
        </NavLink>

        <NavLink
          to="/"
          class="block w-48 text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          <div onClick={signOut}>Sign out</div>
        </NavLink>
      </div>
    </Transition>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfilDropdown);
