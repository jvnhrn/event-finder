import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ReduxResetPage from './components/ReduxResetPage/ReduxResetPage'

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/resetredux" component={ReduxResetPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
