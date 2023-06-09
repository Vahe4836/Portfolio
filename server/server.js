import express from "express";
import path, { join } from "path";
import fs, { writeFile } from "fs";
import { MongoClient } from "mongodb";

// const app = express();

// app.use(express.static("../client/build"));

// app.use(express.json());

const client = new MongoClient('mongodb://localhost:27017');


(async function () {

    await client.connect();

    const app = express();

    app.use(express.static("../client/build"));

    app.use(express.json());

    const cleanup = (event) => {
        client.close();
        process.exit();
    }

    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);

    function SendData(res, err, data) {
        if (err) {
            return console.log(err);
        }
        res.send(data);
    }

    const db = client.db("local");


    // Home Data

    // const HomeCollection = db.collection('Home');

    app.get("/db/home/works", async (req, res) => {
        const HomeCollection = db.collection('Home');
        const HomeWorksCollectionInfo = await HomeCollection.find({}).toArray();
        console.log(HomeWorksCollectionInfo);
        res.send(HomeWorksCollectionInfo);
    })

    // app.get("/db/home/projects", (req, res) => {
    //     fs.readFile(join(currentDir, "/home/home_projects.json"), 'utf8', function (err, data) {
    //         SendData(res, err, data);
    //     })
    // })

    // app.get("/db/home/skills", (req, res) => {
    //     fs.readFile(join(currentDir, '/home/home_skills.json'), 'utf8', function (err, data) {
    //         SendData(res, err, data);
    //     })
    // })



    // Footer

    app.get("/db/footer", async (req, res) => {
        const collectionFooter = db.collection('Footer');
        const collectionFooterInfo = await collectionFooter.find({}).toArray();
        res.send(collectionFooterInfo);
    })


    // Listen port

    app.listen(process.env.APP_PORT, () => {
        console.log(`Server started in 5000 port`);
    });


})()

// const app = express();

// app.use(express.static("../client/build"));

// app.use(express.json());


// const currentDir = path.resolve('./portfolio_json');

// Function for send data to front-end


// function SendData(res, err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     res.send(data);
// }

// // // Home Data

// // app.get("/db/home/works", (req, res) => {
// //     fs.readFile(join(currentDir, '/home/home_works.json'), 'utf8', function (err, data) {
// //         SendData(res, err, data);
// //     })
// // })

// // app.get("/db/home/projects", (req, res) => {
// //     fs.readFile(join(currentDir, "/home/home_projects.json"), 'utf8', function (err, data) {
// //         SendData(res, err, data);
// //     })
// // })

// // app.get("/db/home/skills", (req, res) => {
// //     fs.readFile(join(currentDir, '/home/home_skills.json'), 'utf8', function (err, data) {
// //         SendData(res, err, data);
// //     })
// // })


// // Project Data


// app.get("/db/projects", (req, res) => {
//     fs.readFile(join(currentDir, '/projects/projects.json'), 'utf8', function (err, data) {
//         SendData(res, err, data);
//     });
// });


// // Skills Data


// app.get("/db/skills/frontEnd", (req, res) => {
//     fs.readFile(join(currentDir, '/skills/skills_front_end.json'), 'utf8', function (err, data) {
//         SendData(res, err, data);
//     });
// });

// app.get("/db/skills/backEnd", (req, res) => {
//     fs.readFile(join(currentDir, '/skills/skills_back_end.json'), 'utf8', function (err, data) {
//         SendData(res, err, data);
//     });
// })

// app.get("/db/skills/design", (req, res) => {
//     fs.readFile(join(currentDir, '/skills/skills_design.json'), 'utf8', (err, data) => {
//         SendData(res, err, data);
//     });
// })

// app.get("/db/skills/other", (req, res) => {
//     fs.readFile(join(currentDir, '/skills/skills_other.json'), 'utf8', (err, data) => {
//         SendData(res, err, data);
//     });
// })


// // Contact Data


// app.get("/db/contact/social", (req, res) => {
//     fs.readFile(join(currentDir, '/contact/social/social.json'), 'utf8', (err, data) => {
//         SendData(res, err, data);
//     })
// })


// app.post("/db/contact/message", (req, res) => {
//     fs.writeFile(join(currentDir, '/contact/messages/messages.json'), JSON.stringify(req.body), (err) => {
//         if (err) {
//             throw new Error("Error message section");
//         }
//         console.log("Message is saved!");
//     })
//     console.log(req.body);
//     res.send("OK");
// });

// // // Footer


// // app.get("/db/footer", (req, res) => {
// //     fs.readFile(join(currentDir, '/footer/footer.json'), 'utf8', (err, data) => {
// //         SendData(res, err, data);
// //     })
// // })


// // // // // // // // // // // // //


// app.get('*', function (request, response) {
//     const filePath = path.resolve("../client/build/index.html")
//     response.sendFile(filePath);
// });


// Listening port

// app.listen(process.env.APP_PORT, () => {
//     console.log(`Server started in 5000 port`);
// });