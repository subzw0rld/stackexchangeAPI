import { expect } from '../test_helper';
import searchReducer from '../../src/reducers/searchReducer';
import AppConstants from '../../src/config/appconstants';
import axios from 'axios';

describe('Testing searchReducer', () => {
  let SEARCH_URL;
  let SEARCH;
  beforeEach(() => {
    let searchTerm = 'react';
    SEARCH_URL = `${appconfig.SEARCH_URL.base_url}${searchTerm}${appconfig.SEARCH_URL.filter}`;
    SEARCH = axios.get(SEARCH_URL);
  });

  it('Handles unknown actions', () => {
    expect(searchReducer([], {})).to.eql([]);
  });

  it(`Handles action of type ${AppConstants.QUESTION_SEARCH}`, () => {
    const action = {type: AppConstants.QUESTION_SEARCH, payload: SEARCH };
    expect(searchReducer([], action)).to.eql([action.payload]);
  });

});
