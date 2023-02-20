/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen } from "@testing-library/react";

import Contact from "../pages/Contact";
describe("productpage", () => {
  test("The component has a title", () => {
    render(<Contact />);
    const h1 = screen.getByText(/checkbox examples/);
    expect(h1).toBeInTheDocument();
  });
  test("The component has a paragraph", () => {
    render(<Contact />);
    const p = screen.getByText(/Lorem/);
    expect(p).toBeInTheDocument();
  });

  //let checkbox;
  test("if the checkbox is in the component and it is deactivated", () => {
    render(<Contact />);
    const checkbox = screen.getByText("Accept cookies");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });
});
