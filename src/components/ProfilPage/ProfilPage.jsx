import React from 'react';
import hotpodyoga from '../Categories/Yoga/hotpodyoga.png';
import userProfilTest from './userProfilTest.json';
import ProfilCard from './ProfilCard'

function ProfilPage (){
    return(
        <div>
            {
                userProfilTest.map((loggedinUser) => {
                    console.log(userProfilTest);
                    return < ProfilCard
                        userid={loggedinUser.userid}
                        firstname={loggedinUser.firstname}
                        lastname={loggedinUser.lastname}
                        email={loggedinUser.email}
                        password={loggedinUser.password}
                        img={loggedinUser.img}
                        favouritecategories={loggedinUser.favouritecategories}
                        upcomingevents={loggedinUser.upcomingevents}
                        passedevents={loggedinUser.passedevents}
                    />
                })
            }
        </div>   

    )
}

export default ProfilPage; 



