import { renderComponent, expect } from '../test_helper';
import Search from '../../../src/container/Search/';

describe('Testing Search Component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Search);
  });

  it('has Search component' () => {
    expect(component.find('.search')).to.exist;
  });

});
