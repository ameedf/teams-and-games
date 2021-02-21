const router = require('express').Router();
const teamsRepository = require('./teamsRepository')

router.get('/', async (req, res) => {
  try {
    const results = await teamsRepository.findAll();
    res.json(results);
  } catch (err) {
    return { error: err };
  }
});

router.post('/', async (req, res) => {
  try {
    const team = req.body;
    const results = await teamsRepository.save(team);
    res.json(results);
  } catch (err) {
    return { error: err };
  }
});

module.exports = router;