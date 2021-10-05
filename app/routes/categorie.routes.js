module.exports = app =>{
    
       const categories = require("../controllers/categories.controller")  //le controlleur exécute les requetes du route qui se trouve dans le dossier controleur
      
       var router = require("express").Router();
   
       // categorie ajouter
       router.post("/",  categories.create);
   
          // categorie list all
          router.get("/",  categories.findAll);
   
          app.use('/api/categories', router);
   
          
   }