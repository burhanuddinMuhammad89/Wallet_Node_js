const sql = require("./db.js");

// constructor
const WalletTransactions = function(walletTransactions) {
  this.id = WalletTransactions.id;
  this.walletTransactionTime = WalletTransactions.walletTransactionTime;
  this.transactionId = WalletTransactions.transactionId;
  this.walletCode = WalletTransactions.walletCode;
  this.phone = WalletTransactions.phone;
  this.name = WalletTransactions.name;
  this.currency = WalletTransactions.currency;
  this.balanceBefore = WalletTransactions.balanceBefore;
  this.amount = WalletTransactions.amount;
  this.balanceAfter = WalletTransactions.balanceAfter;
  this.walletTransactionType = WalletTransactions.walletTransactionType;
  this.no = WalletTransactions.no;
  this.walletTransactionState = WalletTransactions.walletTransactionState;
  this.walletTransactionOperation = WalletTransactions.walletTransactionOperation;
  this.walletTransactionReleaseTime = WalletTransactions.walletTransactionReleaseTime;
  this.walletFundSource = WalletTransactions.walletFundSource;
  this.walletFundData = WalletTransactions.walletFundData;
  this.isDisplay = WalletTransactions.isDisplay;
  this.walletType = WalletTransactions.walletType;
  this.walletTransactionCancelTime = WalletTransactions.walletTransactionCancelTime;
  this.walletTransactionVoidTime = WalletTransactions.walletTransactionVoidTime;
  this.walletUser = WalletTransactions.walletUser;
};

WalletTransactions.create = (walletTransactions, result) => {
  
  sql.query("INSERT INTO wallet_transactions SET ?", walletTransactions, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    
    result(null, walletTransactions);
  });
};

WalletTransactions.findByTransactionId = (id, result) => {
  sql.query('SELECT * FROM wallet_transactions WHERE transaction_id ='+ id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Transaction: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

WalletTransactions.getAll = (title, result) => {
  let query = "SELECT * FROM tutorials";

  if (title) {
    query += " WHERE title LIKE '%"+title+"%'";
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tutorials: ", res);
    result(null, res);
  });
};



WalletTransactions.updateByWalletCode = (id, tutorial, result) => {
  sql.query(
    "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
    [tutorial.title, tutorial.description, tutorial.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated tutorial: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

WalletTransactions.remove = (id, result) => {
  sql.query("DELETE FROM tutorials WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};

WalletTransactions.removeAll = result => {
  sql.query("DELETE FROM tutorials", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} tutorials`);
    result(null, res);
  });
};

module.exports = WalletTransactions;
