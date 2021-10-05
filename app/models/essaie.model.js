const { sequelize, Sequelize } = require("./index");

module.exports = (sequelize, Sequelize) =>{

    const Essaie = sequelize.define("categories", {
        nom:
        {
            type: Sequelize.STRING
        },
        
        postnom:
        {
            type: Sequelize.STRING
        },

        prenom:
        {
            type: Sequelize.STRING
        }
    });

        return Categorie;
    }