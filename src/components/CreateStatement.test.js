import React from 'react';
import CreateStatement from './CreateStatement';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<CreateStatement />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})