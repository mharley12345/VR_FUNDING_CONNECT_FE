import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware ,compose} from 'redux';
import { Router} from 'react-router-dom'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

import './index.css';
import App from './App';
const initalState = {}
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer, initalState, composeEnhancers(
 applyMiddleware(thunk,logger)
 ));
ReactDOM.render(
 
    <Provider store={store} >
         
        <App />
 
 
    </Provider>
, document.getElementById('root'));