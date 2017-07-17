import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from "react-router";
import Answers from '../Answer/';

import routes from '../../route/';

export default class Search extends Component {
  render() {
    return(
      <div className='search'>
        <Router history = { browserHistory } >
          {routes}
        </Router>
      </div>
    );
  }
}
