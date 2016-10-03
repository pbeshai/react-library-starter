import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from '../MyComponent';

describe('<MyComponent />', () => {
  it('renders a color box with color from defaultProps', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('.color-box').length).toBe(1);
    expect(wrapper.find('.color-box').prop('style').background)
      .toBe(MyComponent.defaultProps.defaultColor);
    expect(wrapper.state('color')).toBe(MyComponent.defaultProps.defaultColor);
  });

  it('sets the initial color to the passed in defaultColor', () => {
    const wrapper = shallow(<MyComponent defaultColor="#f00" />);
    expect(wrapper.state('color')).toBe('#f00');
  });

  it('clicking the button goes to next color in list', () => {
    const wrapper = shallow(<MyComponent />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('color')).toBe('#edf8b1');
  });
});
