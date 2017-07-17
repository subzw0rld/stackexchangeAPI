import { expect } from '../test_helper';
import answerReducer from '../../src/reducers/answerReducer';
import AppConstants from '../../src/config/appconstants';
import axios from 'axios';

describe('Testing answerReducer', () => {
  let SEARCH_URL;
  let SEARCH;
  beforeEach(() => {
    let questionID = 45065675;
    SEARCH_URL = `${appconfig.ANSWER_URL.base_url}${questionID}${appconfig.ANSWER_URL.filter}`;
    SEARCH = axios.get(SEARCH_URL);
  });

  it('Handles unknown actions', () => {
    expect(answerReducer([], {})).to.eql([]);
  });

  it(`Handles action of type ${AppConstants.ANSWER_SEARCH}`, () => {
    const action = {type: AppConstants.ANSWER_SEARCH, payload: SEARCH };
    expect(answerReducer([], action)).to.eql([action.payload]);
  });

});
