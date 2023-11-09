const express = require("express");
const app = express();
const path = require("path");

const assetUrl = path.join(__dirname, "assets");

app.use(express.static(assetUrl));
app.get("/", (req, res) => {
const filePath = path.join(__dirname, "static", "html", "home.html");
res.sendFile(filePath);
});


app.use((error, req, res, next) => {
console.log(error);
const status = error.status || 500;
const err = {
    message: error.message,
    status: error.status,
};
res.status(status).json(err);
});

const port = 3000;
app.listen(port, () => {
console.log("connected at " + port);
});

 

