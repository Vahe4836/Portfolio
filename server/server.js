import express from "express";
import path from "path";

const app = express();

app.get("/", (req,res) => {
    res.sendFile(path.resolve("../client/public/index.html"));
})


app.get("/projects", (req,res) => {
    res.sendFile(path.resolve("./server/portfolio_json/Projects.json"));
});


app.use(express.static("portfolio"));

app.listen(3000);