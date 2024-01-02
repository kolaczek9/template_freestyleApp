// Define the leaderboard array
const leaderboard = [];

// Function to add a new score to the leaderboard
function addScore(playerName, score) {
  // Create a new score object
  const newScore = { playerName, score };

  // Find the correct position to insert the new score based on the score value
  let insertIndex = 0;
  while (insertIndex < leaderboard.length && score < leaderboard[insertIndex].score) {
    insertIndex++;
  }

  // Insert the new score at the correct position
  leaderboard.splice(insertIndex, 0, newScore);
}

// Function to retrieve the highest scores from the leaderboard
function getHighestScores(limit) {
  // Return the highest scores based on the specified limit
  return leaderboard.slice(0, limit);
}

// Function to display the leaderboard
function displayLeaderboard() {
  // Get the leaderboard display element from the HTML page
  const leaderboardDisplay = document.getElementById("leaderboard-display");

  // Clear the leaderboard display
  leaderboardDisplay.innerHTML = "";

  // Loop through the leaderboard and create HTML elements to display each score
  for (const score of leaderboard) {
    const scoreElement = document.createElement("div");
    scoreElement.textContent = `${score.playerName}: ${score.score}`;
    leaderboardDisplay.appendChild(scoreElement);
  }
}
