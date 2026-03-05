import QuoteCard from "../components/QuoteCard";
import { useEffect } from "react";


function Favorites({ favorites, toggleFavorite }) {

  useEffect(() => {
    document.title = "Quote Generator | Favorites";
  }, []);
  return (
    <div className="favorites-page">
      <h2 className="page-title">Favorite Quotes</h2>

      {favorites.length === 0 ? (
        <p className="empty-state">
          You have no favorite quotes yet.
        </p>
      ) : (
        favorites.map((quote) => (
          <QuoteCard
            key={quote.id}
            quote={quote}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            showNewButton={false}
          />
        ))
      )}
    </div>
  );
}

export default Favorites;