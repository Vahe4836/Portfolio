import express, { urlencoded } from "express";
import path, { join, dirname } from "path";
import fs, { writeFile } from "fs";
import { MongoClient, ObjectId } from "mongodb";
import session from "express-session";
import bcrypt from "bcrypt";
import passport from "passport";
import passportLocal from "passport-local";
import { parse } from "querystring";

// import path from "path";

// require('dotenv').config();

// const app = express();

// app.use(express.static("../client/build"));

// app.use(express.json());

const client = new MongoClient(`${process.env.MONGODB}`);


(async function () {

    await client.connect();

    const app = express();

    app.use(express.static("../client/build"));

    app.use(express.json());

    app.use(urlencoded({ extended: true }));

    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    }))

    app.use(passport.initialize());
    app.use(passport.session());

    const Logindb = client.db('Login');
    const collectionLogin = Logindb.collection('Login');
    const collectionLoginInfo = await collectionLogin.find({}).toArray();

    passport.use(new passportLocal.Strategy(
        {},
        async (username, password, done) => {
            // const collectionLogin = Logindb.collection('Login');
            // const collectionLoginInfo = await collectionLogin.find({}).toArray();
            console.log(collectionLoginInfo[0].username === username);
            const user = collectionLoginInfo[0];

            if (user === undefined) {

                return done(null, null, { message: "Incorrect username" });
            }

            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            }

            done(null, null, { message: "Incorrect password" });

        }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    })

    passport.deserializeUser((_id, done) => {
        const user = collectionLoginInfo[0];
        console.log("USER", user);
        done(null, user._id);
        // MongoDB query for _id
    })

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
            console.log(err);
        }
        // const HomeWorksCollectionInfo = await HomeWorksCollection.find({}).toArray();

    })

    app.get("/db/home/projects", async (req, res) => {
        const HomeProjectsCollection = Homedb.collection('HomeProjects');
        try {
            const HomeProjectsCollectionInfo = await HomeProjectsCollection.find({}).toArray();
            res.send(HomeProjectsCollectionInfo);
        } catch (err) {
            console.log(err);
        }

    })



    app.get("/db/home/skills", async (req, res) => {
        const HomeSkillsCollection = Homedb.collection('HomeSkills');
        try {
            const HomeSkillsCollectionInfo = await HomeSkillsCollection.find({}).toArray();
            res.send(HomeSkillsCollectionInfo);
        } catch (err) {
            console.log(err);
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
            console.log(err);
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
            console.log(err);
        }

    });

    app.get("/db/skills/backEnd", async (req, res) => {
        const SkillsBackEndCollection = Skillsdb.collection('SkillsBackEnd');
        try {
            const SkillsBackEndCollectionInfo = await SkillsBackEndCollection.find({}).toArray();
            res.send(SkillsBackEndCollectionInfo);
        } catch (err) {
            console.log(err);
        }
    })

    app.get("/db/skills/design", async (req, res) => {
        const SkillsDesignCollection = Skillsdb.collection('SkillsDesign');
        try {
            const SkillsDesignCollectionInfo = await SkillsDesignCollection.find({}).toArray();
            res.send(SkillsDesignCollectionInfo);
        } catch (err) {
            console.log(err);
        }

    })

    app.get("/db/skills/other", async (req, res) => {
        const SkillsOtherCollection = Skillsdb.collection('SkillsOther');
        try {
            const SkillsOtherCollectionInfo = await SkillsOtherCollection.find({}).toArray();
            res.send(SkillsOtherCollectionInfo);
        } catch (err) {
            console.log(err);
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
            console.log(err);
        }
    })




    // Messages


    app.post("/db/contact/message/import", async (req, res) => {
        const ContactMessagesCollection = Contactdb.collection('Messages');
        console.log(req.body);

        try {
            await ContactMessagesCollection.insertOne(req.body);
            const ReadyMessagesCollectionInfo = await ContactMessagesCollection.find({}).toArray();
            res.send(ReadyMessagesCollectionInfo);
        } catch (err) {
            console.log(err);
        }

    });


    app.post("/db/contact/message/export", async (req, res) => {
        let deletingItemID = req.body.id;
        const ContactMessagesCollection = Contactdb.collection('Messages');
        await ContactMessagesCollection.find({ "_id": new ObjectId(`${deletingItemID}`) }).toArray();
        await ContactMessagesCollection.deleteOne({ "_id": new ObjectId(`${deletingItemID}`) });
        //
        const ReadyMessagesCollectionInfo = await ContactMessagesCollection.find({}).toArray();
        res.send(ReadyMessagesCollectionInfo);
    })


    app.get("/db/contact/message/export", async (req, res) => {
        const ContactMessagesCollection = Contactdb.collection('Messages');
        try {
            const ContactMessagesCollectionInfo = await ContactMessagesCollection.find({}).toArray();
            res.send(ContactMessagesCollectionInfo);
        } catch (err) {
            console.log(err);
        }
    })



    //////



    // Footer data

    const Footerdb = client.db('Footer');

    app.get("/db/footer", async (req, res) => {
        const collectionFooter = Footerdb.collection('Footer');
        try {
            const collectionFooterInfo = await collectionFooter.find({}).toArray();
            res.send(collectionFooterInfo);
        } catch (err) {
            console.log(err);
        }

    })

    // Login data

    // const Logindb = client.db('Login');
    // fdgfsjnvlkncd3242lj4nwekj


    app.post("/login", passport.authenticate("local", {
        successRedirect: "/admin",
        failureRedirect: "/login"
    }));


    // try {
    //     const collectionLogin = Logindb.collection('Login');
    //     const collectionLoginInfo = await collectionLogin.find({}).toArray();

    //     // console.log(collectionLoginInfo);

    //     // console.log(req.body.password);
    //     // console.log(collectionLoginInfo[0].password);
    //     // console.log(await bcrypt.compare(req.body.password,collectionLoginInfo[0].password));

    //     if (await bcrypt.compare(req.body.password, collectionLoginInfo[0].password)) {
    //         res.redirect("/admin");
    //     } else {
    //         res.redirect("/")

    //         // res.send("Wrong Password");
    //     }

    // console.log(collectionLoginInfo);
    // const hashedPWD = await bcrypt.hash(password, 10);
    // console.log(hashedPWD);
    // console.log(req.body);
    // res.redirect("/admin");
    // res.sendFile(path.resolve("../client/src/Main/Admin/Admin.jsx"));
    // } catch (err) {
    //     console.log(err);
    // }


    // res.redirect("/admin");




    // Admin data

    // const Logindb = client.db('Login');


    // app.get("/admin", (req, res) => {

    //     let boolObj = {
    //         isAdmin: false
    //     }

    //     if (req.isAuthenticated() === false) {
    //         boolObj = {
    //             isAdmin: true
    //         }

    //         return res.redirect("/login");
    //         // res.send(boolObj);
    //     }

    //     // res.send(boolObj);

    //     // return res.redirect("/admin");

    // })



    // app.get("/admin/data", (req, res) => {

    //     // let boolObj = {
    //     //     isAdmin: true
    //     // }

    //     console.log("That is a isAdmin", req.body.isAdmin);

    //     if (req.isAuthenticated() === false) {
    //         // boolObj = {
    //         //     isAdmin: false
    //         // }
    //         // res.send(boolObj);
    //         // console.log("ewljefhdbwrje.sdnf",req.originalUrl === "/admin");
    //         return res.redirect("/login");
    //         // res.send(boolObj)
    //     }

    //     res.send("OKOKOKOKOKOK");

    //     //     //    res.sendFile(path.resolve("../client/src/Main/Admin/Admin.jsx"));
    //     //     //    return res.redirect("/admin");

    // })




    // app.get("/db/admin/data", async (req, res) => {
    //     const collectionLogin = Logindb.collection('Login');

    //     try {
    //         const collectionLoginInfo = await collectionLogin.find({}).toArray();
    //         // console.log(collectionLoginInfo);
    //         res.send(collectionLoginInfo);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // })



    ///////////////////////////////////////// Admin data /////////////////////////////////////////

    ///////// Skills /////////

    // Front end

    app.post("/db/admin/front/data/import", async (req, res) => {
        const SkillsFrontEndCollection = Skillsdb.collection('SkillsFrontEnd');
        console.log(req.body);
        parse(req.body.percentage);

        try {
            await SkillsFrontEndCollection.insertOne(req.body);
            const ReadySkillsFrontEndCollectionInfo = await SkillsFrontEndCollection.find({}).toArray();
            res.send(ReadySkillsFrontEndCollectionInfo);
        } catch (err) {
            console.log(err);
        }

    })

    app.post("/db/admin/front/data/export", async (req, res) => {
        let deletingItemID = req.body.id;
        const SkillsFrontEndCollection = Skillsdb.collection('SkillsFrontEnd');
        await SkillsFrontEndCollection.find({ "_id": new ObjectId(`${deletingItemID}`) }).toArray();
        await SkillsFrontEndCollection.deleteOne({ "_id": new ObjectId(`${deletingItemID}`) });
        const ReadySkillsFrontEndCollectionInfo = await SkillsFrontEndCollection.find({}).toArray();
        res.send(ReadySkillsFrontEndCollectionInfo);
    })


    // Back end

    app.post("/db/admin/back/data/import", async (req, res) => {
        const SkillsBackEndCollection = Skillsdb.collection('SkillsBackEnd');
        console.log(req.body);
        parse(req.body.percentage);

        try {
            await SkillsBackEndCollection.insertOne(req.body);
            const ReadySkillsBackEndCollectionInfo = await SkillsBackEndCollection.find({}).toArray();
            res.send(ReadySkillsBackEndCollectionInfo);
        } catch (err) {
            console.log(err);
        }
    })

    app.post("/db/admin/back/data/export", async (req, res) => {
        let deletingItemID = req.body.id;
        const SkillsBackEndCollection = Skillsdb.collection('SkillsBackEnd');
        await SkillsBackEndCollection.find({ "_id": new ObjectId(`${deletingItemID}`) }).toArray();
        await SkillsBackEndCollection.deleteOne({ "_id": new ObjectId(`${deletingItemID}`) });
        const ReadySkillsBackEndCollectionInfo = await SkillsBackEndCollection.find({}).toArray();
        res.send(ReadySkillsBackEndCollectionInfo);
    })

    // Design 

    app.post("/db/admin/design/data/import", async (req, res) => {
        const SkillsDesignCollection = Skillsdb.collection('SkillsDesign');
        console.log(req.body);
        parse(req.body.percentage);

        try {
            await SkillsDesignCollection.insertOne(req.body);
            const ReadySkillsDesignCollectionInfo = await SkillsDesignCollection.find({}).toArray();
            res.send(ReadySkillsDesignCollectionInfo);
        } catch (err) {
            console.log(err);
        }
    });

    app.post("/db/admin/design/data/export", async (req, res) => {
        let deletingItemID = req.body.id;
        const SkillsDesignCollection = Skillsdb.collection('SkillsDesign');
        await SkillsDesignCollection.find({ "_id": new ObjectId(`${deletingItemID}`) }).toArray();
        await SkillsDesignCollection.deleteOne({ "_id": new ObjectId(`${deletingItemID}`) });
        const ReadySkillsDesignCollectionInfo = await SkillsDesignCollection.find({}).toArray();
        res.send(ReadySkillsDesignCollectionInfo);
    });

    // Other 

    app.post("/db/admin/other/data/import", async (req, res) => {
        const SkillsOtherCollection = Skillsdb.collection('SkillsOther');
        console.log(req.body);
        parse(req.body.percentage);

        try {
            await SkillsOtherCollection.insertOne(req.body);
            const ReadySkillsOtherCollectionInfo = await SkillsOtherCollection.find({}).toArray();
            res.send(ReadySkillsOtherCollectionInfo);
        } catch (err) {
            console.log(err);
        }
    });

    app.post("/db/admin/other/data/export", async (req, res) => {
        let deletingItemID = req.body.id;
        const SkillsOtherCollection = Skillsdb.collection('SkillsOther');
        await SkillsOtherCollection.find({ "_id": new ObjectId(`${deletingItemID}`) }).toArray();
        await SkillsOtherCollection.deleteOne({ "_id": new ObjectId(`${deletingItemID}`) });
        const ReadySkillsOtherCollectionInfo = await SkillsOtherCollection.find({}).toArray();
        res.send(ReadySkillsOtherCollectionInfo);
    });


    // *

    app.get('*', function (request, response) {
        const filePath = path.resolve("../client/build/index.html")
        response.sendFile(filePath);
    });



    // Listen port

    app.listen(process.env.APP_PORT, () => {
        console.log(`Server started in ${process.env.APP_PORT} port`);
    });


})()