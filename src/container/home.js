import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Search from '../container/Search/index';


export class Home extends Component {

  render() {
    return (
      <div className = 'home'>
        <Search/>
      </div>
    )
  };
}
