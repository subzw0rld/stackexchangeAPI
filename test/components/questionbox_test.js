import { renderComponent, expect } from '../test_helper';
import QuestionBox from '../../src/components/questionbox';

describe('Testing QuestionBox', () => {
  const component;

  beforeEach(() => {
    const props = {[{question_id: 1, creation_date: 1499886262, body: "Question 1", tags: ["reactjs", "redux", "react-redux"], title: 'Some Title', score: 1, view_count: 2, answer_count: 5 },
              {question_id: 2, creation_date: 1499886280, body: "Question 2",  tags: ["reactjs", "redux", "react-redux"], title: 'Another Title', score: 1, view_count: 2, answer_count: 7 }
    ] , questionID: 1};

    component = renderComponent(QuestionBox, null, props);
  });

  it('Displays question', () => {
    expect(component).to.contain('Question 1');
  });

});
