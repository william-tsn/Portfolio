import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projets from './pages/Projets';
import VeillesTechnos from './pages/VeillesTechnos';
import Entreprises from './pages/Entreprises';
import ScrollToTop from "./components/ScrollToTop";
import TableauSynthese from "./pages/Synthese";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/veilles-technos" element={<VeillesTechnos />} />
        <Route path="/Entreprises" element={<Entreprises />} />
        <Route path="/tableau-synthese" element={<TableauSynthese />} />
      </Routes>
    </Router>
  )
}

export default App
