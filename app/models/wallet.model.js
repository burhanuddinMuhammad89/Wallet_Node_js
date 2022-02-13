const sql = require("./db.js");

// constructor
const Wallet = function(wallet) {
  this.id = wallet.id;
  this.currency = wallet.currency;
  this.balance = wallet.balance;
  this.status = wallet.status;
  this.walletType = wallet.walletType;
  this.notes = wallet.notes;
  this.walletCode = wallet.walletCode;
  this.pin = wallet.pin;
  this.expiredTime = wallet.expiredTime;
  this.lastTransactionTime = wallet.lastTransactionTime;
};

Wallet.create = (newWallet, result) => {
  
  sql.query("INSERT INTO wallets VALUES ?", [newWallet], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    
    result(null, newWallet);
  });
};

Wallet.findByWalletCode = (walletCode,walletType,result) => {
  console.log("walletCode is :"+walletCode);
  console.log("walletType :"+walletType);
  sql.query("SELECT * FROM wallets WHERE wallet_code ='"+walletCode+"' and wallet_type = '"+walletType+"'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Wallet.getAll = (title, result) => {
  let query = "SELECT * FROM tutorials";

  if (title) {
    query +=  "WHERE title LIKE '%"+title+"'";
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



Wallet.updateByWalletCodeAndType = (newWallet, result) => {
  sql.query(
    "UPDATE wallets SET balance = ? WHERE wallet_code = ? and wallet_type = ?",
    [newWallet.balance, newWallet.walletCode, newWallet.walletType],
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

      console.log("updated balance wallet: ", {result});
      result(null, { result });
    }
  );
};

Wallet.remove = (id, result) => {
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

Wallet.removeAll = result => {
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

module.exports = Wallet;
