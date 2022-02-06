const Wallets = require("../models/wallet.model.js");
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const { json } = require("express/lib/response");


// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
       if (!req.body) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
        }
      const wallets = [];
      const wallletRespList = [];
      
      for(let i = 0;i<3;i++ ){
        const walletResp = new Wallets({
            id : uuidv4(),
            currency : req.body.currency,
            balance : 0,
            status : req.body.status,
            walletType :(i==0)?"POINT":(i==1)?"SALDO":"SAKU",
            notes : req.body.notes,
            walletCode :"SA-"+req.body.walletCode,
            pin : req.body.pin,
            expiredTime : "",
            lastTransactionTime : "",
          });
        
          wallletRespList.push(walletResp);

        const wallet =[];
        wallet[0] = uuidv4();
        wallet[1] = req.body.currency;
        wallet[2] = 0;
        wallet[3] = req.body.status;
        wallet[4] = (i==0)?"POINT":(i==1)?"SALDO":"SAKU";
        wallet[5] = req.body.notes;
        wallet[6] = req.body.walletCode;
        wallet[7] = req.body.pin;
        wallet[8] = "";
        wallet[9] = "";

        wallets.push(wallet);  
      }

      console.log(wallets);

      
  
      // Save Tutorial in the database
    Wallets.create(wallets, (err, data) => {
            if (err){
                res.status(500).send({
                    message:
                      err.message || "Some error occurred while creating the Tutorial."
                  });
            }

            res.status(200).send({
                 message:"OK",
                 data:wallletRespList
             });
          });
};
    
    // Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
      const title = req.query.title;
    
      Tutorial.getAll(title, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          });
        else res.send(data);
});
  
};

// Find a single Tutorial with a id
exports.findOne = (req, res) => {
  Tutorial.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Tutorial.updateById(
    req.params.id,
    new Tutorial(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Tutorial.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id
        });
      }
    } else res.send({ message: `Tutorial was deleted successfully!` });
  });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Tutorials were deleted successfully!` });
  });
};