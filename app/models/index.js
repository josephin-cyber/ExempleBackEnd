const dbConfig = require("../configuration/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categorie = require("./categorie.model")(sequelize, Sequelize);
db.client = require("./client.model")(sequelize, Sequelize);
db.essaie = require("./client.model")(sequelize, Sequelize);


module.exports = db;