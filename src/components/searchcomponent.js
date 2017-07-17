import React, {Component} from 'react';

import SearchBar from './searchbar';
import SearchList from './searchlist';


export default class SearchComponent extends Component {


  render() {
    return (
      <div>
        <SearchBar></SearchBar>
        <SearchList />
      </div>
    )
  }
}
