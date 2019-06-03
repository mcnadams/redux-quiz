import { shallow } from 'enzyme';
import React from 'react';
import Comment from './Comment';

describe('Comment component', () => {
  it('renders Comment', () => {
    const wrapper = shallow(<Comment comment={'comment'} />);

    expect(wrapper).toMatchSnapshot();
  });
});