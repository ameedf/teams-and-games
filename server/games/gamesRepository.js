const dbService = require('../utils/dbService');

class GamesRepository {
  // This will return a promise..
  findAll() {
    return dbService.executeQuery('SELECT * FROM games');
  }

  async findById(id) {
    const results = await dbService.executeQuery('SELECT * FROM games WHERE id = ?', [id]);
    return (results.length === 0) ? null : results[0];
  }

  async save(data) {
    const result = await dbService.executeQuery('INSERT INTO games SET ?', data);
    return { id: result.insertId, ...data };
  }
}

const repository = new GamesRepository();
module.exports = repository;