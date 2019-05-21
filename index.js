const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const defaultLatLon = "37.8267,-122.4233";
const fetch = require("node-fetch");
const cors = require("cors");
global.Headers = fetch.Headers;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/weather", (req, res) => {
  const key = "0162c85e8590d76a607f04d694ffa0c1/";
  const coords = req.query.location || defaultLatLon;
  fetch("https://api.darksky.net/forecast/" + key + coords, {
    method: "get"
  })
    .then(res => res.json())
    .then(data => {
      res.status(200).send(data);
    });
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
