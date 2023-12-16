const express = require("express");
const app = express();
const path = require("path");
const getHtmlFile = require("./getHtmlFile");
const fs = require("fs");

const assetUrl = path.join(__dirname, "assets");
const cssUrl = path.join(__dirname, "static", "css");
const jsUrl = path.join(__dirname, "static", "js");

function viewCount(req, res, next) {
  const data = fs.readFileSync("./counter.txt", {
    encoding: "utf8",
    flag: "r",
  });
  let counter = parseInt(data);
  counter += 1;
  console.log(counter);
  fs.writeFileSync("./counter.txt", counter.toString());
  res.set("View-Count", counter);
  next();
}

app.use(express.static(assetUrl));
app.use(express.static(cssUrl));
app.use(express.static(jsUrl));

app.get("/", viewCount, (req, res) => {
  const filePath = getHtmlFile("home.html");
  res.sendFile(filePath);
});

app.get("/products", (req, res) => {
  const filePath = getHtmlFile("products.html");
  res.sendFile(filePath);
});

app.get("/aircraft", (req, res) => {
  const filePath = getHtmlFile("airplane.html");
  res.sendFile(filePath);
});

app.get("/warranty", (req, res) => {
  const filePath = getHtmlFile("warranty.html");
  res.sendFile(filePath);
});

app.get("/safety", (req, res) => {
  const filePath = getHtmlFile("safety.html");
  res.sendFile(filePath);
});

app.get("/airstream", (req, res) => {
  const filePath = getHtmlFile("airstream.html");
  res.sendFile(filePath);
});

app.get("/contact", (req, res) => {
  const filePath = getHtmlFile("contact.html");
  res.sendFile(filePath);
});

app.get("/privacy", (req, res) => {
  const filePath = getHtmlFile("privacy.html");
  res.sendFile(filePath);
});

app.get("/truck", (req, res) => {
  const filePath = getHtmlFile("truck.html");
  res.sendFile(filePath);
});

app.get("/misc", (req, res) => {
  const filePath = getHtmlFile("misc.html");
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
