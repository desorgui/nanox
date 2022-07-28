import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from '../redux/configureStore';
import '@testing-library/jest-dom';
import App from '../App'
function renderWithProviders(
    ui,
    {
      preloadedState = {},
      // Automatically create a store instance if no store was passed in
      storetest = store,
      ...renderOptions
    } = {}
  ) {
    function Wrapper({ children }) {
      return <Provider store={storetest}>{children}</Provider>
    }
    return { storetest, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
  }

test('When user click the my Profile link', async () => {
  renderWithProviders(<App />)
    fireEvent.click(screen.getByText('My Profile'));
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
})