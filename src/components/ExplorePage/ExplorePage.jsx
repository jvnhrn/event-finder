import React, { Component } from 'react';
import Link from 'react-router-dom';
import Random from '../Categories/Random/random';
import Yoga from '../Categories/Yoga/yoga';






export class ExplorePage extends Component {
    render() {
        return (
            <div>

                <div>
                        <form className="content-center px-24 pt-10" onSubmit="event.preventDefault();" role="search">
                            <input className="bg-gray-100 rounded-md px-4 py-4 container focus:ring-purple-600 outline-none" id="search" type="search" placeholder="find out what's popping" />
                            <button className="hidden absolute inset-0 rounded-md" type="submit">Go</button>    
                        </form>
                </div>

                <div class="container hidden md:block md:ml-24 md:pr-12 md:space-x-8 py-10 font-bold text-gray-600 text-center tracking-tighter">
                    <a href="../Categories/Yoga/yoga.jsx" class="text-2xl font-light text-grey-500 hover:text-gray-900">Yoga</a>
                    <a href="#" class="text-2xl font-light text-grey-500 hover:text-gray-900">Literature</a>
                    <a href="#" class="text-2xl font-light text-grey-500 hover:text-gray-900">Architecture/Culture</a>
                    <a href="#" class="text-2xl font-light text-grey-500 hover:text-gray-900">Music</a>
                    <a href="#" class="text-2xl font-light text-grey-500 hover:text-gray-900">Artsy-Crafty</a>
                    <a href="#" class="text-2xl font-light text-grey-500 hover:text-gray-900">Random</a>
                 </div>

                <div className = "overflox-x-hidden">
                <Yoga/>
                </div>
                    

              
                
            </div>
        )
    }
}

export default ExplorePage
