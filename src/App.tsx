import './App.css';
import './index.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projets from './pages/Projets';
import VeillesTechnos from './pages/VeillesTechnos';
import Entreprises from './pages/Entreprises';
import ScrollToTop from "./components/ScrollToTop";
import TableauSynthese from "./pages/Synthese";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/veilles-technos" element={<VeillesTechnos />} />
        <Route path="/entreprises" element={<Entreprises />} />
        <Route path="/tableau-synthese" element={<TableauSynthese />} />
      </Routes>
    </>
  );
}

export default App;
