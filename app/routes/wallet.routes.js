

module.exports = app => {
    const wallet = require("../controllers/wallet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", wallet.create);

    router.post("/walletAdd", wallet.createTransaction);
  
    // // Retrieve all Tutorials
    // router.get("/", tutorials.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/wallet', router);
  };