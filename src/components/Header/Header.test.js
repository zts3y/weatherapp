import React from "react";
import { render, cleanup } from '@testing-library/react';
import Header from './index';

afterEach(cleanup);

test('<Header /> renders', () => {
    const { getByTestId } = render(<Header />);
    const linkElement = getByTestId("app-title");
    //Make sure the title renders
    expect(linkElement.textContent).toBe("Palmetto Weather");
  });
  