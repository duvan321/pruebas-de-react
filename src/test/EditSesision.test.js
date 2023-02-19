import { render, screen } from "@testing-library/react";
import EditSesion from "../paginas/EditSesion";

test("Titulo de lista", () => {
  render(<EditSesion />);
  const input = screen.getByText(/select files/i);
  expect(input).toBeInTheDocument();
});

test("el label debe estar en funcion", () => {
  render(<EditSesion />);
  const labelEl = screen.getByLabelText("select files");

  expect(labelEl).toBeInTheDocument();
});

