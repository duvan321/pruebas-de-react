import { fireEvent, render, screen } from "@testing-library/react";
import Start from "../pages/Start";

test("The component has a title", () => {
  render(<Start />);
  const h1 = screen.getByText(/My tests with input/);
  expect(h1).toBeInTheDocument();
});
test("username input should be processed", () => {
  render(<Start />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});
test("password input needs to be processed", () => {
  render(<Start />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});
test("the button should be rendered", () => {
  render(<Start />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("the username input must be empty", () => {
  render(<Start />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl.value).toBe("");
});
test("password entry must be empty", () => {
  render(<Start />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

test("the button must be disabled", () => {
  render(<Start />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});
test("payload should not be rendered", () => {
  render(<Start />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/please wait/);
});
test("el error no debe ser visible", () => {
  render(<Start />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

test("the username input should change", () => {
  render(<Start />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const tesvalue = "test";
  fireEvent.change(usernameInputEl, {
    target: { value: tesvalue },
  });
  expect(usernameInputEl.value).toBe(tesvalue);
});
test("la entrada de contraseña debe cambiar", () => {
  render(<Start />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const tesvalue = "test";
  fireEvent.change(passwordInputEl, {
    target: { value: tesvalue },
  });
  expect(passwordInputEl.value).toBe(tesvalue);
});

test("the button should not be disabled when inputs exist", () => {
  render(<Start />);
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

test("load should be rendered on click", () => {
  render(<Start />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const tesvalue = "test";
  fireEvent.change(usernameInputEl, {
    target: { value: tesvalue },
  });
  fireEvent.click(buttonEl);

  expect(buttonEl).not.toHaveTextContent(/please wait/);
});
