const sql = require("./db.js");

// constructor
const WalletUser = function(walletUser) {
  this.id = walletUser.id;
  this.wallet_Code = walletUser.walletCode;
  this.wallet_User = walletUser.walletUser;
  this.phone = walletUser.phone;
  this.name = walletUser.name;
  this.status = walletUser.status;
  this.system = walletUser.system;
};

WalletUser.create = (newWalletUser, result) => {
  
  sql.query("INSERT INTO wallet_users SET ?", newWalletUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    
    result(null, newWalletUser);
  });
};

WalletUser.findByWalletUser = (id, result) => {
  sql.query(`SELECT * FROM wallet_users WHERE wallet_user = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

WalletUser.getAll = (title, result) => {
  let query = "SELECT * FROM tutorials";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
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



WalletUser.updateByWalletCode = (id, tutorial, result) => {
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

WalletUser.remove = (id, result) => {
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

WalletUser.removeAll = result => {
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

module.exports = WalletUser;
