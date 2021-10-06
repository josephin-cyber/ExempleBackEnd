module.exports = (app) => {
	const clients = require('../controllers/clients.controllers'); //le controlleur exécute les requetes du route qui se trouve dans le dossier controleur

	var router = require('express').Router();

	// categorie ajouter
	router.post('/', clients.create);

	// categorie list all
	router.get('/', clients.findAll);

	

	app.use('/api/clients', router);
};
