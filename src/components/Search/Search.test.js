import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import {Router} from "react-router-dom";
import { Search } from "./index";

afterEach(cleanup);

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  withRouter: component => {
    component.defaultProps = {
      ...component.defaultProps,
      router: {
        pathname: 'something'
      },
    };

    return component;
  }
}));

const validateSearchForm = jest.fn();

test("<Search /> renders", () => {
  const { getByText } = render(<Search />);
  const linkElement = getByText(/Enter your location/i);
  //Make sure the Search card renders
  expect(linkElement).toBeInTheDocument();

  fireEvent.click(getByText("Search"));

});

// Needs more investigation as to why function isn't being called.
/*test("<Search /> Submit", () => {
  const { getByText,getByPlaceholderText } = render(<Search />);
  
  const input = getByPlaceholderText("Enter your City, State or Zip code")
  const button = getByText("Search");
  console.log(button)
  
  fireEvent.change(input, {target: {value: "Tazewell, VA"}})
  fireEvent.click(button);

  expect(validateSearchForm).toHaveBeenCalledTimes(1);
})*/
