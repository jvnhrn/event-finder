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
        <div className="App" >
            <Router>
                <TopNav />
                <Switch >
<<<<<<< HEAD
                    <Route path = "/resetredux" component = { ReduxResetPage } />
                    <Route path="/search" component={ SearchPage } /> 
                    <Route path="/explore" component={ ExplorePage } />
                    <Route path="/hostevent" component={ CardInputForm} />
                </Switch>
            </Router>
            
=======
                    <Route path="/resetredux" component={ReduxResetPage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/explore" component={ExplorePage} />
                    <Route path="/hostevent" component={HostEventPage} />
                </Switch>
            </Router>
>>>>>>> 93f5287ab9e837b67086d3fabf7fce4e453c3aa0
        </div>

    );
}


export default App;