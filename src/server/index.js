const dotenv = require("dotenv");
var path = require("path");
const express = require("express");
const axios = require("axios");
const request = require("supertest");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

dotenv.config();

app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(express.static("dist"));

app.get("/", function (req, res) {
    res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log("Example app listening on port 8080!");
});

app.post("/api-results", async function (req, res) {
    try {
        const url = req.body.url;
        const APIURL = "https://api.meaningcloud.com/sentiment-2.1";
        let request = `${APIURL}?key=${process.env.API_KEY}&url=${url}&lang=en`;
        const result = await axios({
            method: "POST",
            url: request,
        });
        res.send(result.data);
    } catch (err) {
        console.log(err);
    }
});
