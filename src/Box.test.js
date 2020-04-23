import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';



//smoke test
it("renders without crashing", function () {
  render(<Box />);
});


//snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(< Box />);
  expect(asFragment()).toMatchSnapshot();
});


//looks for button on Box to make sure it renders properly
it("has the X button", function () {
  const { asFragment, getByRole } = render(< Box />);
   let button = getByRole("button");
  
expect(button).toBeInTheDocument()

});
