const apiRouter = require('express').Router();

apiRouter.use('/teams', require('../teams/teamsRouter'));
apiRouter.use('/games', require('../games/gamesRouter'));

module.exports = apiRouter;