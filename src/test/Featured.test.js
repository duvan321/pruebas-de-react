import { render, screen } from "@testing-library/react";
import Featured from "../pages/Featured";

test("list title", () => {
  render(<Featured />);
  const LinkElement = screen.getByText(
    /the sum of fruits and vegetables are:/i
  );
  expect(LinkElement).toBeInTheDocument();
});
test("fruit list (10)", () => {
  render(<Featured />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toEqual(10);
});
test("render title", () => {
  render(<Featured />);
  const title = screen.getByTestId("mytestid");
  expect(title).toBeInTheDocument();
});
test("sum should be 10", () => {
  render(<Featured />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("10");
});
