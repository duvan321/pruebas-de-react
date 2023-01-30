import { render, screen } from "@testing-library/react";
import Informacion from "../paginas/Informacion";

describe("Texbox component", () => {
    
  test("la caja de texto se encuentra en el documento", () => {
    render(<Informacion />);
    const article = screen.getByRole("article", { name: "parrafo principal" });
    expect(article).toBeInTheDocument();
  });

  test("la caja con el texto tiene un color inicial", () => {
    render(<Informacion />);
    const article = screen.getByRole("article", { name: "parrafo principal" });
    expect(article).toHaveStyle({
      backgroundColor: "blue",
    });
  });
  
});
