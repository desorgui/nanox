import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../redux/configureStore';
import Rocket from './Rocket';
import Missions from './Missions.js';
import Rockets from './Rockets.js';
import Profile from './Profile.js';
import Navbar from './Navbar';

const renderReservedRockets = (reserved) => {
  const { tree } = render(
    <Provider store={store}>
      <Rocket
        reserved={reserved}
        id={1}
        name="Falcon 1"
        description="Test description"
        image="https://imgur.com/DaCfMsj.jpg"
      />
    </Provider>,
  );
  return tree;
};

const renderJoinedMissions = (joined) => {
  const { tree } = render(
    <Provider store={store}>
      <Missions
        joined={joined}
        id={1}
        name="Thaicom"
        description="Test description"
      />
    </Provider>,
  );
  return tree;
};

describe('Rocket and Mission component tests', () => {
  it('Renders first Rocket', () => {
    expect(renderReservedRockets(true)).toMatchSnapshot();
  });
  it('Renders first Mission', () => {
    expect(renderJoinedMissions(true)).toMatchSnapshot();
  });
});

describe('Renders main Components', () => {
  it('Renders Navbar component', () => {
    const tree = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Renders Rockets component', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Renders Missions component', () => {
    const tree = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Renders Profile component', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
