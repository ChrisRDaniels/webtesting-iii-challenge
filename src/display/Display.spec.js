//Test Away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Display from "./Display";

test("Display is now rendering", () => {
  render(<Display />);
});

test("Display is rendering Open", () => {
  const { getByText } = render(<Display closed={false} />);
  const open = getByText(/Open/i);
  fireEvent.click(getByText(/Open/i));
  expect(open).toHaveClass('green-led');
});

test("Display is rendering Closed", () => {
  const { getByText } = render(<Display closed={true} />);
  const closed = getByText(/Closed/i);
  fireEvent.click(getByText(/Closed/i));
  expect(closed).toHaveClass('red-led');
});

test("Display is rendering Unlocked", () => {
  const { getByText } = render(<Display locked={false} />);
  const unlocked = getByText(/Unlocked/i);
  fireEvent.click(getByText(/Unlocked/i));
  expect(unlocked).toHaveClass('green-led');
});

test("Display is rendering Locked", () => {
  const { getByText } = render(<Display locked={true} />);
  const locked = getByText(/Locked/i);
  fireEvent.click(getByText(/Locked/i));
  expect(locked).toHaveClass('red-led');
});