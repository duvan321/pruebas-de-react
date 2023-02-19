/* eslint-disable no-unused-vars */
import React from "react"
import { render, screen } from "@testing-library/react"

import Contacto from "../paginas/Contacto"
describe("productpage", ()=>{
    test("El componente tiene un titulo", () => {
        render(<Contacto />);
        const h1 = screen.getByText(/checkbox examples/);
        expect(h1).toBeInTheDocument(
    );
      });
      test("El componente tiene un parrafo", () => {
        render(<Contacto />);
        const p = screen.getByText(/Lorem/);
        expect(p).toBeInTheDocument(
    );
      });
      
    
    //let checkbox;
  test("si el checkbox esta en el componenete y esta desactivado",()=>{
    render(<Contacto/>)
    const  checkbox = screen.getByText("Accept cookies")
   
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  })  
  //test("si cambio el texto al pulsar el checbox", ()=>{
    //fireEvent.click(checkbox);
    //render(<Contacto/>)
    //const article = screen.getByRole("article", {name: "confirmacion cookies"})
    
    //expect(checkbox).toBeChecked();
    //expect(article.textContent).toBe("Cooikie aceptadas");
    
  //})
});