const db = require("../models/index") //appel les tables
const Categorie = db.categorie;
const Op = db.Sequelize.Op;


//create c'est pour créer la catégorie
exports.create = (req, res) =>{
    const categorie ={
        code: req.body.code,
        categorie: req.body.categorie,
        description: req.body.description
    };

    // enregistrer les données dans catégorie
    Categorie.create(categorie)
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Erreur en enregistrant la catégorie"
        });
    });
}


    exports.findAll = (req, res) =>{

        const title = req.query.title;
        var condition = title ? {title: { [open.like]: `%${title}%`}} : null;

        //lorsque tu veux afficher les données dans le tableau, express fera implicitement select *from categorie grâce à Categorie.findAll() 

        Categorie.findAll({ 
            where: condition, 
            order: [['categorie', 'ASC']]
        })
        .then(data => {

            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Erreur dans le chargement de la catégorie"
            });
        });

    };



