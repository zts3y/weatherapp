import React from "react";
import { render, cleanup } from '@testing-library/react';
import Forecast from './index';

global.fetch = require("jest-fetch-mock");

afterEach(cleanup);

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useHistory: () => {
        push : jest.fn()
    },
    useParams: () => ({
      loc: 'Tazewell, VA'
    }),
  }));


test('<Forecast /> renders', () => {
    const { getByTestId, debug, rerender } = render(<Forecast />);
    
    const locationHeader = getByTestId("app-title");
    debug()
    //Make sure the title renders
    expect(locationHeader.textContent).toBe("Your forecast for Tazewell.");
  });
  