import React, { useState, useEffect } from 'react';
import ExploreCard from './ExploreCard';
import axios from 'axios';
import { divIcon } from 'leaflet';
import opencage from 'opencage-api-client';

function ExplorePage() {

    const [cardsData, setCardsData] = useState([]);
    const [category, setCategory] = useState('All');
    const [searchText, setSearchText] = useState('');


    const [searchAddress, setSearchAddress] = useState('');
    const [newAdddressGPSCoordinates, setNewAdddressGPSCoordinates] = useState({ lat: 0, lng: 0 })
    const [listAddresses, setListAddresses] = useState([])
    const [showAddressButton, setShowAddressButton] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState('')

    const [distanceRange, setDistanceRange] = useState(10)

    const [selectionStartDate, setSelectionStartDate] = useState('');
    const [selectionEndDate, setSelectionEndDate] = useState('');

    // Address search and map positioning
    useEffect(() => {
        const getCoordinates = async () => {
            try {
                const gpsCoordinates = await opencage.geocode({ q: searchAddress, key: 'dbcf492b8db545538b8b5d9acbeb0313' });
                console.log(gpsCoordinates.results);
                setListAddresses(gpsCoordinates.results)
            } catch (error) {
                console.error(error);
            }
        };
        getCoordinates()
    }, [searchAddress])

    useEffect(() => {
        if (!!searchAddress.length) {
            setShowAddressButton(true)
        } else {
            setShowAddressButton(false)
            setNewAdddressGPSCoordinates({ lat: 0, lng: 0 })
        }
    }, [searchAddress])

    const activeStyled = "px-3 border-2 border-blue-700 rounded-2xl focus:outline-none font-bold text-blue-700";

    const inactiveStyled = "px-3 border-2 border-white rounded-2xl font-bold text-gray-400 focus:outline-none hover:text-blue-800 hover:font-bold active:bg-none";

    const [yogaActive, setYogaActive] = useState(inactiveStyled);
    const [allActive, setAllActive] = useState(inactiveStyled);
    const [musicActive, setMusicActive] = useState(inactiveStyled);
    const [literatureActive, setLiteratureActive] = useState(inactiveStyled);
    const [foodActive, setFoodActive] = useState(inactiveStyled);
    const [architectureActive, setArchitectureActive] = useState(inactiveStyled);
    const [potteryActive, setPotteryActive] = useState(inactiveStyled);
    const [randomActive, setRandomActive] = useState(inactiveStyled);


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
                const searchData = await axios.get(`http://localhost:7777/search/?searchtext=${searchText}&&distanceRange=${distanceRange}&&selectionStartDate=${selectionStartDate}&&selectionEndDate=${selectionEndDate}&&gpsLat=${newAdddressGPSCoordinates.lat}&&gpsLng=${newAdddressGPSCoordinates.lng}`);
                setCardsData(searchData.data);
                console.log(searchData.data);
            } catch (error) {
                console.error(error);
            }
        }
        getSearch()
    }, [searchText, distanceRange, selectionStartDate, selectionEndDate, searchAddress, newAdddressGPSCoordinates]);


    const smallActiveStyled = "px-3 py-1 rounded text-purple-700 underline bg-purple-100 focus:outline-none";

    const smallInactiveStyled = "px-3 font-light text-gray-400 focus:outline-none hover:text-purple-800 hover:underline hover:font-bold active:bg-none";

    const [orderStyleOne, setOrderStyleOne] = useState(null); 
    const [orderStyleTow, setOrderStyleTow] = useState(null);
    const [orderStyleThree, setOrderStyleThree] = useState(null); 

    const [orderByTitleState, setOrderByTitleState] = useState(false);

    useEffect(() => {
        const orderByTitle = () => {
            const newCardsData = [...cardsData];
            console.log(newCardsData)
            const sortArray = (first, second) => {
                newCardsData.sort(function (a, b) {
                    var nameA = a.event_title.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.event_title.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return first;
                    }
                    if (nameA > nameB) {
                        return second;
                    }
                    return 0;
                });
            }
            if (orderByTitleState) {
                sortArray(-1, 1)
            } else if (!orderByTitleState) {
                sortArray(1, -1)
            }
            console.log(newCardsData)
            setCardsData(newCardsData);
            console.log(cardsData)
        }
        orderByTitle()
    }, [orderByTitleState])



    const [orderByDateState, setOrderByDateState] = useState(false);

    useEffect(() => {
        const orderByDate = () => {
            const newCardsData = [...cardsData];
            console.log(newCardsData)
            const sortArray = (first, second) => {
                newCardsData.sort(function (a, b) {
                    var nameA = a.event_start_date.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.event_start_date.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return first;
                    }
                    if (nameA > nameB) {
                        return second;
                    }
                    return 0;
                });
            }
            if (orderByDateState) {
                sortArray(-1, 1)
            } else if (!orderByDateState) {
                sortArray(1, -1)
            }
            console.log(newCardsData)
            setCardsData(newCardsData)
            console.log(cardsData)
        }
        orderByDate()
    }, [orderByDateState])

    const [orderByPriceState, setOrderByPriceState] = useState(false);

    useEffect(() => {
        const orderByPrice = () => {
            const newCardsData = [...cardsData];
            console.log(newCardsData)
            if (orderByPriceState) {
                newCardsData.sort(function (a, b) {
                    return a.event_price - b.event_price
                });
            } else if (!orderByPriceState) {

                newCardsData.sort(function (a, b) {
                    return b.event_price - a.event_price
                });
            }
            console.log(newCardsData)
            setCardsData(newCardsData);
            console.log(cardsData)
        }
        orderByPrice()
    }, [orderByPriceState])


    return (

        <div className="container mx-auto">
            <div>
                <form className="content-center md:flex lg:mt-32 md:mt-24 mt-12 block" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} role="search">
                    <p class="2xl:text-5xl xl:text-3xl lg:text-xl md:text-lg text-3xl font-bold text-gray-800 2xl:w-2/3 xl:w-2/5 lg:w-2/5 md:w-2/4 md:pb-0 pb-6">find out what's popping</p>
                    <input className="bg-gray-100 rounded-2xl px-4 py-2 container focus:ring-purple-600 outline-none tracking-tighter" /* id="search" type="search" */ placeholder="search" />
                    <button className="hidden absolute inset-0 rounded-md" type="submit">Go</button>
                </form>
            </div>

            <div className="flex my-12">
                <p class="text-lg text-gray-600">Start Date</p>
                <form className="content-left pl-8" value={selectionStartDate} onChange={(e) => { setSelectionStartDate(e.target.value) }} role="search">
                    <input className="bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none tracking-tighter" type="datetime-local" placeholder="Start" />
                    <button className="hidden absolute inset-0 rounded-md" type="submit">Go</button>
                </form>
                <p class="text-lg text-gray-600">End Date</p>
                <form className="content-left pl-8" value={selectionEndDate} onChange={(e) => { setSelectionEndDate(e.target.value) }} role="search">
                    <input className="bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none tracking-tighter" type="datetime-local" placeholder="Final" />
                    <button className="hidden absolute inset-0 rounded-md" type="submit">Go</button>
                </form>
            </div>

            <div>
                <form className="content-left pl-8 ml-12 pt-6">
                    <input value={searchAddress}
                        onChange={(e) => { setSearchAddress(e.target.value) }}
                        className="bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none tracking-tighter"
                        placeholder="address, city, country"
                        type="text"
                    />
                    <button className="hidden absolute inset-0 rounded-md" type="submit">Go</button>
                </form>

                <div class="origin-top-right absolute left-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {
                            listAddresses.map((address) => {
                                return (
                                    <form>
                                        <button
                                            onClick={() => {
                                                setSearchAddress(address.formatted)
                                                setNewAdddressGPSCoordinates(address.geometry);
                                                setShowAddressButton(false)
                                                setSelectedAddress(address.formatted)
                                            }}
                                            type='button'
                                            className={
                                                showAddressButton && !!searchAddress.length && selectedAddress != searchAddress
                                                    ?
                                                    "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                    :
                                                    "hidden block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                            }
                                        >
                                            {address.formatted}
                                        </button>
                                    </form>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            <div className="container">
                <form className="content-left pl-8 ml-12 pt-6" >
                    <div>Ditance from address</div>
                    <input value={distanceRange} onChange={(e) => { setDistanceRange(e.target.value) }} type="range" min="2" max="20" step="2" />
                    <div>{distanceRange} Km</div>
                </form>
            </div>

            <div class="container hidden md:block md:pr-12 md:space-x-8 py-6 text-center tracking-tighter" >
                <p class="2xl:text-3xl xl:text-xl lg:text-xl md:text-lg text-3xl font-bold text-gray-800 mb-12">sort it like it's hot</p>
                <button 
                    onClick={() => setCategory('All') + setAllActive(activeStyled) + setYogaActive(inactiveStyled) + setMusicActive(inactiveStyled) + setLiteratureActive(inactiveStyled) + setFoodActive(inactiveStyled) + setPotteryActive(inactiveStyled) + setRandomActive(inactiveStyled) + setArchitectureActive(inactiveStyled)}
                    class={(allActive)}
                    >All
                </button>
                <button
                    onClick={() => setCategory('Architecture') + setAllActive(inactiveStyled) + setYogaActive(inactiveStyled) + setMusicActive(inactiveStyled) + setLiteratureActive(inactiveStyled) + setFoodActive(inactiveStyled) + setPotteryActive(inactiveStyled) + setRandomActive(inactiveStyled) + setArchitectureActive(activeStyled)}
                    className={(architectureActive)}
                >Architecture
                </button>
                <button 
                    onClick={() => setCategory('Yoga') + setAllActive(inactiveStyled) + setYogaActive(activeStyled) + setMusicActive(inactiveStyled) + setLiteratureActive(inactiveStyled) + setFoodActive(inactiveStyled) + setPotteryActive(inactiveStyled) + setRandomActive(inactiveStyled) + setArchitectureActive(inactiveStyled)} 
                    className={(yogaActive)}
                 >Yoga
                </button>
                <button 
                    onClick={() => setCategory('Music') + setAllActive(inactiveStyled) + setYogaActive(inactiveStyled) + setMusicActive(activeStyled) + setLiteratureActive(inactiveStyled) + setFoodActive(inactiveStyled) + setPotteryActive(inactiveStyled) + setRandomActive(inactiveStyled) + setArchitectureActive(inactiveStyled)}
                    className={(musicActive)}
                    >Music
                </button>
                <button 
                    onClick={() => setCategory('Literature') + setAllActive(inactiveStyled) + setYogaActive(inactiveStyled) + setMusicActive(inactiveStyled) + setLiteratureActive(activeStyled) + setFoodActive(inactiveStyled) + setPotteryActive(inactiveStyled) + setRandomActive(inactiveStyled) + setArchitectureActive(inactiveStyled)} 
                    className={(literatureActive)}
                    >Literature
                </button>
                <button 
                    onClick={() => setCategory('Food') + setAllActive(inactiveStyled) + setYogaActive(inactiveStyled) + setMusicActive(inactiveStyled) + setLiteratureActive(inactiveStyled) + setFoodActive(activeStyled) + setPotteryActive(inactiveStyled) + setRandomActive(inactiveStyled) + setArchitectureActive(inactiveStyled)} 
                    className={(foodActive)}
                    >Food
                </button>
                <button
                    onClick={() => setCategory('Pottery') + setAllActive(inactiveStyled) + setYogaActive(inactiveStyled) + setMusicActive(inactiveStyled) + setLiteratureActive(inactiveStyled) + setFoodActive(inactiveStyled) + setPotteryActive(activeStyled) + setRandomActive(inactiveStyled) + setArchitectureActive(inactiveStyled)}
                    className={(potteryActive)}
                >Pottery
                </button>
                <button
                    onClick={() => setCategory('Random') + setAllActive(inactiveStyled) + setYogaActive(inactiveStyled) + setMusicActive(inactiveStyled) + setLiteratureActive(inactiveStyled) + setFoodActive(inactiveStyled) + setPotteryActive(inactiveStyled) + setRandomActive(activeStyled) + setArchitectureActive(inactiveStyled)}
                    className={(randomActive)}
                >Random
                </button>
            </div>

            <div class="container hidden md:block md:ml-12 md:pr-12 md:space-x-8 py-6 text-center tracking-tighter" >
                <button 
                    onClick={() => setOrderByTitleState(!orderByTitleState) + setOrderStyleOne(!orderStyleOne) + setOrderStyleTow(false) + setOrderStyleThree(false)} 
                    className={orderStyleOne ? (smallActiveStyled) : (smallInactiveStyled)}
                    >Title
                </button>
                <button 
                    onClick={() => setOrderByDateState(!orderByDateState) + setOrderStyleOne(false) + setOrderStyleTow(!orderStyleTow) + setOrderStyleThree(false)} 
                    className={orderStyleTow ? (smallActiveStyled) : (smallInactiveStyled)}
                    >Date
                </button>
                <button 
                    onClick={() => setOrderByPriceState(!orderByPriceState) + setOrderStyleOne(false) + setOrderStyleTow(false) + setOrderStyleThree(!orderStyleThree)} 
                    className={orderStyleThree ? (smallActiveStyled) : (smallInactiveStyled)}
                    >Price
                </button>
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