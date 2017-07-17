import './scss/main.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';

import Search from './container/Search/'
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <div className='container wrapper'>
      <Search />
    </div>
  </Provider>
  , document.getElementById('root'));
