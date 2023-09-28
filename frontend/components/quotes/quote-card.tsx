import { useState, useEffect } from 'react';
import { Quote } from '../../types/Quote';

const QuoteCard = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch('/api/quote');
      const data = await res.json() as Quote;
      setQuote(data);
    };
    fetchQuote();
  }, []);

  return (
    <div>
      {quote ? (
        <>
          <p>{quote.text}</p>
          <p>By {quote.author.name}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuoteCard;
