import React from "react";
import { render } from '@testing-library/react';
import Logo from './Logo';


test('<Logo /> renders', () => {
    const { getByRole } = render(<Logo />);
    const linkElement = getByRole(/img/i,{hidden: true});
    //Make sure the image logo renders
    expect(linkElement).toBeInTheDocument();
  });
  