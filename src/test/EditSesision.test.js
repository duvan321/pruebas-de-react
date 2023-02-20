import { render, screen } from "@testing-library/react";
import EditSession from "../pages/EditSession";

test("list title", () => {
  render(<EditSession />);
  const input = screen.getByText(/select files/i);
  expect(input).toBeInTheDocument();
});

test("the label must be in function", () => {
  render(<EditSession />);
  const labelEl = screen.getByLabelText("select files");

  expect(labelEl).toBeInTheDocument();
});
