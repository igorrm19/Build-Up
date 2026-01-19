import express from "express";

const app = express();
app.use(express.json());

let tempBooks = ["The Hobbit", "1984"]


app.get("/", (req, res) => {
    res.send("Hello World! ")
});


app.get("/status", (req, res) => {
    res.json({ status: "online", message: "Ready to log books" })
});


app.get("/tests-book", (req, res) => {
    res.json(tempBooks);

    return tempBooks;
});

app.post("/tests-book", (req, res) => {
    const book = req.body;
    tempBooks.push(book);
    res.json(book);
});


app.post("/echo", (req, res) => {
    const data = req.body;
    console.log(data);
    res.json(data);
});


app.listen(3000, () => {
    console.log("Server rodando na porta 3000");
});