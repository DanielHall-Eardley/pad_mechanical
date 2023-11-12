const path = require("path");

function getHtmlFile (filename) {
    const filePath = path.join(__dirname, "static", "html", filename);
    return filePath
}

module.exports = getHtmlFile