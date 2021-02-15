import React, { useState, useEffect, useCallback } from 'react';


function instructions() {
    return (

        <div class="pl-10 container">


                <p class="pt-10 tracking-tighter text-2xl text-gray-500 font-semibold">
                        How it works 
                </p>
                    
                        {/* grid starts here */}
                <div class="grid grid-cols-4 gap-4 object-center">

                    <div className="pt-6 text-center">
                        <h1 class="bg-gradient-to-br from-blue-900 via-pink-600 to-red-500 bg-clip-text text-transparent tracking-tighter font-bold text-9xl py-24">
                            1
                        </h1>
                        <span class="pl-4 tracking-tighter font-normal">
                            in order to host an event, you will need an eventi account, just so we can verify you as a host and contact person. Host the next big event on eventi 
                        </span>
                    </div>

                    <div className="py-6 text-center">
                        <h1 class="bg-gradient-to-br from-blue-900 via-pink-600 to-orange-500 bg-clip-text text-transparent tracking-tighter font-bold text-9xl py-24">
                            2
                        </h1>
                        <span class="pl-4 tracking-tighter font-normal">
                        let the eventi form guide you through the next steps. For Audience retention, upload a banging image paired with a banging description
                        </span>
                    </div>

                    <div className="py-6 text-center">
                        <h1 class="bg-gradient-to-br from-blue-900 via-pink-600 to-red-500 bg-clip-text text-transparent tracking-tighter font-bold text-9xl py-24">
                            3
                        </h1>
                        <span class="pl-4 tracking-tighter font-normal">
                        let the form guide you through the next steps 
                        </span>
                    </div>

                    <div className="py-6 text-center">
                        <h1 class="bg-gradient-to-br from-blue-900 via-pink-600 to-red-500 bg-clip-text text-transparent tracking-tighter font-bold text-9xl py-24">
                            4
                        </h1>
                    </div>
                </div>

        </div>
    )
}

export default instructions

