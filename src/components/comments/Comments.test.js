import { shallow } from 'enzyme';
import React from 'react';
import Comments from './Comments';

describe('Comments component', () => {
  it('renders Comments', () => {
    const wrapper = shallow(<Comments comments={['Comments', 'commentsss']} deleteComment={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  });
});