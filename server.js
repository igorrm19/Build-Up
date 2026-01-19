import express from "express";

const app = express();
app.use(express.json());

const nome = "Igor";


app.get("/", (req, res) => {
    res.send("Hello World! ", nome)
});


app.get("/status", (req, res) => {
    res.json({ status: "online", message: "Ready to log books" })
});


app.post("/echo", (req, res) => {
    const data = req.body;
    console.log(data);
    res.json(data);
});


app.listen(3000, () => {
    console.log("Server rodando na porta 3000");
});