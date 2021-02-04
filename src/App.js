import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReduxResetPage from './components/ReduxResetPage/ReduxResetPage';
import TopNav from './components/Navigation/TopNav';
import SearchPage from './components/SearchPage/SearchPage';
import HostEventPage from './components/HostEventPage/HosteEventPage';
import ExplorePage from './components/ExplorePage/ExplorePage';
import CardInputForm from './components/ExplorePage/CardInputForm';


function App() {
    return (
        <div className = "App" >
            <Router>
                <TopNav />
                <Switch >
                    <Route path = "/resetredux" component = { ReduxResetPage } />
                    <Route path="/search" component={ SearchPage } /> 
                    <Route path="/explore" component={ ExplorePage } />
                    <Route path="/hostevent" component={ CardInputForm} />
                </Switch>
            </Router>
            
        </div>

    );
}


export default App;