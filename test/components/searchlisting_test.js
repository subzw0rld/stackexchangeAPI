import { renderComponent, expect } from '../test_helper';
import SearchListing from '../../src/components/searchlisting';

describe('Testing SearchListing Component', () => {
  let component;
  beforeEach(() => {
    const props = {
      search: [{question_id: 1, creation_date: 1499886262, tags: ["reactjs", "redux", "react-redux"], title: 'Some Title', score: 1, view_count: 2, answer_count: 5 },
              {question_id: 2, creation_date: 1499886280, tags: ["reactjs", "redux", "react-redux"], title: 'Another Title', score: 1, view_count: 2, answer_count: 7 }
    ]};
    component = renderComponent(SearchListing, null, props);
  });

  it('Has a list of search results', () => {
    expect(component).to.contain('Some Title');
    expect(component).to.contain('Another Title');
  });

});
