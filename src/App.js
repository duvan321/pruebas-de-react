import './App.css';
import { Route, Routes ,BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"
import Inicio from "./paginas/Inicio"
import Destacados from "./paginas/Destacados"
import Contacto from "./paginas/Contacto"
import Informacion from "./paginas/Informacion"

function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path= "/" element={<Inicio/>}/>
        
        <Route path= "/contacto" element={<Contacto/>}/>
        <Route path="/destacados" element={<Destacados/>} />
        <Route path= "/informacion" element={<Informacion/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
