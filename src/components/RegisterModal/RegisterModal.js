import React, { useState, useEffect } from 'react';
import axios from 'axios';


function RegisterModal() {

    const [user_name, set_user_name] = useState('');
    const [user_first_name, set_user_first_name] = useState('');
    const [user_last_name, set_user_last_name] = useState('');
    const [user_birthdate, set_user_birthdate] = useState('');
    const [user_email, set_user_email] = useState('');
    const [user_password, set_user_password] = useState('');

    useEffect(() => {

        console.log(user_name);
        console.log(user_first_name);
        console.log(user_last_name);
        console.log(user_birthdate);
        console.log(user_email);
        console.log(user_password);

    }, [user_name, user_first_name, user_last_name, user_birthdate, user_email, user_password])

    const registerUser = async () => {

        console.log(user_name);
        console.log(user_password);

        const newUserData = {
            user_name,
            user_first_name,
            user_last_name,
            user_birthdate,
            user_email,
            user_password
        }

        const sendUserCredentials = await axios.post(`http://localhost:7777/registeruser`, newUserData)
        console.log(sendUserCredentials)
        console.log(sendUserCredentials.data)

    };


    return (
        <div class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
            {/*             <header class="max-w-lg mx-auto">
                <a href="#">
                    <h1 class="text-4xl font-bold text-white text-center">Eventappname</h1>
                </a>
            </header> */}

            <div class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 class="font-bold text-2xl">Welcome to Eventappname</h3>
                    <p class="text-gray-600 pt-2">Log into your account.</p>
                </section>

                <section class="mt-10">
                    {/* <form class="flex flex-col" method="POST" action="#"> */}
                    <div class="mb-6 pt-3 rounded bg-gray-200">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">User name</label>
                        <input onChange={(e) => set_user_name(e.target.value)} type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                    </div>
                    <div class="mb-6 pt-3 rounded bg-gray-200">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">First Name</label>
                        <input onChange={(e) => set_user_first_name(e.target.value)} type="password" id="password5" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                    </div>
                    <div class="mb-6 pt-3 rounded bg-gray-200">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Last Name</label>
                        <input onChange={(e) => set_user_last_name(e.target.value)} type="password" id="password4" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                    </div>
                    <div class="mb-6 pt-3 rounded bg-gray-200">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Date of Birth</label>
                        <input onChange={(e) => set_user_birthdate(e.target.value)} type="date" id="password3" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                    </div>
                    <div class="mb-6 pt-3 rounded bg-gray-200">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Email</label>
                        <input onChange={(e) => set_user_email(e.target.value)} type="password" id="password2" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                    </div>
                    <div class="mb-6 pt-3 rounded bg-gray-200">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                        <input onChange={(e) => set_user_password(e.target.value)} type="password" id="password1" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3" />
                    </div>
                    <button onClick={registerUser} class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" /* type="submit" */>Register</button>
                    {/* </form> */}
                </section>
            </div>
        </div>

    )
}

export default RegisterModal