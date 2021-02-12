import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.actions'


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
        const { canUserLogin, user_id } = await sendUserCredentials.data
        await props.actions.storeUserData(canUserLogin, user_id)
        console.log(props.applicationState.appReducer.canUserLogin)
        console.log(props.applicationState.appReducer.user_id)


        if (!!sendUserCredentials.data.canUserLogin) {
            window.location.reload()
        }

    };


    return (
        <div class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">

            <header class="max-w-lg mx-auto">
                <a href="#">
                    <h1 class="text-4xl font-bold text-white text-center">Startup</h1>
                </a>
            </header>

            <div class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 class="font-bold text-2xl">Welcome to Startup</h3>
                    <p class="text-gray-600 pt-2">Sign in to your account.</p>
                </section>

                <section class="mt-10">
                    {/* <form class="flex flex-col" method="POST" action="#"> */}
                    <div onChangeclass="mb-6 pt-3 rounded bg-gray-200">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                        <input onChange={(e) => set_user_name(e.target.value)} type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                    </div>
                    <div class="mb-6 pt-3 rounded bg-gray-200">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                        <input value={user_password} onChange={(e) => set_user_password(e.target.value)} type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                    </div>
                    <div class="flex justify-end">
                        <a href="#" class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                    </div>
                    <button onClick={confirmUserCredentials} class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" /* type="submit" */>Sign In</button>
                    {/* </form> */}
                </section>
            </div>

            <div class="max-w-lg mx-auto text-center mt-12 mb-6">
                <p class="text-white">Don't have an account? <a href="#" class="font-bold hover:underline">Sign up</a>.</p>
            </div>

            <footer class="max-w-lg mx-auto flex justify-center text-white">
                <a href="#" class="hover:underline">Contact</a>
                <span class="mx-3">•</span>
                <a href="#" class="hover:underline">Privacy</a>
            </footer>
        </div>

    )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);