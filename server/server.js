import express from "express";
import path from "path";
import fs from "fs";


const app = express();


// app.get("/", (req,res) => {

// })

app.use(express.static("../client/build"));


app.get("/db/projects/", (req, res) => {
    const filePath = path.resolve('./portfolio_json/projects.json')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        res.send(data);
    });
});


app.get("/db/skills/", (req, res) => {
    const filePath = path.resolve('./portfolio_json/skills_front_end.json')
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        res.send(data);
    });
});


app.get('*', function (request, response) {
    const filePath = path.resolve("../client/build/index.html")
    response.sendFile(filePath);
});



app.listen(5000, () => {
    console.log("Server started in 5000 port");
});