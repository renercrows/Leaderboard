const genBoard = (leaderboard, scores) => {
  leaderboard.innerHTML = '';
  scores.sort((a, b) => parseInt(b.score, 10) - parseInt(a.score, 10));
  scores.forEach((item) => {
    const leaderboardItem = document.createElement('li');
    leaderboardItem.classList.add('flex-box', 'item');
    if (scores.indexOf(item) % 2 === 0) {
      leaderboardItem.classList.add('even');
    } else {
      leaderboardItem.classList.add('odd');
    }

    const nameContainer = document.createElement('span');
    nameContainer.classList.add('item-player');
    nameContainer.innerHTML = item.user;

    const scoreContainer = document.createElement('span');
    scoreContainer.classList.add('item-score');
    scoreContainer.innerHTML = item.score;

    leaderboardItem.appendChild(nameContainer);
    leaderboardItem.appendChild(scoreContainer);

    leaderboard.appendChild(leaderboardItem);
  });
};

export default genBoard;