import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';




//smoke test
it("renders without crashing", function () {
  render(<BoxList />);
});


//snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(< BoxList />);
  expect(asFragment()).toMatchSnapshot();
});





//locates a box submitted by form

it("adds a new box", function () {
  const { getByRole, getByLabelText, queryByText } = render(<BoxList />);


  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");


  const submitButton = queryByText("Submit!");


  fireEvent.change(widthInput, { target: { value: "100px" } });
  fireEvent.change(heightInput, { target: { value: "100px" } });
  fireEvent.change(colorInput, { target: { value: "tomato" } });
  fireEvent.click(submitButton);

  let box = queryByText("X");

  expect(box.parentElement).toHaveStyle("width:100px; height:100px; background-color: tomato;")





})

