module.exports = {
    HOST: "localhost",  // ici on peut se connecter avec Ip sur serveur ausso
    USER: "root",  //nom utilisateur Mysql
    PASSWORD: "root", //mot de passe de Mysql
    DB: "gestiondescredits", // nom de la base de donnée créée dans Mysql
    dialect: "mysql", // La base de donnée qui se sera utilisée
    pool: {  // cfr configuration sequelize
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };