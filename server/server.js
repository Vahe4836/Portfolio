import express from "express";
import path, { join } from "path";
import fs, { writeFile } from "fs";
import { MongoClient } from "mongodb";

// const app = express();

// app.use(express.static("../client/build"));

// app.use(express.json());

const client = new MongoClient(`${process.env.MONGODB}`);


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

    // function SendData(res, err, data) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     res.send(data);
    // }

    // Home Data

    const Homedb = client.db("Home");


    app.get("/db/home/works", async (req, res) => {
        const HomeWorksCollection = Homedb.collection('HomeWorks');
        try {
            const HomeWorksCollectionInfo = await HomeWorksCollection.find({}).toArray();
            res.send(HomeWorksCollectionInfo);
        } catch (err) {
            throw new Error(err);
        }
        // const HomeWorksCollectionInfo = await HomeWorksCollection.find({}).toArray();

    })

    app.get("/db/home/projects", async (req, res) => {
        const HomeProjectsCollection = Homedb.collection('HomeProjects');
        try {
            const HomeProjectsCollectionInfo = await HomeProjectsCollection.find({}).toArray();
            res.send(HomeProjectsCollectionInfo);
        } catch (err) {
            throw new Error(err);
        }

    })



    app.get("/db/home/skills", async (req, res) => {
        const HomeSkillsCollection = Homedb.collection('HomeSkills');
        try {
            const HomeSkillsCollectionInfo = await HomeSkillsCollection.find({}).toArray();
            res.send(HomeSkillsCollectionInfo);
        } catch (err) {
            throw new Error(err);
        }

    })


    // Projects data

    const Projectsdb = client.db("Projects");

    app.get("/db/projects", async (req, res) => {
        const ProjectsCollection = Projectsdb.collection('Projects');
        try {
            const ProjectsCollectionInfo = await ProjectsCollection.find({}).toArray();
            res.send(ProjectsCollectionInfo);
        } catch (err) {
            throw new Error(err);
        }

    });


    // Skills data

    const Skillsdb = client.db("Skills");

    app.get("/db/skills/frontEnd", async (req, res) => {
        const SkillsFrontEndCollection = Skillsdb.collection('SkillsFrontEnd');
        try {
            const SkillsFrontEndCollectionInfo = await SkillsFrontEndCollection.find({}).toArray();
            res.send(SkillsFrontEndCollectionInfo);
        } catch (err) {
            throw new Error(err);
        }

    });

    app.get("/db/skills/backEnd", async (req, res) => {
        const SkillsBackEndCollection = Skillsdb.collection('SkillsBackEnd');
        try {
            const SkillsBackEndCollectionInfo = await SkillsBackEndCollection.find({}).toArray();
            res.send(SkillsBackEndCollectionInfo);
        } catch (err) {
            throw new Error(err);
        }
    })

    app.get("/db/skills/design", async (req, res) => {
        const SkillsDesignCollection = Skillsdb.collection('SkillsDesign');
        try {
            const SkillsDesignCollectionInfo = await SkillsDesignCollection.find({}).toArray();
            res.send(SkillsDesignCollectionInfo);
        } catch (err) {
            throw new Error(err);
        }

    })

    app.get("/db/skills/other", async (req, res) => {
        const SkillsOtherCollection = Skillsdb.collection('SkillsOther');
        try {
            const SkillsOtherCollectionInfo = await SkillsOtherCollection.find({}).toArray();
            res.send(SkillsOtherCollectionInfo);
        } catch (err) {
            throw new Error(err);
        }

    })

    // Contact Data

    const Contactdb = client.db('Contact');

    app.get("/db/contact/social", async (req, res) => {
        const ContactSocialCollection = Contactdb.collection('Social');
        try {
            const ContactSocialCollectionInfo = await ContactSocialCollection.find({}).toArray();
            res.send(ContactSocialCollectionInfo);
        } catch (err) {
            throw new Error(err);
        }
    })


    app.post("/db/contact/message", async (req, res) => {
        const ContactMessagesCollection = Contactdb.collection('Messages');
        try {
            await ContactMessagesCollection.insertOne(req.body);
            res.send("OK");
        } catch (err) {
            throw new Error(err);
        }
        // fs.writeFile(join(currentDir, '/contact/messages/messages.json'), JSON.stringify(req.body), (err) => {
        //     if (err) {
        //         throw new Error("Error message section");
        //     }
        //     console.log("Message is saved!");
        // })
        // console.log(req.body);
        // res.send("OK");
    });

    // Footer data

    const Footerdb = client.db('Footer');

    app.get("/db/footer", async (req, res) => {
        const collectionFooter = Footerdb.collection('Footer');
        try {
            const collectionFooterInfo = await collectionFooter.find({}).toArray();
            res.send(collectionFooterInfo);
        } catch (err) {
            throw new Error(err);
        }
        
    })


    ///////////

    app.get('*', function (request, response) {
        const filePath = path.resolve("../client/build/index.html")
        response.sendFile(filePath);
    });


    // Listen port

    app.listen(process.env.APP_PORT, () => {
        console.log(`Server started in 5000 port`);
    });


})().catch((err) => {
    throw new Error(err);
});