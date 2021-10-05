const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) =>{

    const Client = sequelize.define("clients", {
        code:
        {
            type: Sequelize.STRING
        },
        
        nom:
        {
            type: Sequelize.STRING
        },

        adresse:
        {
            type: Sequelize.STRING
        },

        ville:
        {
            type: Sequelize.STRING
        },

        
        cite:
        {
            type: Sequelize.STRING
        },


        pays:
        {
            type: Sequelize.STRING
        },

        profession:
        {
            type: Sequelize.STRING
        },

        datedenaissance:
        {
            type: Sequelize.DATEONLY
        },

        paysdenaissance:
        {
            type: Sequelize.STRING
        },

        ceategorie:
        {
            type: Sequelize.STRING
        }
    });

        return Client;  //retourner la table créé
    }

    //ensuite je dois rajouter cela dans l'index du model