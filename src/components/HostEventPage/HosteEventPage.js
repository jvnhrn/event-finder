import React from 'react';



function HosteEventPage() {
    return (
        <div>

             <form className="content-center px-24" onSubmit="event.preventDefault();" role="search">

                <div class="grid grid-cols-4 gap-5 object-center">
                
                    <div className="pt-14"><input type="text" name="postal_code" id="event_name" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="Event name"/></div>
                
                    <div class=" outline-none mt-7 pt-6 ">
                                        <select id="country" name="country" autocomplete="country" class="tracking-tighter bg-gray-100 container mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text">
                                            <option>choose category</option>
                                            <option>Yoga / Sports</option>
                                            <option>Literature</option>
                                            <option>Architecture/Culture</option>
                                            <option>Music</option>
                                            <option>Artsy-Crafty</option>
                                            <option>Random</option>
                                        </select>
                    </div>

                    <div class=" outline-none mt-7 pt-6">
                                        <select id="country" name="country" autocomplete="country" class="tracking-tighter bg-gray-100 container mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text">
                                            <option>number of guests</option>
                                            <option>2-6</option>
                                            <option>6-10</option>
                                            <option>10-20</option>
                                            <option>40+</option>
                                            <option>everyone's invited</option>
                                        </select>
                    </div>

                    <div class=" outline-none mt-7 pt-6">
                                        <select id="location" name="" class="tracking-tighter bg-gray-100 container mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text" placeholder="locarion">
                                            <option>Location</option>
                                            <option>Indoor</option>
                                            <option>Outdoor</option>
                                            <option>Virtual</option>
                                        </select>
                    </div>


                    <div class="container">
                        <div class=" relative ">
                            <div class="absolute left-0 pl-3 items-center pointer-events-auto "></div>
                            <input type="text" name="price" id="price" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none " placeholder="0.00"/>
                            <div class="absolute inset-y-0 right-3 flex items-center">
                            <select id="currency" name="currency" class="tracking-tighter focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 px-2 bg-transparent text-gray-500 sm:text-sm rounded-md outline-none">
                                <option>USD</option>
                                <option>CAD</option>
                                <option>EUR</option>
                            </select>
                            </div>
                        </div>
                    </div>


                    <div class=" tracking-tighter container outline-none pb-4 relative">
                    <input type="date" id="date" name="event_date"
                        value="event date"
                        min="2021-01-17" max="2100-12-31" class="bg-gray-100 rounded-md px-4 py-2 focus:ring-purple-600 outline-none"/>
                    </div>
                

                </div>


                <div class="grid grid-cols-4 gap-4 container">
                <div className="py-2"><input type="text" name="street_address" id="street_address" autocomplete="street-address" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="Street with Number"/></div>
                <div className="py-2"><input type="text" name="city" id="city" autocomplete="city" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="City"/></div>
                <div className="py-2"><input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="Postal Code"/></div>
                </div>
                    


                <div className= "py-4">
                    <textarea rows="5" className="tracking-tighter bg-gray-100 rounded-md px-4 py-6 container focus:ring-purple-600 outline-none" id="search" type="search" placeholder="max. 175 characters" />
                </div>


                <div class=" flex justify-center container px-6 py-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                        </label>
                        <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                    </p>
                    </div>
                </div>
            
                <div className= "pt-6 pb-10 mb-10 ">
                    <button className="tracking-tighter px-6 py-2 float-right bg-indigo-900 text-white rounded-md ring-1 ring-gray-500" type="submit">Done</button>
                </div>
            </form>

        </div>

        


        
    )
}


export default HosteEventPage;
