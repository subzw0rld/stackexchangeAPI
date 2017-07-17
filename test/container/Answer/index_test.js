import { renderComponent, expect } from '../test_helper';
import Answer from '../../../src/container/Answer/';

describe('Testing Answer Component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Answer);
  });

  it('has QuestionBox component' () => {
    expect(component.find('.question-box')).to.exist;
  });

  it('has AnswerListing component' () => {
    expect(component.find('.answer-list')).to.exist;
  });

});
