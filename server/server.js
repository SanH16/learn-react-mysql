const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const app = express();
//path.resolve()
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 3000;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "simpeg",
});

app.post("/add_rekrutmen", (req, res) => {
  const sql = "INSERT INTO rekrutmen (`title`,`tags`,`text_description`) VALUES (?, ?, ?)";
  const values = [req.body.title, req.body.tags, req.body.text_description];
  db.query(sql, values, (err, result) => {
    if (err) return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student added successfully" });
  });
});

app.get("/rekrutmen", (req, res) => {
  const sql = "SELECT * FROM rekrutmen";
  db.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
