document.addEventListener('DOMContentLoaded', function () {
  const factBox = document.getElementById('fact-box');
  const factText = document.getElementById('fact-text');
  const nextFactButton = document.getElementById('next-fact-button');

  let currentFactIndex = -1;
  let facts = [];

  // Function to fetch facts from the API
  function fetchFacts() {
    fetch('https://facts-by-api-ninjas.p.rapidapi.com/v1/facts?limit=5', {
      headers: {
        'X-RapidAPI-Key': '60b1749600mshf5efa892be090d8p12bc1fjsn442507bb021a',
        'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          facts = data.map((factObj) => factObj.fact);
          showNextFact();
        } else {
          factText.textContent = 'Failed to fetch facts';
        }
      })
      .catch((error) => {
        factText.textContent = 'Failed to fetch facts';
        console.error('Error fetching facts:', error);
      });
  }

  // Function to display the next fact
  function showNextFact() {
    currentFactIndex = (currentFactIndex + 1) % facts.length;
    factText.textContent = facts[currentFactIndex];
  }

  // Initial fetch when the extension loads
  fetchFacts();

  // Event listener for the "Next Fact" button
  nextFactButton.addEventListener('click', function () {
    showNextFact();
  });
});
