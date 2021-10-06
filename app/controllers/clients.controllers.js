const db = require("../models/index") //appel les tables
const Client = db.client;
const Op = db.Sequelize.Op;

// enregistrer le client
//create c'est pour créer le client
exports.create = (req, res) =>{
    const client ={
        code: req.body.code,
        nom: req.body.nom,
        adresse: req.body.adresse,
        ville : req.body.ville,
        cite : req.body.cite,
        pays : req.body.pays,
        profession : req.body.profession,
        datedenaissance: req.body.datedenaissance,
        paysdenaissance : req.body.paysdenaissance,
        categorie : req.body.categorie
    };

    // save category
    Client.create(client)
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Erreur en enregistrant la catégorie"
        });
    });
}

// category fetch  -- Yves

    exports.findAll = (req, res) =>{

        const title = req.query.title;
        var condition = title ? {title: { [open.like]: `%${title}%`}} : null;

        Client.findAll({ 
            where: condition, 
            order: [['client', 'ASC']]
        })
        .then(data => {

            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Erreur dans le chargement du client"
            });
        });

    };

    



