import React from "react";
import { render } from '@testing-library/react';
import {Search} from './index';


test('<Search /> renders', () => {
    const { getByText } = render(<Search />);
    const linkElement = getByText(/Enter your location/i);
    //Make sure the Search card renders
    expect(linkElement).toBeInTheDocument();
  });
  