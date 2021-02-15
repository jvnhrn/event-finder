import React, { useState, useEffect } from 'react';
import ExploreCard from './ExploreCard';
import axios from 'axios';

function ExplorePage() {

    const [cardsData, setCardsData] = useState([]);
    const [category, setCategory] = useState('All');
    const [searchText, setSearchText] = useState('');

    const activeStyled = "px-3 border-2 border-blue-700 rounded-2xl focus:outline-none font-bold text-blue-700";

    const inactiveStyled = "px-3 border-2 border-white rounded-2xl font-light text-gray-500 hover:text-gray-400 focus:outline-none hover:text-blue-800 hover:font-bold";

    const [yogaActive, setYogaActive] = useState(inactiveStyled);
    const [allActive, setAllActive] = useState(inactiveStyled);
    const [festivalActive, setFestivalActive] = useState(inactiveStyled);
    const [literatureActive, setLiteratureActive] = useState(inactiveStyled);
    const [restaurantActive, setRestaurantActive] = useState(inactiveStyled);


    useEffect(() => {
        const getAllCards = async () => {
            try {
                const allCardsData = await axios.get('http://localhost:7777/explore');
                setCardsData(allCardsData.data);
            } catch (error) {
                console.error(error);
            }
        }
        getAllCards()
    }, []);

    useEffect(() => {
        console.log(category);

        const getCategory = async () => {
            let categoryData = false
            try {
                if (category === 'All') {
                    categoryData = await axios.get('http://localhost:7777/explore');
                } else {
                    categoryData = await axios.get(`http://localhost:7777/category/?category=${category}`);
                }
                setCardsData(categoryData.data);
            } catch (error) {
                console.error(error);
            }
        }

        if (!!category) {
            getCategory()
            setCategory('')
        }
    }, [category]);

    useEffect(() => {
        const getSearch = async () => {
            try {
                const searchData = await axios.get(`http://localhost:7777/search/?searchtext=${searchText}`);
                setCardsData(searchData.data);
            } catch (error) {
                console.error(error);
            }
        }
        getSearch()
    }, [searchText]);

    return (
        <div>
            <div className="container">

                <form className="content-center pl-8 ml-12 pt-6" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} role="search">

                    <input className="bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none tracking-tighter" /* id="search" type="search" */ placeholder="find out what's popping" />
                    <button className="hidden absolute inset-0 rounded-md" type="submit">Go</button>
                </form>
            </div>

            <div class="container hidden md:block md:ml-12 md:pr-12 md:space-x-8 py-6 text-center tracking-tighter" >
                <button 
                    onClick={() => setCategory('All') + setAllActive(activeStyled) + setYogaActive(inactiveStyled) + setFestivalActive(inactiveStyled) + setLiteratureActive(inactiveStyled) + setRestaurantActive(inactiveStyled)} 
                    class={(allActive)}
                    >All
                </button>
                <button 
                    onClick={() => setCategory('Yoga') + setAllActive(inactiveStyled) + setYogaActive(activeStyled) + setFestivalActive(inactiveStyled) + setLiteratureActive(inactiveStyled) + setRestaurantActive(inactiveStyled)} 
                    className={(yogaActive)}
                 >Yoga
                </button>
                <button 
                    onClick={() => setCategory('Festival') + setAllActive(inactiveStyled) + setYogaActive(inactiveStyled) + setFestivalActive(activeStyled) + setLiteratureActive(inactiveStyled) + setRestaurantActive(inactiveStyled)}
                    className={(festivalActive)}
                    >Festival
                </button>
                <button 
                    onClick={() => setCategory('Literature') + setAllActive(inactiveStyled) + setYogaActive(inactiveStyled) + setFestivalActive(inactiveStyled) + setLiteratureActive(activeStyled) + setRestaurantActive(inactiveStyled)} 
                    className={(literatureActive)}
                    >Literature
                </button>
                <button onClick={() => setCategory('Restaurant')} class="focus:outline-none text-md font-light text-grey-500 hover:text-gray-400" >Restaurant</button>
            </div>

            < div className="grid grid-cols-3 gap-2" >
                {
                    cardsData.map((card) => {
                        console.log(card);
                        console.log(category)
                        return < ExploreCard
                            event_id={card.event_id}
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
                            event_start_date={card.event_start_date}
                            event_end_date={card.event_end_date}
                            open_spots={card.open_spots}
                        />
                    })
                }
            </div >
        </div >
    )
}

export default ExplorePage