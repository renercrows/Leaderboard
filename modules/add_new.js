const addNew = async (name, points) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1NoC71hDswXGQoJ5wACA/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: points,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addNew;
