import { useState } from "react";

function QuoteCard({
  quote,
  favorites,
  toggleFavorite,
  showNewButton,
  onNewQuote
}) {
  const [copied, setCopied] = useState(false);

  if (!quote) return null;

  const isFavorite = favorites.find(
    (item) => item.id === quote.id
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `"${quote.text}" - ${quote.author || "Unknown"}`
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className="quote-card">
        <p>"{quote.text}"</p>
        <p>— {quote.author || "Unknown"}</p>

        <div className="quote-actions">
          {showNewButton && (
            <button
              className="new-quote-button"
              onClick={onNewQuote}
            >
              New Quote
            </button>
          )}

          <button
            className="star-button"
            onClick={() => toggleFavorite(quote)}
            style={{
              color: isFavorite ? "gold" : "gray"
            }}
          >
            {isFavorite ? "★" : "☆"}
          </button>

          <button
            className="copy-button"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
      </div>

      {copied && (
        <div className="toast">
          Quote copied!
        </div>
      )}
    </>
  );
}

export default QuoteCard;