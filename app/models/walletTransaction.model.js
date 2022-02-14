const sql = require("./db.js");

// constructor
const WalletTransactions = function(walletTransactions) {
  this.id = walletTransactions.id;
  this.wallet_transaction_time = walletTransactions.walletTransactionTime;
  this.transaction_Id = walletTransactions.transactionId;
  this.wallet_Code = walletTransactions.walletCode;
  this.phone = walletTransactions.phone;
  this.name = walletTransactions.name;
  this.currency = walletTransactions.currency;
  this.balance_Before = walletTransactions.balanceBefore;
  this.amount = walletTransactions.amount;
  this.balance_After = walletTransactions.balanceAfter;
  this.wallet_Transaction_Type = walletTransactions.walletTransactionType;
  this.notes = walletTransactions.notes;
  this.wallet_Transaction_State = walletTransactions.walletTransactionState;
  this.wallet_Transaction_Operation = walletTransactions.walletTransactionOperation;
  this.wallet_Transaction_Release_Time = walletTransactions.walletTransactionReleaseTime;
  this.wallet_Fund_Source = walletTransactions.walletFundSource;
  this.wallet_Fund_Data = walletTransactions.walletFundData;
  this.is_Display = walletTransactions.isDisplay;
  this.wallet_Type = walletTransactions.walletType;
  this.wallet_Transaction_Cancel_Time = walletTransactions.walletTransactionCancelTime;
  this.wallet_Transaction_Void_Time = walletTransactions.walletTransactionVoidTime;
  this.wallet_User = walletTransactions.walletUser;
};

WalletTransactions.create = (newWalletTransactions, result) => {
  
  sql.query("INSERT INTO wallet_transactions SET ?", newWalletTransactions, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    
    result(null, newWalletTransactions);
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
