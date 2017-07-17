import React, {Component} from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAnswers } from '../../actions/index';
import AnswerListing from '../../components/answerlisting';
import QuestionBox from '../../components/questionbox';

class Answer extends Component {

  componentWillMount() {
    this.props.fetchAnswers(this.props.params.questionID);
  }

  render() {
    return (
      <div className = 'answer'>
        <QuestionBox questionID = {this.props.params.questionID} />
        <AnswerListing />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAnswers }, dispatch);
}

export default connect(null, mapDispatchToProps)(Answer);
