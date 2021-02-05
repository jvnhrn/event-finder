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


function App() {
    return (
        <div class='flex flex-col h-full' >
            <Router>
            <TopNav/>
                <Switch >
                    <Route path="/resetredux" component={ReduxResetPage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/explore" component={ExplorePage} />
                    <Route path="/hostevent" component={HostEventPage} />
                </Switch>
                <Footer /> 
            </Router>
            <LandingPage />
        </div>

    );
}


export default App;