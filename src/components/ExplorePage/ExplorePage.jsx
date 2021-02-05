import React, { useState, useEffect } from 'react';
import ExploreCard from './ExploreCard';
import { Button } from 'react-bootstrap';
const axios = require('axios');

function ExplorePage() {

    const [cardsData, setCardsData] = useState([]);
    const [categoryName, setCategoryName] = useState('all');

    useEffect(() => {
        const getCategory = async () => {
            try {
                let allCardsData = false;
                if (categoryName == 'all') {
                    allCardsData = await axios.get('http://localhost:8080/explorer');
                } else {
                    allCardsData = await axios.get(`http://localhost:8080/category/?category=${categoryName}`);
                }
                setCardsData(allCardsData.data);
            } catch (error) {
                console.error(error);
            }
        }
        getCategory();
    }, [categoryName]);

    return (
        <div>
            <div>
                <form className="content-center px-24 pt-10" onSubmit="event.preventDefault();" role="search">
                    <input className="bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none tracking-tighter" id="search" type="search" placeholder="find out what's popping" />
                    <button className="hidden absolute inset-0 rounded-md" type="submit">Go</button>
                </form>
            </div>

            {/* <div class="container hidden md:block md:ml-24 md:pr-12 md:space-x-8 py-6 font-bold text-gray-600 text-center tracking-tighter">
                <a href="../Categories/Yoga/yoga.jsx" class="text-md font-light text-grey-500 hover:text-gray-900">Yoga</a>
                <a href="#" class="text-md font-light text-grey-500 hover:text-gray-900">Literature</a>
                <a href="#" class="text-md font-light text-grey-500 hover:text-gray-900">Architecture/Culture</a>
                <a href="#" class="text-md font-light text-grey-500 hover:text-gray-900">Music</a>
                <a href="#" class="text-md font-light text-grey-500 hover:text-gray-900">Artsy-Crafty</a>
                <a href="#" class="text-md font-light text-grey-500 hover:text-gray-900">Random</a>
            </div> */}

            <div className="grid grid-cols-7 gap-2">
                <Button variant="primary" onClick={() => setCategoryName('all')}>All</Button>
                <Button variant="primary" onClick={() => setCategoryName('Yoga')}>Yoga</Button>
                <Button variant="primary" onClick={() => setCategoryName('Festival')}>Festival</Button>
                <Button variant="primary" onClick={() => setCategoryName('Restaurant')}>Restaurant</Button>
                <Button variant="primary" onClick={() => setCategoryName('Literature')}>Literature</Button>
            </div>

            < div className="grid grid-cols-3 gap-2" >
                {
                    cardsData.map((card) => {
                        console.log(cardsData);
                        return < ExploreCard
                            event_category={card.event_category}
                            event_title={card.event_title}
                            event_description={card.event_description}
                            event_location={card.event_location}
                            event_country={card.event_country}
                            event_city={card.event_city}
                            event_postalcode={card.event_postalcode}
                            event_address={card.event_address}
                            event_host_phone={card.event_host_phone}
                            event_host_email={card.event_host_email}
                            event_price={card.event_price}
                            event_date={card.event_date}
                            open_spots={card.open_spots}
                        />
                    })
                }
            </div >
        </div >
    )
}

export default ExplorePage