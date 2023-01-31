import { render, screen } from "@testing-library/react";
import Destacados from "../paginas/Destacados";

test("Titulo de lista", () => {
  render(<Destacados />);
  const LinkElement = screen.getByText(/frutas y verduras/i);
  expect(LinkElement).toBeInTheDocument();
});
test("Lista de frutas (10)", () => {
  render(<Destacados />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toEqual(10);
});
test("render title", () => {
  render(<Destacados />);
  const title = screen.getByTestId("mytestid");
  expect(title).toBeInTheDocument();
});
test("sum should be 10", () => {
  render(<Destacados />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("10");
});
