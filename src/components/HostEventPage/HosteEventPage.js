import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HosteEventPage() {

    const [event_category, setEvent_category] = useState('');
    const [event_title, setEvent_title] = useState('');
    const [event_description, setEvent_description] = useState('');
    const [event_location, setEvent_location] = useState('');
    const [event_country, setEvent_country] = useState('');
    const [event_city, setEvent_city] = useState('');
    const [event_postalcode, setEvent_postalcode] = useState('');
    const [event_address, setEvent_address] = useState('');
    const [event_host_phone, setEvent_host_phone] = useState('');
    const [event_host_email, setEvent_host_email] = useState('');
    const [event_price, setEvent_price] = useState(0);
    const [event_start_date, setEvent_start_date] = useState('');
    const [event_end_date, setEvent_end_date] = useState('');
    const [event_image, setEvent_image] = useState(null);
    const [event_max_participants, setEvent_max_participants] = useState(0);

    useEffect(() => {
        console.log(event_image)
    }, [event_image])

    const sendEventData = async () => {

        try {
            const eventData = {
                event_category,
                event_title,
                event_description,
                event_location,
                event_country,
                event_city,
                event_postalcode,
                event_address,
                event_host_phone,
                event_host_email,
                event_price,
                event_start_date,
                event_end_date,
                event_max_participants
            }

            const sendEvent = await axios.post('http://localhost:7777/events', eventData);
            console.log(sendEvent.data);

            if (!!sendEvent.data.saveImage) {
                const formData = new FormData();
                formData.append('avatar', event_image, event_image.name)
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                const sendImage = await axios.post('http://localhost:7777/image', formData, config, {
                    onUploadProgress: progressEvent => {
                        console.log('Upload progress: ' + (Math.round(progressEvent.loaded / progressEvent.total) * 100) + '%')
                    }
                })
                console.log(sendImage);
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>
            {/* <form className="content-center px-24 pt-6"  onSubmit="event.preventDefault();"  role="search"> */}
            {/*             <h1 class="tracking-tighter font-light text-3xl text-grey-500 hover:text-gray-900 py-6">
                Host an Event
            </h1> */}

            <div class="grid grid-cols-4 gap-5 object-center">

                <div className="pt-14">
                    <input onChange={(e) => { setEvent_title(e.target.value) }} type="text" name="postal_code" id="event_name" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="Event name" />
                </div>

                <div class=" outline-none mt-7 pt-6 ">
                    <select onChange={(e) => { setEvent_category(e.target.value) }} id="country" name="country" autocomplete="country" class="tracking-tighter bg-gray-100 container mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text">
                        <option>choose category</option>
                        <option>Yoga / Sports</option>
                        <option>Literature</option>
                        <option>Architecture/Culture</option>
                        <option>Music</option>
                        <option>Artsy-Crafty</option>
                        <option>Random</option>
                    </select>
                </div>

                <div className="pt-14">
                    <input onChange={(e) => { setEvent_max_participants(e.target.value) }} type="number" name="event_max_participants" id="event_max_participants" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="Number of participants" /></div>

                <div class=" outline-none mt-7 pt-6">
                    <select onChange={(e) => { setEvent_location(e.target.value) }} id="location" name="" class="tracking-tighter bg-gray-100 container mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text" placeholder="locarion">
                        <option>Location</option>
                        <option>Indoor</option>
                        <option>Outdoor</option>
                        <option>Virtual</option>
                    </select>
                </div>

                <div class=" tracking-tighter container outline-none pb-6 relative">
                    Starting date and time{' '}
                    <input onChange={(e) => { setEvent_start_date(e.target.value) }} type="datetime-local" id="date" name="event_date"
                        value={event_start_date}
                        min="2021-01-17" max="2100-12-31" class="bg-gray-100 rounded-md px-4 py-2 focus:ring-purple-600 outline-none" />
                </div>

                <div class=" tracking-tighter container outline-none pb-6 relative">
                    End date and time{' '}
                    <input onChange={(e) => { setEvent_end_date(e.target.value) }} type="datetime-local" id="date" name="event_date"
                        value={event_end_date}
                        min="2021-01-17" max="2100-12-31" class="bg-gray-100 rounded-md px-4 py-2 focus:ring-purple-600 outline-none" />
                </div>

                <div class="container">
                    <div class=" relative ">
                        <div class="absolute left-0 pl-3 items-center pointer-events-auto "></div>
                        <input onChange={(e) => { setEvent_price(e.target.value) }} type="number" name="price" id="price" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none " placeholder="0.00" />
                        <div class="absolute inset-y-0 right-3 flex items-center">
                            <select id="currency" name="currency" class="tracking-tighter focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 px-2 bg-transparent text-gray-500 sm:text-sm rounded-md outline-none">
                                <option>USD</option>
                                <option>CAD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>
                </div>



                <div>
                    <input onChange={(e) => { setEvent_host_phone(e.target.value) }} type="text" name="event_host_phone" id="event_host_phone" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="Phone number" />
                </div>

                <div>
                    <input onChange={(e) => { setEvent_host_email(e.target.value) }} type="email" name="event_host_email" id="event_host_email" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="Email" />
                </div>

            </div>

            <div class="grid grid-cols-4 gap-4 container">
                <div onChange={(e) => { setEvent_country(e.target.value) }} className="py-2"><input type="text" name="country" id="country" autocomplete="country" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="Country" /></div>
                <div onChange={(e) => { setEvent_address(e.target.value) }} className="py-2"><input type="text" name="street_address" id="street_address" autocomplete="street-address" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="Street with Number" /></div>
                <div onChange={(e) => { setEvent_city(e.target.value) }} className="py-2"><input type="text" name="city" id="city" autocomplete="city" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="City" /></div>
                <div onChange={(e) => { setEvent_postalcode(e.target.value) }} className="py-2"><input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="Postal Code" /></div>
            </div>

            <div className="py-6">
                <textarea onChange={(e) => { setEvent_description(e.target.value) }} rows="5" className="tracking-tighter bg-gray-100 rounded-md px-4 py-6 container focus:ring-purple-600 outline-none" id="search" type="search" placeholder="max. 175 characters" />
            </div>

            <div class=" flex justify-center container px-6 py-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a file</span>
                            <input onChange={(e) => { setEvent_image(e.target.files[0]) }} id="file-upload" name="file-upload" type="file" class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                </p>
                </div>
            </div>

            <div className="pt-6 pb-10 mb-10 ">
                <button onClick={sendEventData} className="tracking-tighter px-6 py-2 float-right bg-indigo-900 text-white rounded-md ring-1 ring-gray-500" /* type="submit" */>Done</button>
            </div>
            {/* </form> */}
        </div>
    )
}


export default HosteEventPage;
