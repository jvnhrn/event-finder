import React, { useState, useEffect } from 'react';
import ExploreCard from './ExploreCard';
const axios = require('axios');

function ExplorePage() {

    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        getAllCardsData();
    }, [])

    const getAllCardsData = async () => {
        try {
            const allCardsData = await axios.get('http://localhost:8080/explorer');
            await setCardsData(allCardsData.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div class="grid grid-cols-3 gap-2">
            {cardsData.map((card) => {
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
            })}
        </div>
    )
}

export default ExplorePage
