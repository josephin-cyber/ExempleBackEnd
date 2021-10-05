const { sequelize, Sequelize } = require("./index");

module.exports = (sequelize, Sequelize) =>{

    const Categorie = sequelize.define("categories", {
        code:
        {
            type: Sequelize.STRING
        },
        
        categorie:
        {
            type: Sequelize.STRING
        },

        description:
        {
            type: Sequelize.STRING
        }
    });

        return Categorie;
    }