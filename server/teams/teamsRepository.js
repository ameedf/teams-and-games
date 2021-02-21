const dbService = require('../utils/dbService');

class TeamsRepository {
  // This will return a promise..
  findAll() {
    return dbService.executeQuery('SELECT * FROM teams');
  }

  async findById(id) {
    const results = await dbService.executeQuery('SELECT * FROM teams WHERE id = ?', [id]);
    return (results.length === 0) ? null : results[0];
  }

  async save(data) {
    const result = await dbService.executeQuery('INSERT INTO teams SET ?', data);
    return { id: result.insertId, ...data };
  }
}

const repository = new TeamsRepository();
module.exports = repository;