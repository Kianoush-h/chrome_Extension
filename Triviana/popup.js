document.addEventListener('DOMContentLoaded', function () {
  const questionContainer = document.getElementById('question-text');
  const answerContainer = document.getElementById('answer-container');
  const revealButton = document.getElementById('reveal-button');
  const nextRoundButton = document.getElementById('next-round-button');

  let currentQuestion = null;
  let currentAnswer = null;

  // Function to fetch trivia from the API
  function fetchTrivia() {
    fetch('https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia?category=general', {
      headers: {
        'X-RapidAPI-Key': '301d156134mshbb40d28a3d2b9ddp1b42a3jsnb00eeebc8a45',
        'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          currentQuestion = data[0].question;
          currentAnswer = data[0].answer;

          questionContainer.textContent = currentQuestion;
          answerContainer.textContent = currentAnswer;
          answerContainer.style.display = 'none'; // Hide the answer initially
          revealButton.disabled = false;
        } else {
          questionContainer.textContent = 'Failed to fetch the question';
        }
      })
      .catch((error) => {
        questionContainer.textContent = 'Failed to fetch the question';
        console.error('Error fetching trivia:', error);
      });
  }

  // Initial fetch when the extension loads
  fetchTrivia();

  // Event listener for the "Reveal" button
  revealButton.addEventListener('click', function () {
    answerContainer.style.display = 'block'; // Show the answer
    revealButton.disabled = true;
  });

  // Event listener for the "Next Round" button
  nextRoundButton.addEventListener('click', function () {
    answerContainer.style.display = 'none'; // Hide the answer again
    revealButton.disabled = false; // Reset "Reveal" button
    fetchTrivia();
  });
});
