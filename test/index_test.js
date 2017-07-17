import { renderComponent, expect } from '../test_helper';
import Index from '../src/';

describe('Testing Index', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('Has the Home container', () => {
    expect(component.find('.home')).to.exist;
  });

  it('Has the correct classes', () => {
    expect(component).to.have.class('wrapper');
    expect(component).to.have.class('container');
  });
});
