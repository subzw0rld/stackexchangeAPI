import { renderComponent, expect } from '../test_helper';
import AnswerListing from '../../src/components/answerlisting';

describe('Testing AnswerListing' () => {
  let component;

  beforeEach(() => {
    component = renderComponent(AnswerListing, null, props);
    const props = [{
      data: {
        items: [
          {
            answer_id: 45145248,
            body: "<p>Answer 1</p>",
            creation_date: 1500297099,
            is_accepted: true,
            last_activity_date: 1500297099,
            question_id: 45145047,
            score: 0,
            quota_max: 10000,
            quota_remaining: 9991
          }
        ]
      }
    }];
  });

  it('Displays list of answers', () => {
    expect(component).to.contain('<p>Answer 1</p>');
  });

});
