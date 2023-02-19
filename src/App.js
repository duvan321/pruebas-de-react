import './App.css';
import { Route, Routes ,BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"
import Inicio from "./paginas/Inicio"
import Destacados from "./paginas/Destacados"
import Contacto from "./paginas/Contacto"
import Informacion from "./paginas/Informacion"
import EditSesion from "./paginas/EditSesion"
function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path= "/" element={<Inicio/>}/>
        
        <Route path= "/contact" element={<Contacto/>}/>
        <Route path="/Featured" element={<Destacados/>} />
        <Route path= "/information" element={<Informacion/>} />
        <Route path= "/input" element={<EditSesion/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
