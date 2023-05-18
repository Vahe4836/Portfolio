import express from "express";
import path, { join } from "path";
import fs, { writeFile } from "fs";


const app = express();


// app.get("/", (req,res) => {

// })

app.use(express.static("../client/build"));

app.use(express.json());

const currentDir = path.resolve('./portfolio_json');

function SendData(res, err, data) {
    if (err) {
        return console.log(err);
    }
    res.send(data);
}


app.get("/db/projects/", (req, res) => {
    fs.readFile(join(currentDir, '/projects.json'), 'utf8', function (err, data) {
        SendData(res, err, data);
    });
});


app.get("/db/skills/frontEnd", (req, res) => {
    fs.readFile(join(currentDir, '/skills_front_end.json'), 'utf8', function (err, data) {
        SendData(res, err, data);
    });
});


app.get("/db/skills/backEnd", (req, res) => {
    fs.readFile(join(currentDir, '/skills_back_end.json'), 'utf8', function (err, data) {
        SendData(res, err, data);
    });
})


app.get("/db/skills/design", (req, res) => {
    fs.readFile(join(currentDir, '/skills_design.json'), 'utf8', (err, data) => {
        SendData(res, err, data);
    });
})


app.get("/db/skills/other", (req, res) => {
    fs.readFile(join(currentDir, '/skills_other.json'), 'utf8', (err, data) => {
        SendData(res, err, data);
    });
})


app.post("/db/contact/message", (req, res) => {
    fs.writeFile(join(currentDir, '/messages/messages.json'), JSON.stringify(req.body), (err) => {
        if (err) {
            throw new Error("Error message section");
        }
        console.log("Message is saved!");
    })
    console.log(req.body);
    res.send("OK");
})


app.get('*', function (request, response) {
    const filePath = path.resolve("../client/build/index.html")
    response.sendFile(filePath);
});



app.listen(5000, () => {
    console.log("Server started in 5000 port");
});