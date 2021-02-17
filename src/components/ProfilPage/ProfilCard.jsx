import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import hotpodyoga from '../Categories/Yoga/hotpodyoga.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.actions'
import ProfilDetails from './ProfilDetails';
import axios from 'axios';

function ProfilCard(props) {

    const [show, setShow] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    let history = useHistory();
    function handleClick() {
        history.push("/");
    }

    const Eye = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>

    const EyeClosed = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>


    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    // Profile image confimation
    const userImagePrifileURL = `http://localhost:7777/usersimages/${props.userid}.png`
    const [userImagePrifieState, setUserImagePrifileState] = useState(false)

    useEffect(() => {
        const checkIfUserhasAndImageAvailable = async () => {
            try {
                const userImageProfile = await fetch(userImagePrifileURL)

                if (userImageProfile == 200) {
                    console.log(userImageProfile)
                    console.log(userImageProfile.status)
                    setUserImagePrifileState(true)
                } else {
                    setUserImagePrifileState(false)
                }
            }

            catch (error) {
                console.error(error);
                console.log('Found an error')
            }
        }
        checkIfUserhasAndImageAvailable()
    }, [])

    // SIGNOUT for user
    const signOut = async () => {
        await props.actions.storeUserData(false, 0)
        console.log(props.applicationState.appReducer.canUserLogin)
        console.log(props.applicationState.appReducer.user_id)
        handleClick()
        await window.location.reload()
    }

    return (
        <div>
            <div id="profilCard" class="container mx-auto py-10">
                <div class="w-2/4 mx-auto text-gray-600">
                    <div class="h-24 w-24 mx-auto ">
                        {
                            userImagePrifieState
                                ?
                                <div class="flex flex-wrap justify-center" >
                                    <div >
                                        <img src={userImagePrifileURL} alt="user image" class="shadow-lg rounded-full h-24 w-24 object-cover object-center align-middle border-none" />
                                    </div>
                                </div>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                        }

                    </div>
                    <div className="px-10 py-4">
                        <div className="font-bold text-gray-600 text-xl my-4 text-center tracking-tighter">
                            Hallo
                    </div>
                        <div className="font-bold text-purple-600 text-5xl my-4 text-center tracking-tighter">
                            {props.firstname} {props.lastname}
                        </div>

                        <ul id="details" className="py-6 text-left tracking-tighter">
                            <li class="mb-6">
                                <strong className="text-gray-400 text-2xl">Details</strong>
                            </li>
                            <li class="flex mt-5">
                                <div id="phone" class="h-6 w-6 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    {props.phonenumber}
                                </div>

                            </li>
                            <li class="flex mt-5">
                                <div id="email" class="h-6 w-6 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                                <div>
                                    {props.email}
                                </div>
                            </li>
                            <li class="flex mt-5 outline-none focus:outline-none">
                                <div class="h-6 w-6 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <p>{passwordShown ? <p onClick={togglePasswordVisiblity}>Password</p> : <p onClick={togglePasswordVisiblity}>{props.password}</p>}</p>
                                <button class="h6 w-6 ml-auto">
                                    {passwordShown ? <i onClick={togglePasswordVisiblity}>{Eye}</i> : <i onClick={togglePasswordVisiblity}>{EyeClosed}</i>}
                                </button>
                            </li>
                            <li class="flex mt-8">
                                <div class="m-auto">
                                    <button class="bg-blue-600 flex items-center justify-center hover:bg-blue-800 text-white font-bold uppercase py-2 px-4 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200"
                                        onClick={() => setOpenEditModal(true)}>
                                        <svg class="h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg> Edit your details
                                </button>
                                </div>
                            </li>
                        </ul>

                        {openEditModal ?
                            <ProfilDetails
                                userid={props.userid}
                                username={props.username}
                                firstname={props.firstname}
                                lastname={props.lastname}
                                phonenumber={props.phonenumber}
                                email={props.email}
                                password={props.password}
                                setOpenEditModal={setOpenEditModal}
                            />
                            : null}
                    </div>
                    <div class="flex -mt-4">
                        <button
                            className="border-gray-400 text-gray-500 text-base flex items-center justify-center border-2 py-2 px-4 rounded shadow-sm hover:shadow-md outline-none hover:bg-gray-300 hover:text-white hover:border-gray-300 focus:outline-none mx-auto"
                            type="button"
                            onClick={signOut}

                            style={{ transition: "all .15s ease" }}>
                            Sign out
                    </button>
                    </div>
                </div>
            </div>
        </div >

    )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(ProfilCard);