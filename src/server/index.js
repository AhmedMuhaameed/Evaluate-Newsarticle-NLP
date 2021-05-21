const dotenv = require("dotenv");
var path = require("path");
const express = require("express");
const axios =require('axios');
const request = require('supertest');
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

dotenv.config();

app.use(cors({
    credentials: true,
    origin: "http://127.0.0.1:8080" || "http://127.0.0.1:8081" ||"http://localhost:8080" ||"http://localhost:8081"
}));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log("Example app listening on port 8081!");
});

app.post("/add-url", async function  (req, res) {
    try{
        const url =req.body.url;
        const APIURL= "https://api.meaningcloud.com/sentiment-2.1"
        let request =`${APIURL}?key=${process.env.API_KEY}&url=${url}&lang=en`;
        const result = await axios({
            method: "POST",
            url:request,
            withCredentials: true,
            credentials: "include",
        });
        res.send(result.data);
    }
    catch(err){
        console.log(err);
    }
});
