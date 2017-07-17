import React, {Component} from 'react';
import SearchModel from '../model/searchModel';


export default class QuestionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBody: []
    }
  }

  componentWillMount() {
    //Using localStorage for a persistant data. The Question box would display the question even after browser refresh.
    let questionBody = SearchModel.fetchCachedData().filter((item) => {
      return item = item.question_id == this.props.questionID;
    });

    this.setState({questionBody});
  }

  renderAsHTML(str) {
    return {__html: str};
  }

  render() {
    return (
      <div className = 'question-box'>
        <span className = 'title'>Question</span>
        <div className = 'question-box-body'>
          {this.state.questionBody.map((item) => {
            let data = item.body;
            return <div key = {item.question_id} dangerouslySetInnerHTML = {this.renderAsHTML(data)}></div>
          })}
        </div>
      </div>
    )
  }
}
