import '../scss/main.scss';
import React, {Component} from 'react';
import { render } from 'react-dom';

import { Home } from '../container/home';

export default class App extends Component {
  render() {
    return (
      <div className='container wrapper'>
        <Home></Home>
      </div>
    );
  }
}
