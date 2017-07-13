import AppConstants from '../config/appconstants';

export default function (state = [], action) {
  state=[]; //Hack because in case of multiple Ajax request the state is getting repopulated
  switch (action.type) {
    case AppConstants.ANSWER_SEARCH:
    return [action.payload, ...state];

  }

  return state;
}
