import { expect } from '../test_helper';

import AppConstants from '../../src/config/appconstants';
import appconfig from '../../src/config/appconfig';
import { search, fetchAnswers } from '../../src/actions/searchlisting';
import axios from 'axios';

describe('Testing Actions', () => {

  describe('search Action', () => {
    let searchAction;
    let SEARCH_URL;
    let SEARCH;
    beforeEach(() => {
      searchAction = search('react');
      SEARCH_URL = `${appconfig.SEARCH_URL.base_url}${searchTerm}${appconfig.SEARCH_URL.filter}`;
      SEARCH = axios.get(SEARCH_URL);
    });

    it('Has the correct action type', () => {
      expect(searchAction.type).to.equal(AppConstants.QUESTION_SEARCH);
    });
    it('Has the correct action payload ', () => {
      expect(searchAction.payload).to.equal(SEARCH);
    });
  });

  describe('fetchAnswers Action', () => {
    let fetchAnswersAction;
    let SEARCH_URL = `${appconfig.ANSWER_URL.base_url}${questionID}${appconfig.ANSWER_URL.filter}`;
    let SEARCH = axios.get(SEARCH_URL);

    beforeEach(() => {
      fetchAnswersAction = fetchAnswers(45065675);
      SEARCH_URL = `${appconfig.ANSWER_URL.base_url}${searchTerm}${appconfig.ANSWER_URL.filter}`;
      SEARCH = axios.get(SEARCH_URL);
    });

    it('Has the correct action type', () => {
      expect(fetchAnswersAction.type).to.equal(AppConstants.ANSWER_SEARCH);
    });
    it('Has the correct action payload ', () => {
      expect(fetchAnswersAction.payload).to.equal(SEARCH);
    });
  });
});
