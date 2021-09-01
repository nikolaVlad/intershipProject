let config = require('../config/config');

module.exports = {
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  host: config.db.host,
  port: config.db.port,
  dialect: 'mysql',
}

