import React from 'react';
import renderer from 'react-test-renderer';

test('Calculator renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
