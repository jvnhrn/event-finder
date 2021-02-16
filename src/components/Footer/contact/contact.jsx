import React from 'react';
import claudio from './cc.png';
import johanna from './jh.png';
import jessica from './jn.png';
import alex from './aw.png';


function contact() {

    return (
        <div class="px-24">
            <div class="py-16 mb-10 grid grid-cols-5 gap-2 object-center">
                <div>
                    <p class="pt-12 container tracking-tighter font-bold text-3xl">
                            get in touch with the eventi team:
                    </p>
                </div>

                <div class="text-center justify-items-center align-items-center">
                    <img class="w-32 h-32 md:w-48 md:h-auto rounded-full mx-auto pb-4" src={claudio} alt="" width="384" height="512"></img>
                    <p class="tracking-tighter pb-4">
                    <strong>Claudio</strong>
                    </p>
                    <a href="mailto:jessynnebs@gmail.com" target="_blank" rel="nofollow noopener noreferrer" className="text-gray-500 rounded-md tracking-tighter float-center bg-white-600 hover:bg-purple-100 font-light py-2 px-6 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200">Email</a>
                </div>

                <div class="text-center justify-items-center align-items-center">
                    <img class="w-32 h-32 md:w-48 md:h-auto rounded-full mx-auto pb-4" src={johanna} alt="" width="384" height="512"></img>
                    <p class="tracking-tighter pb-4">
                    <strong>Johanna</strong>
                    </p>
                    <a href="mailto:jessynnebs@gmail.com" target="_blank" rel="nofollow noopener noreferrer" className="text-gray-500 rounded-md tracking-tighter float-center bg-white-600 hover:bg-purple-100 font-light py-2 px-6 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200">Email</a>
                </div>

                <div class="text-center justify-items-center align-items-center">
                    <img class="w-32 h-32 md:w-48 md:h-auto rounded-full mx-auto pb-4" src={jessica} alt="" width="384" height="512"></img>
                    <p class="tracking-tighter pb-4">
                    <strong>Jessica</strong>
                    </p>
                    <a href="mailto:jessynnebs@gmail.com" target="_blank" rel="nofollow noopener noreferrer" className="text-gray-500 rounded-md tracking-tighter float-center bg-white-600 hover:bg-purple-100 font-light py-2 px-6 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200">Email</a>
                </div>

                <div class="text-center justify-items-center align-items-center">
                    <img class="w-32 h-32 md:w-48 md:h-auto rounded-full mx-auto pb-4" src={alex} alt="" width="384" height="512"></img>
                    <p class="tracking-tighter pb-4">
                    <strong>Alex</strong>
                    </p>
                    <a href="mailto:jessynnebs@gmail.com" target="_blank" rel="nofollow noopener noreferrer" className="text-gray-500 rounded-md tracking-tighter float-center bg-white-600 hover:bg-purple-100 font-light py-2 px-6 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200">Email</a>
                </div>
            </div>


            <p class="pt-12 container tracking-tighter font-bold text-3xl">
                    or send a general message:
            </p>

            <div class=" pt-10 grid grid-cols-3 gap-6 object-center">
                <div className="py-4">
                    <input type="name" name="contact_firstName" id="contact_firstName" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="first name" />
                </div>
                <div className="py-4">
                    <input type="name" name="contact_lastName" id="contact_lastName" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="last name" />
                </div>
                <div className="py-4">
                    <input type="email" name="contact_email" id="contact_email" class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" placeholder="your email" />
                </div>
            </div>

            <div className="py-4">
                <textarea rows="5" className="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none" id="message" type="message" placeholder="type message here" />
            </div>

            <div className=" pb-20 mb-10 ">
                <button className="text-white rounded-md ring-1 ring-gray-500 tracking-tighter float-right bg-purple-600 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-2 px-6 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200">Send</button>
            </div>
        
            
        </div>
    )
}

export default contact