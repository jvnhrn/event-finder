import React, { useState, useEffect } from 'react';
import hotpodyoga from '../Categories/Yoga/hotpodyoga.png';
import userProfilTest from './userProfilTest.json';
import ProfilCard from './ProfilCard'

import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/app.actions'

function ProfilPage(props) {

    const [userData, setUserData] = useState('');
    const [user_id, setUser_id] = useState(props.applicationState.appReducer.user_id)

    useEffect(() => {
        console.log(user_id)
        const getUserData = async () => {
            try {
                const allUsersData = await axios.get(`http://localhost:7777/userdata/?user_id=${user_id}`);
                setUserData(allUsersData.data);
                console.log(allUsersData.data);
            } catch (error) {
                console.error(error);
            }
        }
        getUserData()
    }, []);


    return (
        <div>
            {
                < ProfilCard
                    key={userData.user_id}
                    userid={userData.user_id}
                    username={userData.user_name}
                    firstname={userData.user_first_name}
                    lastname={userData.user_last_name}
                    phonenumber={userData.user_phone}
                    email={userData.user_email}
                    password={userData.user_password}
                    img={userData.img}
                    favouritecategories={userData.favouritecategories}
                    upcomingevents={userData.upcomingevents}
                    passedevents={userData.passedevents}
                />
            }
        </div>

    )
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(ProfilPage);