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

    // update categorie
    exports.update = (req, res) =>{

        console.log("************************************controller");

        const id = req.params.id;

        Categorie.update( req.body, {
            where: { id: id}, 
        })
        .then(num => {
            if(num == 1) {
                res.send({
           message: `La catégorie a été modifiée avec succès`
        });
    }else {
        res.send({
            message: `La catégorie n' a pas été  trouvée`
         });
    }
})
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Erreur en modifiant la catégorie id=" + id
            });
        });

    };


    exports.delete = (req, res) =>{

        const id = req.params.id;

        Categorie.destroy( {
            where: { id: id}, 
        })
        .then(num => {
            if(num == 1) {
                res.send({
           message: `La catégorie a été supprimée avec succès`
        });
    }else {
        res.send({
            message: `La catégorie n' a pas été  trouvée`
         });
    }
})
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Erreur en supprimant la catégorie id=" + id
            });
        });

    };



