import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import store from '../redux/configureStore';
import Profile from '../components/Profile';

function renderWithProviders(
  ui,
  {
    // Automatically create a store instance if no store was passed in
    storetest = store,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) { // eslint-disable-line
    return <Provider store={storetest}>{children}</Provider>;
  }
  return { storetest, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

test('Data should be displayed in document on render', async () => {
  renderWithProviders(<Profile />);

  expect(screen.getByText('My Missions')).toBeInTheDocument();
});
