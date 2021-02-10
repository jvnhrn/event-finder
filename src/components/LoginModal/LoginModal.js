import React, { useState, useEffect } from 'react';
import axios from 'axios';


function LoginModal(props) {

    const [user_name, set_user_name] = useState('');
    const [user_password, set_user_password] = useState('');

    useEffect(() => {

        console.log(user_name);
        console.log(user_password);

    }, [user_name, user_password])

    const confirmUserCredentials = async () => {

        console.log(user_name);
        console.log(user_password);

        const sendUserCredentials = await axios.get(`http://localhost:7777/userlogin/?user_name=${user_name}&user_password=${user_password}`)
        console.log(sendUserCredentials)
        console.log(sendUserCredentials.data)

    };


    return (
        <div class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">

            <header class="max-w-lg mx-auto">
                <a href="#">
                    <h1 class="text-4xl font-bold text-white text-center">Startup</h1>
                </a>
                
            </header>

            <div class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <div class="h-10 w-10 ml-auto text-gray-400 hover:text-gray-900"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <section>
                    <h3 class="font-bold text-2xl">Welcome to eventi</h3>
                    <p class="text-gray-600 pt-2">Sign in to your account.</p>
                </section>

                <section class="mt-10">
                    {/* <form class="flex flex-col" method="POST" action="#"> */}
                    <div class="my-4 pt-3 rounded bg-gray-200">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                        <input onChange={(e) => set_user_name(e.target.value)} type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                    </div>
                    <div class="my-4 pt-3 rounded bg-gray-200">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                        <input value={user_password} onChange={(e) => set_user_password(e.target.value)} type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                    </div>
                    <div class="flex justify-end my-4">
                        <a href="#" class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                    </div>
                    <div class="flex justify-center">
                        <button onClick={confirmUserCredentials} class="bg-purple-600 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-2 px-4 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200" /* type="submit" */>Sign In</button>
                    </div>
                    {/* </form> */}
                </section>
            </div>

            <div class="max-w-lg mx-auto text-center mt-12 mb-6">
                <button class="text-white">Don't have an account? <a href="#" class="font-bold hover:underline">Sign up</a></button>
            </div>

            <footer class="max-w-lg mx-auto flex justify-center text-white">
                <a href="#" class="hover:underline">Contact</a>
                <span class="mx-3">•</span>
                <a href="#" class="hover:underline">Privacy</a>
            </footer>
        </div>

    )
}

export default LoginModal