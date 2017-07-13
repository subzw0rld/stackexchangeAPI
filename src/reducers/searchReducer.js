import AppConstants from '../config/appconstants';

export default function (state = [], action) {
  switch (action.type) {
    case AppConstants.QUESTION_SEARCH:
      return [action.payload, ...state];
  }

  return state;
}
