import { renderComponent, expect } from '../test_helper';
import SearchComponent from '../../src/components/searchcomponent';

describe('Testing SearchComponent' () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SearchListing);
  });

  it('Should have SearchBar' () => {
    expect(component.find('.search-bar')).to.exist;
  });

  it('Should have SearchList' () => {
    expect(component.find('.search-list')).to.exist;
  });

});
