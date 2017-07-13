import { combineReducers } from 'redux';
import SearchReducer from './searchReducer';
import AnswerReducer from './answerReducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  answer_search: AnswerReducer
});

export default rootReducer;
