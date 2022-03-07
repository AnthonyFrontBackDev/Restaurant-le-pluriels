import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Carte from "./pages/Carte";
import Galerie from "./pages/Galerie";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="carte" element={<Carte />} />
        <Route path="galerie" element={<Galerie />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
