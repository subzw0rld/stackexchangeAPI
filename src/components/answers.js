import React, {Component} from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAnswers } from '../actions/index';
import AnswerListing from './answerlisting';
import appconfig from '../config/appconfig';

class Answers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questionBody: []
    }
  }

  componentWillMount() {
    let questionBody = appconfig.searchResultCollection.filter((item) => {
      return item = item.question_id == this.props.params.questionID;
    });

    this.setState({questionBody});

    this.props.fetchAnswers(this.props.params.questionID);
  }

  componentWillUnmount() {
    this.setState({questionBody:[]});
  }

  renderAsHTML(str) {
    return {__html: str};
  }

  render() {
    return (
      <div className = 'answer'>
        <span className = 'title'>Question</span>
        <div className = 'question-box'>
          {this.state.questionBody.map((item) => {
            let data = item.body;
            return <div key = {item.question_id} dangerouslySetInnerHTML = {this.renderAsHTML(data)}></div>
          })}
        </div>
        <AnswerListing />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAnswers }, dispatch);
}

export default connect(null, mapDispatchToProps)(Answers);
