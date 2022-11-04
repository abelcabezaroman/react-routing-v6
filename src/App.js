import "./App.css";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import CharactersDetailPage from "./pages/CharactersDetailPage/CharactersDetailPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <header>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/characters">Characters</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/contact" element={<ContactPage></ContactPage>} />
            <Route
              path="/characters"
              element={<CharactersPage></CharactersPage>}
            />
            <Route
              path="/characters/:idCharacter"
              element={<CharactersDetailPage></CharactersDetailPage>}
            />
          </Routes>

          <footer>Soy un footer</footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
