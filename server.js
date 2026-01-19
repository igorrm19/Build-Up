import express from "express";

const app = express();
const nome = "Igor";


app.get("/", (req, res) => {
    res.send("Hello World! ", nome)
});


app.get("/status", (req, res) => {
    res.json({ status: "online", message: "Ready to log books" })
});


app.listen(3000, () => {
    console.log("Server rodando na porta 3000");
});