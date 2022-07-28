const getBoard = async () => {
  const fetchedScores = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1NoC71hDswXGQoJ5wACA/scores/')
    .then((response) => response.json())
    .then((scores) => scores.result);

  return fetchedScores;
};

export default getBoard;