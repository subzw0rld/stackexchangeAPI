import React, {Component} from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class AnswerListing extends Component {

  renderAsHTML(str) {
    return {__html: str};
  }

  renderAnswer(answerObj) {
    return answerObj.data.items.map((item, index) => {
      const textData = `<div class = 'count'>${index + 1}</div><div class = 'answer-body'>${item.body}</div>`;
      return <li key= {item.answer_id} className = {'listing ' + (item.is_accepted? 'highlight-answer':'') } dangerouslySetInnerHTML = {this.renderAsHTML(textData)}></li>
    });
  }

  render() {
    return(
      <div className = 'answer-list'>
        <h1>Answers</h1>
        <ul>
          {this.props.answer_search.map(this.renderAnswer.bind(this))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ answer_search }) {
  return { answer_search };
}

export default connect(mapStateToProps)(AnswerListing);
