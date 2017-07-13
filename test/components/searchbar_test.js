import { renderComponent, expect } from '../test_helper';
import SearchBar from '../../src/components/searchbar';

describe('Testing SearchBar Component', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(SearchBar);
  });

  it('Has an Input Text', () => {
    expect(component.find('input')).to.exist(homeComponent);
  });

  it('Has a Search Button', () => {
    expect(component.find('button')).to.exist(homeComponent);
  });

  it('Elements have the correct classes', () => {
    expect(component.find('input')).to.have.class('search-input');
    expect(component.find('button')).to.have.class('search-btn');
  });

  describe('Entering Search Text', () => {
    beforeEach(() => {
      component.find('input').simulate('change', 'search text');
    });

    it('Input field has a search text' () => {
      expect(component.find('input')).to.have.value('search text');
    });
  });

});
