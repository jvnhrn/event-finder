import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/main.css';

import { Provider } from 'react-redux';
import { persistor, store } from './components/store/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate persistor={persistor} loading={<span>Loading...</span>} >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);

