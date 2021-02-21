const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 8080;

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use('/api', require('./utils/apiRouter'));

const test = async () => {
  const teamsRepo = require('./teams/teamsRepository');
  const gamesRepo = require('./games/gamesRepository');
  try {
    const teams = [];
    for (let i = 1; i <= 10; i++) {
      teams.push(await teamsRepo.save({ name: `team-${i}`, points: i }));
    }

    for (let g = 0; g < 5; g++) {
      const teamA = teams[g];
      const teamB = teams[g + 5];
      const game = { firstTeamId: teamA.id, firstTeamScore: g, secondTeamId: teamB.id, secondTeamScore: 5 - g, }
      await gamesRepo.save(game);
    }
  } catch (err) {
    console.log(err);
  }
}
// test();

app.listen(port, () => console.log(`Server is running on port ${port}`))