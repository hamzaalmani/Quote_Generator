import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/favorites";
import Footer from "./components/Footer";


function App() {
  const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem("favorites");
  return saved ? JSON.parse(saved) : [];
});

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  // star (favorite) functionality
  const toggleFavorite = (quote) => {
    const exists = favorites.find((item) => item.id === quote.id);

    if (exists) {
      setFavorites(favorites.filter((item) => item.id !== quote.id));
    } else {
      setFavorites([...favorites, quote]);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;