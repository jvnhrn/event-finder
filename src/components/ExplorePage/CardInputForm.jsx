import React from 'react';



function CardInputForm() {
    return (
        <div>
             <form className="content-center px-24 pt-6" onSubmit="event.preventDefault();" role="search">
             <h1 class="text-3xl font-light text-grey-500 hover:text-gray-900 py-6">
                List an Event
            </h1>

            <input className="bg-gray-100 rounded-md px-4 py-4 container focus:ring-purple-600 outline-none " id="search" type="search" placeholder="call it what you wanna" />
            
            <div class="grid grid-cols-5 gap-5">
                <div class=" outline-none pt-6 ">
                                    <select id="country" name="country" autocomplete="country" class="bg-gray-100 container mt-1 block w-full py-4 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text">
                                        <option className ="">choose category</option>
                                        <option>Yoga/Sports</option>
                                        <option>Literature</option>
                                        <option>Architecture/Culture</option>
                                        <option>Music</option>
                                        <option>Artsy-Crafty</option>
                                        <option>Random</option>
                                    </select>
                </div>

                <div class=" outline-none pt-6">
                                    <select id="country" name="country" autocomplete="country" class="bg-gray-100 container mt-1 block w-full py-4 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text">
                                        <option>number of guests</option>
                                        <option>2-6</option>
                                        <option>6-10</option>
                                        <option>10-20</option>
                                        <option>40+</option>
                                        <option>everyone's invited</option>
                                    </select>
                </div>

                <div class=" outline-none pt-6">
                                    <select id="location" name="country" autocomplete="country" class="bg-gray-100 container mt-1 block w-full py-4 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text">
                                        <option>Location</option>
                                        <option>Indoor</option>
                                        <option>Outdoor</option>
                                        <option>Virtual</option>
                                    </select>
                </div>


                <div class="container">
                    <div class="mt-1 relative rounded-md shadow-sm pt-6 ">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none "></div>
                        <input type="text" name="price" id="price" class="bg-gray-100 rounded-md px-4 py-4 container focus:ring-purple-600 outline-none " placeholder="0.00"/>
                        <div class="absolute inset-y-0 py-4 right-0 flex items-center">
                        <label for="currency" class="sr-only py-4">Currency</label>
                        <select id="currency" name="currency" class="focus:ring-indigo-500 focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md outline-none">
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                        </select>
                        </div>
                    </div>
                </div>


                <div class=" container outline-none pt-6 mt-1 relative rounded-md shadow-sm pt-6">
                <input type="date" id="event_date" name="event_date"
                    value="2021-01-17"
                    min="2021-01-17" max="2024-12-31" class="bg-gray-100 rounded-md px-4 py-4 focus:ring-purple-600 outline-none"/>
                </div>
               

            </div>


            <div class="grid grid-cols-4 gap-4 container">
            <div className="py-4"><input type="text" name="street_address" id="street_address" autocomplete="street-address" class=" bg-gray-100 rounded-md px-4 py-4 container focus:ring-purple-600 outline-none" placeholder="Street with Number"/></div>
            <div className="py-4"><input type="text" name="city" id="city" autocomplete="city" class=" bg-gray-100 rounded-md px-4 py-4 container focus:ring-purple-600 outline-none" placeholder="City"/></div>
            <div className="py-4"><input type="text" name="state" id="state" autocomplete="state" class=" bg-gray-100 rounded-md px-4 py-4 container focus:ring-purple-600 outline-none" placeholder="State"/></div>
            <div className="py-4"><input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class=" bg-gray-100 rounded-md px-4 py-4 container focus:ring-purple-600 outline-none" placeholder="Postal Code"/></div>
            </div>
                


            <div className= "py-6">
            <textarea rows="5" className="bg-gray-100 rounded-md px-4 py-6 container focus:ring-purple-600 outline-none" id="search" type="search" placeholder="max. 175 characters" />
            </div>

              <div class="mt-2 flex justify-center container px-6 py-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p class="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
          
            <div className= "pt-10">
            <button className="px-10 py-4 absolute rounded-md ring-1 ring-gray-500" type="submit">Done</button>
            </div>
                </form>

        </div>

        


        
    )
}


export default CardInputForm;
