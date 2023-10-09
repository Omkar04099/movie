import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';


// function logger(obj, next, action)
// logger(obj)(next)
// using currying
// const logger = function({dispatch, getState}){
//   return function (next){
//     return function(action){
//       // middleware
//       console.log('ACTION_TYPE =', action.type);
//       next(action);
//     }
//   }
// }


// using middleware way
const logger = ({dispatch, getState})=> (next)=> (action)=> {
  // logger code
  // if(typeof action !== 'function'){
  //   // console.log('ACTION_TYPE =', action.type);
  //   next(action);
  // }
  next(action);
}


// const thunk = ({dispatch, getState})=> (next)=> (action)=> {
//   // logger code
//   // console.log('ACTION_TYPE =', action.type);
//       if(typeof action==='function'){
//         action(dispatch)
//       }
//       next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
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


