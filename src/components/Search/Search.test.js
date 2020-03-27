import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Search } from "./index";

afterEach(cleanup);

const validateSearchForm = jest.fn();

test("<Search /> renders", () => {
  const { getByText } = render(<Search />);
  const linkElement = getByText(/Enter your location/i);
  //Make sure the Search card renders
  expect(linkElement).toBeInTheDocument();

  fireEvent.click(getByText("Search"));

});

test("<Search /> Submits", () => {
  const { getByText,getByPlaceholderText } = render(<Search />);
  
  const input = getByPlaceholderText("Enter your City, State")
  console.log(input)
  
  //fireEvent.change(input, {target: {value: "Tazewell, VA US"}})
  //fireEvent.click(getByText("Search"));

  //expect(validateSearchForm).toHaveBeenCalledTimes(1);
})
