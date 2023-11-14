const express = require("express");
const app = express();
const path = require("path");
const getHtmlFile = require("./getHtmlFile");

const assetUrl = path.join(__dirname, "assets");
const cssUrl = path.join(__dirname, "static", "css");
const jsUrl = path.join(__dirname, "static", "js");

app.use(express.static(assetUrl));
app.use(express.static(cssUrl));
app.use(express.static(jsUrl));
app.get("/", (req, res) => {
  const filePath = getHtmlFile("home.html");
  res.sendFile(filePath);
});

app.get("/products", (req, res) => {
  const filePath = getHtmlFile("products.html");
  res.sendFile(filePath);
});

app.get("/how-to", (req, res) => {
  const filePath = getHtmlFile("how-to.html");
  res.sendFile(filePath);
});

app.get("/pictures", (req, res) => {
  const filePath = getHtmlFile("pictures.html");
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

app.get("/about", (req, res) => {
  const filePath = getHtmlFile("about.html");
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
