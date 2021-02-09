import React, {useState, useRef} from 'react';
import hotpodyoga from '../Categories/Yoga/hotpodyoga.png';
import ProfilDetails from './ProfilDetails';

function ProfilCard(props) {

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

    const [logedIn, setLogedIn] = useState(true); 


    const signout = e =>{

        e.preventDefault();

        setLogedIn(false)

    }

    

    return (
        <div class="px-1 py-6 flex-wrap flex">
            <div id="profilCard" class="lg:w-3/12 rounded-3xl overflow-hidden shadow-lg m-auto">
                
                <img class="h-24 w-24 mx-auto rounded-full" src={hotpodyoga} alt="hotpodyoga" />
                <div className="px-10 py-4">
                    <div className="font-bold text-gray-600 text-xl my-4 text-center tracking-tighter">
                        Hallo
                    </div>
                    <div className="font-bold text-purple-600 text-xl my-4 text-center tracking-tighter">
                        {props.firstname} {props.lastname}
                    </div>

                    <ul className="py-4 text-left tracking-tighter">
                        <li>
                            <strong className="text-gray-400 ">Details</strong>
                        </li>
                        <li class="flex mt-4">
                            <div id="email" class="h-6 w-6 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                            <div>
                                {props.email}
                            </div>
                        </li>
                        <li class="flex mt-4">
                            <div class="h-6 w-6 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg> 
                            </div>
                            <p class="ml-2">{passwordShown ? <i onClick={togglePasswordVisiblity}>Password</i> : <i onClick={togglePasswordVisiblity}>{props.password}</i>}</p>
                            <button class="h6 w-6 ml-auto"> 
                                {passwordShown ? <i onClick={togglePasswordVisiblity}>{Eye}</i> : <i onClick={togglePasswordVisiblity}>{EyeClosed}</i>}
                            </button>
                        </li>
                        <li class="flex mt-8">
                            <div class="m-auto">
                                <button class="m-auto my-4 flex inline-flex justify-items-center text-base">
                                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg> Edit
                            </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="flex">
                    <button 
                        className="bg-pink-500 text-white active:bg-blue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none m-auto my-4" 
                        type="button"  
                        onClick={signout}
                        style={{ transition: "all .15s ease" }}>
                            Sign Out
                    </button>
                </div> 
            </div>
        </div>
    )
}
export default ProfilCard;