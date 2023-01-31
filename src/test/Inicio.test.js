import { fireEvent, render, screen } from "@testing-library/react";
import Inicio from "../paginas/Inicio";


test("El componente tiene un titulo", () => {
    render(<Inicio />);
    const h1 = screen.getByText(/Mis pruebas con input/);
    expect(h1).toBeInTheDocument(
);
  });
test("la entrada de nombre de usuario debe ser procesada", () => {
  render(<Inicio />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});
test("la entrada de contraseña debe ser procesada", () => {
  render(<Inicio />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});
test("el botón debe ser renderizado", () => {
  render(<Inicio />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("la entrada de nombre de usuario debe estar vacía", () => {
  render(<Inicio />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl.value).toBe("");
});
test("la entrada de contraseña debe estar vacía", () => {
  render(<Inicio />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

test("el boton debe estar deshabilitado", () => {
  render(<Inicio />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});
test("la carga no debe ser renderizada", () => {
    render(<Inicio />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).not.toHaveTextContent(/please wait/);
  });
test("el error no debe ser visible", () => {
  render(<Inicio />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

test("la entrada de nombre de usuario debe cambiar", () => {
  render(<Inicio />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const tesvalue = "test";
  fireEvent.change(usernameInputEl, {
    target: { value: tesvalue },
  });
  expect(usernameInputEl.value).toBe(tesvalue);
});
test("la entrada de contraseña debe cambiar", () => {
  render(<Inicio />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const tesvalue = "test";
  fireEvent.change(passwordInputEl, {
    target: { value: tesvalue },
  });
  expect(passwordInputEl.value).toBe(tesvalue);
});

test("el botón no debe deshabilitarse cuando existen entradas", () => {
  render(<Inicio />);
  const buttonEl = screen.getByRole("button");

  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const tesvalue = "test";
  fireEvent.change(usernameInputEl, {
    target: { value: tesvalue },
  });
  fireEvent.change(passwordInputEl, {
    target: { value: tesvalue },
  });
  expect(buttonEl).not.toBeDisabled();
});

test("la carga debe representarse al hacer click", () => {
    render(<Inicio />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const tesvalue = "test";
    fireEvent.change(usernameInputEl, {
      target: { value: tesvalue },
    });
    fireEvent.click(buttonEl);
    
    expect(buttonEl).not.toHaveTextContent(/please wait/);
});

