import React, { useState, useEffect } from 'react';
import axios from 'axios';


function RegisterModal(props) {

    const [user_name, set_user_name] = useState('');
    const [user_first_name, set_user_first_name] = useState('');
    const [user_last_name, set_user_last_name] = useState('');
    const [user_birthdate, set_user_birthdate] = useState('');
    const [user_email, set_user_email] = useState('');
    const [user_phone, set_user_phone] = useState('');
    const [user_password, set_user_password] = useState('');
    const [user_password_repeat, set_user_password_repeat] = useState('');

    const [wrongPassword, setWrongPassword] = useState('');
    const [userRegistered, setUserRegistered] = useState(false);

    const registerUser = async () => {

        try {
            if (user_password == user_password_repeat) {
                setWrongPassword('')
                const newUserData = {
                    user_name,
                    user_first_name,
                    user_last_name,
                    user_birthdate,
                    user_email,
                    user_phone,
                    user_password
                }
                console.log(newUserData)
                const sendUserCredentials = await axios.post(`http://localhost:7777/registeruser`, newUserData)
                console.log(sendUserCredentials)
                console.log(sendUserCredentials.data)
                setUserRegistered(sendUserCredentials.data.userRegistered)

            } else {
                setWrongPassword('Passwords are not the same')
            }
        }
        catch (error) {
            console.error(error);
        }
    };

    const toggleModalVisiblity = () => {
        props.setOpenRegisterModal(false); 
    };


    return (
     <div class="fixed z-10 inset-0 overflow-y-auto bg-gray-800 bg-opacity-60 min-w-full min-h-screen">
                {/*             <header class="max-w-lg mx-auto">
                <a href="#">
                    <h1 class="text-4xl font-bold text-white text-center">Eventappname</h1>
                </a>
            </header> */}

                <div class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <div class="flex">
                        <button class="h-10 w-10 text-gray-400 hover:text-gray-900 ml-auto"
                            onClick={toggleModalVisiblity}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>


                    <section>
                        <h3 class="font-bold text-2xl">Welcome to eventi</h3>
                        <p class="text-gray-600 pt-2">Create your account.</p>
                    </section>

                    <section class="mt-10">
                        {/* <form class="flex flex-col" method="POST" action="#"> */}
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="text">User name</label>
                            <input onChange={(e) => set_user_name(e.target.value)} type="text" id="text" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="text">First Name</label>
                            <input onChange={(e) => set_user_first_name(e.target.value)} type="text" id="password5" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="text">Last Name</label>
                            <input onChange={(e) => set_user_last_name(e.target.value)} type="text" id="password4" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="date">Date of Birth</label>
                            <input onChange={(e) => set_user_birthdate(e.target.value)} type="date" id="password3" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                            <input onChange={(e) => set_user_email(e.target.value)} type="email" id="password2" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="text">Phone number</label>
                            <input onChange={(e) => set_user_phone(e.target.value)} type="text" id="password2" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                            <input onChange={(e) => set_user_password(e.target.value)} type="password" id="password1" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div class="mb-6 pt-3 rounded bg-gray-200">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Repeat password</label>
                            <input onChange={(e) => set_user_password_repeat(e.target.value)} type="password" id="password1" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                        </div>
                        <div class="mb-6 rounded bg-red-200">
                            {wrongPassword}
                        </div>
                        {!!userRegistered ? <div class="mb-6 rounded bg-red-200"> User (username, email or phone number) already exists</div> : <div></div>}
                        <div class="flex justify-center">
                            <button onClick={registerUser} class="bg-blue-600 hover:bg-blue-800 text-white font-bold uppercase py-2 px-4 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200" /* type="submit" */>Register</button>
                        </div> {/* </form> */}
                    </section>
                </div>
            </div>

    )
}

export default RegisterModal