document.addEventListener('DOMContentLoaded', function () {
  const quoteContainer = document.getElementById('quote-text');
  const nameContainer = document.getElementById('quote-name');
  const refreshButton = document.getElementById('refresh-button');

  // Function to fetch the quote from the API
  function fetchQuote() {
    fetch('https://quotel-quotes.p.rapidapi.com/quotes/random', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '60b1749600mshf5efa892be090d8p12bc1fjsn442507bb021a',
        'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com',
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        quoteContainer.textContent = data.quote;
        nameContainer.textContent = `- ${data.name}`;
      })
      .catch((error) => {
        quoteContainer.textContent = 'Failed to fetch the quote';
        console.error('Error fetching quote:', error);
      });
  }

  // Initial fetch when the extension loads
  fetchQuote();

  // Event listener for the "Refresh" button
  refreshButton.addEventListener('click', fetchQuote);
});
