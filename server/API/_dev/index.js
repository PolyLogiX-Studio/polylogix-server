const api = require('express').Router();
const fs = require("fs")
const path = require("path")
const dbFile = path.join(__dirname,".data/sqlite.db")
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbFile);
const cleanseString = function(string) {
  return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

db.serialize(() => {
  if (!exists) {
    db.run(
      "CREATE TABLE Dreams (id INTEGER PRIMARY KEY AUTOINCREMENT, dream TEXT)"
    );
    console.log("New table Dreams created!");

    // insert default dreams
    db.serialize(() => {
      db.run(
        'INSERT INTO Dreams (dream) VALUES ("Find and count some sheep"), ("Climb a really tall mountain"), ("Wash the dishes")'
      );
    });
  } else {
    console.log('Database "Dreams" ready to go!');
    db.each("SELECT * from Dreams", (err, row) => {
      if (row) {
        console.log(`record: ${row.dream}`);
      }
    });
  }
});

api.get("/getDreams", (request, response) => {
  db.all("SELECT * from Dreams", (err, rows) => {
    response.send(JSON.stringify(rows));
  });
});

// endpoint to add a dream to the database
api.post("/addDream", (request, response) => {
  console.log(`add to dreams ${request.body.dream}`);

  // DISALLOW_WRITE is an ENV variable that gets reset for new projects
  // so they can write to the database
  if (!process.env.DISALLOW_WRITE) {
    const cleansedDream = cleanseString(request.body.dream);
    db.run(`INSERT INTO Dreams (dream) VALUES (?)`, cleansedDream, error => {
      if (error) {
        response.send({ message: "error!" });
      } else {
        response.send({ message: "success" });
      }
    });
  }
});

// endpoint to clear dreams from the database
api.get("/clearDreams", (request, response) => {
  // DISALLOW_WRITE is an ENV variable that gets reset for new projects so you can write to the database
  if (!process.env.DISALLOW_WRITE) {
    db.each(
      "SELECT * from Dreams",
      (err, row) => {
        console.log("row", row);
        db.run(`DELETE FROM Dreams WHERE ID=?`, row.id, error => {
          if (row) {
            console.log(`deleted row ${row.id}`);
          }
        });
      },
      err => {
        if (err) {
          response.send({ message: "error!" });
        } else {
          response.send({ message: "success" });
        }
      }
    );
  }
});


api.all('*',(req,res)=>{
  console.log("dev:",req.method,":",req.url)
  return res.status(200).json({url:req.url,method:req.method,API:"dev"})
});

module.exports = api;