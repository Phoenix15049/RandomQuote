document.addEventListener('DOMContentLoaded', () => {
  const quoteElement = document.getElementById('text');
  const authorElement = document.getElementById('author');
  const newQuoteButton = document.getElementById('new-quote');
  const tweetQuoteLink = document.getElementById('tweet-quote');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      quoteElement.textContent = data.content;
      authorElement.textContent = `- ${data.author}`;
      tweetQuoteLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${data.content}" - ${data.author}`
      )}`;
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  newQuoteButton.addEventListener('click', fetchQuote);

  fetchQuote();
});
