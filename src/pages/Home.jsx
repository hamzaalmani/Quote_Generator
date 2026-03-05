import { useState, useEffect } from "react";
import { quotes } from "../data/quotes";
import QuoteCard from "../components/QuoteCard";

function Home({ favorites, toggleFavorite }) {
  const [quote, setQuote] = useState(null);

    useEffect(() => {
    document.title = "Quote Generator";
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    generateRandomQuote();
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <h2 className="section-title">Featured Quote</h2>

        <QuoteCard
          quote={quote}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          showNewButton={true}
          onNewQuote={generateRandomQuote}
        />
      </div>
    </div>
  );
}

export default Home;