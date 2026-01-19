import express from "express";

const app = express();
const nome = "Igor";


app.get("/", (req, res) => {
    res.send("Hello World! ", nome)
});


app.listen(3000, () => {
    console.log("Server rodando na porta 3000");
});