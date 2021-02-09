import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReduxResetPage from './components/ReduxResetPage/ReduxResetPage';
import TopNav from './components/Navigation/TopNav';
import SearchPage from './components/SearchPage/SearchPage';
import HostEventPage from './components/HostEventPage/HosteEventPage';
import ExplorePage from './components/ExplorePage/ExplorePage';
import LandingPage from './components/LandingPage/LandingPage';
import 'leaflet/dist/leaflet.css';
import '../src/App.css'
import Footer from './components/Footer/Footer';
import ProfilPage from './components/ProfilPage/ProfilPage';
import RegisterModal from './components/RegisterModal/RegisterModal';
import LoginModal from './components/LoginModal/LoginModal';


function App() {
    return (
        <div class='flex flex-col h-full' >
            <Router>
                <TopNav />
                <Switch >
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/resetredux" component={ReduxResetPage} />
                    <Route path="/explore" component={ExplorePage} />
                    <Route path="/hostevent" component={HostEventPage} />
                    <Route path="/profilpage" component={ProfilPage} />
                    <Route path="/register" component={RegisterModal} />
                    <Route path="/login" component={LoginModal} />
                </Switch>
                {/* <Footer /> */}
            </Router>
        </div>

    );
}


export default App;