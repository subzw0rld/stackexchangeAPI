import React, {Component} from 'react';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';

import { search } from '../actions/index';

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  onSearch(event) {
    this.props.search(this.state.searchTerm);
  }

  render() {
    return(
      <div className = 'search-bar'>
        <input type = 'text' className='search-input' placeholder="Enter Search Phrase" value = {this.state.searchTerm} onChange = { this.handleChange } />
        <button className = 'search-btn' onClick = { this.onSearch } disabled={!this.state.searchTerm}>Search</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
