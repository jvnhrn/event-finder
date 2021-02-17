import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Transition } from '@headlessui/react';
import axios from 'axios';
import FormData from 'form-data'

const ProfilDetails = (props) => {

    const [user_name, set_user_name] = useState('');
    const [user_first_name, set_user_first_name] = useState('');
    const [user_last_name, set_user_last_name] = useState('');
    const [user_email, set_user_email] = useState('');
    const [user_phone, set_user_phone] = useState('');
    const [user_password, set_user_password] = useState('');
    const [user_password_repeat, set_user_password_repeat] = useState('');

    const [wrongPassword, setWrongPassword] = useState('');

    const changeUserDetails = async () => {
        try {
            if (user_password == user_password_repeat) {
                setWrongPassword('')
                const newDataForUser = {
                    user_id: props.userid,
                    user_name,
                    user_first_name,
                    user_last_name,
                    user_email,
                    user_phone,
                    user_password
                }
                console.log(newDataForUser)
                const sendUserCredentials = await axios.patch(`http://localhost:7777/userdata`, newDataForUser)
                console.log(sendUserCredentials)
                console.log(sendUserCredentials.data)
            } else {
                setWrongPassword('Passwords are not the same')
            }
        }
        catch (error) {
            console.error(error);
        }
    };

    //////////////////////////////////////////////////////////
    // Drag and Drop
    const [profil_image, setProfil_image] = useState('');

    const onDrop = useCallback(acceptedFile => {

        setProfil_image(Object.assign(acceptedFile[0], {
            preview: URL.createObjectURL(acceptedFile[0])
        }))

    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: 'image/*', onDrop })
    //Send image
    const sendTestImage = async () => {
        const user_id = props.userid
        console.log(props.userid)
        const formData = new FormData();
        formData.append('userimage', profil_image, profil_image.name)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            },
        }
        formData.append('user_id', user_id);
        const sendImage = await axios.post('http://localhost:7777/userimage', formData, config, {
            onUploadProgress: progressEvent => {
                console.log('Upload progress: ' + (Math.round(progressEvent.loaded / progressEvent.total) * 100) + '%')
            }
        })
        console.log(sendImage);
    }

    // Password length and make it secret
    const pass = props.password;
    const passwordLength = pass.length
    const hiddenPass = '*'.repeat(passwordLength)


    return (

        <div class="fixed z-10 inset-0 overflow-y-auto bg-gray-800 bg-opacity-60 min-w-full min-h-screen" >
            <div class="bg-white max-w-lg mx-auto p-8 md:p-12 my-14 rounded-lg shadow-2xl">

                <div class="flex">
                    <button class="h-10 w-10 text-gray-400 hover:text-gray-900 ml-auto"
                        onClick={() => props.setOpenEditModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>

                <div class="container mx-auto justify-center bg-white">
                    <div {...getRootProps({ className: 'dropzone' })} class=" flex justify-center container px-6 py-6 border-2 border-gray-300 border-dashed rounded-full" >
                        <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <div>
                                <div class="focus:outline-none flex text-sm text-gray-600 relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 ">
                                    <input  {...getInputProps()} className="focus:outline-none " id="file-upload" name="file-upload" type="file" class="sr-only" />
                                    {
                                        isDragActive ?
                                            <p>Drop image here ...</p> :
                                            <p>Drag 'n' drop or click to select image</p>
                                    }
                                </div>
                            </div>
                            <p class="text-xs text-center text-gray-500">JPG up to 10MB</p>
                        </div>
                    </div >
                    <div class="flex justify-center container pt-6">
                        <img
                            src={profil_image.preview}
                            style={{

                                display: 'block',
                                width: 'auto',
                                height: 100
                            }} />
                    </div>


                    <div class="mx-4">
                        <ul id="details" className="py-4 text-left tracking-tighter">
                            <li class="md:flex mt-5">
                                <strong className="text-gray-400 text-2xl">change your details</strong>
                            </li>
                            <li class="md:flex mt-5 justify-center">
                                <div class="flex">
                                    <div id="userid" class="h-6 w-6 mr-2 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <label class="block text-gray-700 font-bold py-2 ml-3 w-36" for="text">User name</label>
                                    </div>
                                </div>
                                <div>
                                    <input onChange={(e) => set_user_name(e.target.value)} type="text" name="postal_code" id="event_name" class="tracking-tighter bg-gray-100 text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 py-2" placeholder={props.username} />
                                </div>
                            </li>
                            <li class="md:flex mt-5 justify-center">
                                <div class="flex">
                                    <div id="phone" class="h-6 w-6 mr-2 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <label class="block text-gray-700 font-bold py-2 ml-3 w-36" for="text">Phone number</label>
                                    </div>
                                </div>
                                <div>
                                    <input onChange={(e) => set_user_phone(e.target.value)} type="text" id="password2" class="tracking-tighter bg-gray-100 text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 py-2" placeholder={props.phonenumber} />
                                </div>

                            </li>
                            <li class="md:flex mt-5 justify-center">
                                <div class="flex">
                                    <div id="email" class="h-6 w-6 mr-2 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                    <div>
                                        <label class="block text-gray-700 font-bold py-2 ml-3 w-36" for="email">Email</label>
                                    </div>
                                </div>
                                <div class="">
                                    <input onChange={(e) => set_user_email(e.target.value)} type="email" id="password2" class="tracking-tighter bg-gray-100 text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 py-2" placeholder={props.email} />
                                </div>
                            </li>
                            <li class="md:flex mt-5 justify-center">
                                <div class="flex">
                                    <div id="email" class="h-6 w-6 mr-2 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <label class="block text-gray-700 font-bold py-2 ml-3 w-36" for="email">Firstname</label>
                                    </div>
                                </div>
                                <div>
                                    <input onChange={(e) => set_user_first_name(e.target.value)} type="email" id="password2" class="tracking-tighter bg-gray-100 text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 py-2" placeholder={props.firstname} />
                                </div>
                            </li>
                            <li class="md:flex mt-5 justify-center">
                                <div class="flex">
                                    <div id="email" class="h-6 w-6 mr-2 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <label class="block text-gray-700 font-bold py-2 ml-3 w-36" for="email">Lastname</label>
                                    </div>
                                </div>
                                <div>
                                    <input onChange={(e) => set_user_last_name(e.target.value)} type="email" id="password2" class="tracking-tighter bg-gray-100 text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 py-2" placeholder={props.lastname} />
                                </div>
                            </li>
                            <li class="md:flex mt-5 justify-center">
                                <div class="flex">
                                    <div id="email" class="h-6 w-6 mr-2 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <label class="block text-gray-700 font-bold py-2 ml-3 w-36" for="email">Password</label>
                                    </div>
                                </div>
                                <div>
                                    <input onChange={(e) => set_user_password(e.target.value)} type="password" id="password1" class="tracking-tighter bg-gray-100 text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 py-2" placeholder={hiddenPass} />
                                </div>
                            </li>
                            <li class="md:flex mt-5 justify-center">
                                <div class="flex">
                                    <div id="email" class="h-6 w-6 mr-2 py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <label class="block text-gray-700 font-bold py-2 ml-3 w-36" for="email">Repeat Password</label>
                                    </div>
                                </div>
                                <div>
                                    <input onChange={(e) => set_user_password_repeat(e.target.value)} type="password" id="password1" class="tracking-tighter bg-gray-100 text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 py-2" placeholder={hiddenPass} />
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div class="mb-6 rounded bg-red-200">
                        {wrongPassword}
                    </div>
                    <div class="flex justify-center">
                        <button onClick={() => sendTestImage() + changeUserDetails() + props.setOpenEditModal(false) + window.location.reload()} class="font-bold text-base uppercase flex items-center justify-center border-blue-600 border-2 py-2 px-4 rounded outline-none shadow-lg focus:outline-none text-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:shadow-xl" /* type="submit" */>
                            <svg class="h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg> Edit
                    </button>
                    </div> {/* </form> */}

                </div>
            </div>
        </div>

    )
}

export default ProfilDetails; 