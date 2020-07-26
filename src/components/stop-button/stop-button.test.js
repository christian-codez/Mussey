import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import StopButton from './StopButton';

const mockStore = configureMockStore();
const store = mockStore({});

it('should render without throwing an error', () => {
  expect(
    shallow(
      <Provider store={store}>
        <StopButton />
      </Provider>
    ).length
  ).toEqual(1);

  expect(
    shallow(
      <Provider store={store}>
        <StopButton />
      </Provider>
    )
  ).toMatchSnapshot();
});
