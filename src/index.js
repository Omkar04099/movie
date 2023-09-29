import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import movies from './reducers';


const store = createStore(movies);
// console.log('store', store);
// console.log('Brfore State', store.getState());


// store.dispatch({
//   type:"ADD_MOVIES",
//   movies: [{name:'Thor'}]
// });

// console.log('After State', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);


