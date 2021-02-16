import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReduxResetPage from './components/ReduxResetPage/ReduxResetPage';
import TopNav from './components/Navigation/TopNav';
import HostEventPage from './components/HostEventPage/HosteEventPage';
import ExplorePage from './components/ExplorePage/ExplorePage';
import LandingPage from './components/LandingPage/LandingPage';
import 'leaflet/dist/leaflet.css';
import '../src/App.css'
import Footer from './components/Footer/Footer';
import ProfilPage from './components/ProfilPage/ProfilPage';
import RegisterModal from './components/RegisterModal/RegisterModal';
import LoginModal from './components/LoginModal/LoginModal';
import contact from './components/Footer/contact/contact';
import ProfilDetails from './components/ProfilPage/ProfilDetails';


function App() {
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openRegisterModal, setOpenRegisterModal] = useState(false); 

    return (
        <div class='flex flex-col h-full' >
            <Router>
                <TopNav openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} openRegisterModal={openRegisterModal} setOpenRegisterModal={setOpenRegisterModal} />
                {openLoginModal ? <LoginModal openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} openRegisterModal={openRegisterModal} setOpenRegisterModal={setOpenRegisterModal}/> : null}
                {openRegisterModal ? <RegisterModal openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} openRegisterModal={openRegisterModal} setOpenRegisterModal={setOpenRegisterModal} /> : null}
                <Switch >
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/resetredux" component={ReduxResetPage} />
                    <Route path="/explore" component={ExplorePage} />
                    <Route path="/hostevent" component={HostEventPage} />
                    <Route path="/profilpage" component={ProfilPage} />
                    <Route path="/register" component={RegisterModal} />
                    <Route path="/login" component={LoginModal} />
                    <Route path="/contact" component={contact} />
                    <Route path="/edit" component={ProfilDetails} />
                </Switch>
                <Footer openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} openRegisterModal={openRegisterModal} setOpenRegisterModal={setOpenRegisterModal} />
            </Router>
        </div>

    );
}


export default App;