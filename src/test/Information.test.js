import { render, screen } from "@testing-library/react";
import Information from "../pages/Information";

describe("Texbox component", () => {
  test("the text box is in the document", () => {
    render(<Information />);
    const article = screen.getByRole("article", { name: "main paragraph" });
    expect(article).toBeInTheDocument();
  });

  test("the box with the text has an initial color", () => {
    render(<Information />);
    const article = screen.getByRole("article", { name: "main paragraph" });
    expect(article).toHaveStyle({
      backgroundColor: "blue",
    });
  });
});
