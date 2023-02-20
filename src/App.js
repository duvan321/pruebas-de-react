import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Start from "./pages/Start";
import Featured from "./pages/Featured";
import Contact from "./pages/Contact";
import Information from "./pages/Information";
import EditSession from "./pages/EditSession";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Start />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/information" element={<Information />} />
          <Route path="/input" element={<EditSession />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
