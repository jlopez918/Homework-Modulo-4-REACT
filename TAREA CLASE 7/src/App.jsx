import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import CharacterPage from "./pages/characterPage/characterPage";
import EpisodesPage from "./pages/episodesPage/episodesPage";
import NotFoundPage from "./pages/notFoundPage/notFoundPage";
import "./App.css";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
