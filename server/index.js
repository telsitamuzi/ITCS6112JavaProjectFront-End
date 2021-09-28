const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require("body-parser");

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: 'mantelsi',
  database: 'AppData',

});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/insert", (req, res) => {

  const movieName = req.body.movieName
  const movieReview = req.body.movieReview

  const sqlInsert = "INSERT INTO movie (movieName, movieReview) VALUES ('?', '?')"
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    console.log(err);
  })
});

app.listen(3001, () => {
  console.log("running on port 3001")
});