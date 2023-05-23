import express from "express";
import path, { join } from "path";
import fs, { writeFile } from "fs";


const app = express();


app.use(express.static("../client/build"));

app.use(express.json());


const currentDir = path.resolve('./portfolio_json');

// Function for send data to front-end


function SendData(res, err, data) {
    if (err) {
        return console.log(err);
    }
    res.send(data);
}

// Home Data

app.get("/db/home/works", (req, res) => {
    fs.readFile(join(currentDir, '/home/home_works.json'), 'utf8', function (err, data) {
        SendData(res, err, data);
    })
})

app.get("/db/home/projects", (req,res) => {
    fs.readFile(join(currentDir, "/home/home_projects.json"),'utf8', function(err,data){
        SendData(res,err, data);
    })
})

app.get("/db/home/skills", (req, res) => {
    fs.readFile(join(currentDir, '/home/home_skills.json'), 'utf8', function (err, data) {
        SendData(res, err, data);
    })
})


// Project Data


app.get("/db/projects", (req, res) => {
    fs.readFile(join(currentDir, '/projects/projects.json'), 'utf8', function (err, data) {
        SendData(res, err, data);
    });
});


// Skills Data


app.get("/db/skills/frontEnd", (req, res) => {
    fs.readFile(join(currentDir, '/skills/skills_front_end.json'), 'utf8', function (err, data) {
        SendData(res, err, data);
    });
});

app.get("/db/skills/backEnd", (req, res) => {
    fs.readFile(join(currentDir, '/skills/skills_back_end.json'), 'utf8', function (err, data) {
        SendData(res, err, data);
    });
})

app.get("/db/skills/design", (req, res) => {
    fs.readFile(join(currentDir, '/skills/skills_design.json'), 'utf8', (err, data) => {
        SendData(res, err, data);
    });
})

app.get("/db/skills/other", (req, res) => {
    fs.readFile(join(currentDir, '/skills/skills_other.json'), 'utf8', (err, data) => {
        SendData(res, err, data);
    });
})


// Contact Data


app.get("/db/contact/social", (req, res) => {
    fs.readFile(join(currentDir, '/contact/social/social.json'), 'utf8', (err, data) => {
        SendData(res, err, data);
    })
})


app.post("/db/contact/message", (req, res) => {
    fs.writeFile(join(currentDir, '/contact/messages/messages.json'), JSON.stringify(req.body), (err) => {
        if (err) {
            throw new Error("Error message section");
        }
        console.log("Message is saved!");
    })
    console.log(req.body);
    res.send("OK");
});

// // // // // // // // // // // // 


app.get('*', function (request, response) {
    const filePath = path.resolve("../client/build/index.html")
    response.sendFile(filePath);
});


// Listening port

app.listen(process.env.APP_PORT, () => {
    console.log(`Server started in 5000 port`);
});