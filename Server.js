const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models/index"); //le model est le dossier de toutes les tables.

//nous specifions le numero de port qu'écoute le frontEnd
//cors origin vient de l'environnement que nous avons configurer dans le frontEnd grace à l'environnement .env

var corsOptions = {
  origin: "http://localhost:5000"
};



app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Soyez les bienvenu Logiciel de Gestion des Crédits" });
});

require('./app/routes/categorie.routes')(app); //Ici on dit au serveur de  communiquer avec les routes
 require('./app/routes/client.routes')(app); 


const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
  console.log(`Server tourne sur le port  ${PORT}.`);
});

 db.sequelize.sync();