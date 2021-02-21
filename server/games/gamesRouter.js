const router = require('express').Router();
const gamesRepository = require('./gamesRepository')

// Get all
router.get('/', async (req, res) => {
  try {
    const results = await gamesRepository.findAll();
    res.json(results);
  } catch (err) {
    return { error: err };
  }
});

// Create new 
router.post('/', async (req, res) => {
  try {
    const game = req.body;
    const results = await gamesRepository.save(game);
    res.json(results);
  } catch (err) {
    return { error: err };
  }
});

module.exports = router;