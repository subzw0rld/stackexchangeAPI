import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from "react-router";

import SearchListing from '../../components/searchlisting';
import Answers from '../../components/answers';

export default class Search extends Component {
  render() {
    return(
      <div className='search'>
        <Router history = { browserHistory } >
          <Route path ='/' component = {SearchListing}></Route>
          <Route path='/answers' component = {Answers}>
            <Route path ='/answers/:questionID' component = {Answers} />
          </Route>
        </Router>
      </div>
    );
  }
}
