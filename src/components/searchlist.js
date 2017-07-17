import React, {Component} from 'react';
import { render } from 'react-dom';
import { Link } from "react-router";

import { connect } from 'react-redux';
import SearchModel from '../model/searchModel';

import '../lib/date';

class SearchList extends Component {

  renderSearchResult(searchListObj) {
    //Caching the data to localStorage to save additional http request to fetch the question body when the page routes to the answers route
    SearchModel.cacheSearchResults(searchListObj.data.items);
    return searchListObj.data.items.map((item) => {
      const path = `/answers/${item.question_id}`;
      //The time in milliseconds returned by the json is returning a value of 18 Jan 1970
      const answerCreationDate = new Date(parseInt(item.creation_date)).toString("MMM dd yyyy");

      let tagList = item.tags.map((tag, index) => {
        return <span key = {index}>{tag}</span>
      })
      return <li key = {item.question_id} className = 'listing'>
                <Link to = {path} className = 'listing-item'>
                  {item.title}
                </Link>
                <p className = 'taglist'>
                  <span>Tags:</span>
                  {tagList}
                </p>
                <p><span>Score: </span>{item.score}</p>
                <p><span>Views: </span>{item.view_count}</p>
                <p><span>Answer Count: </span>{item.answer_count}</p>
                <p><span>Answered Time: </span>{answerCreationDate}</p>
              </li>
    });
  }

  render() {
    return(
      <div className = 'search-list'>
        <div className = 'search-result-container'>
          <h1 className = 'search-result-heading'>Search Results</h1>
          <ul className = 'search-list-container'>
            {this.props.search.map(this.renderSearchResult)}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ search }) {
  return { search };
}

export default connect(mapStateToProps)(SearchList);
