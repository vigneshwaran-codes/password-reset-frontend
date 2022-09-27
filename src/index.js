import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* Redux Management */
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
