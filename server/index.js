require("dotenv-flow").config();
const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello World!");
});

const PORT = process.env.API_SERVER_PORT;
app.listen(PORT, function () {
    console.log(`Api listening on http://localhost:${PORT}!`);
});
