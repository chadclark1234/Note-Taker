const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

let PORT = process.env.PORT || 3001;

// ALLOWS ACCESS TO STATIC FOLDER \\
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ALLOWS ACCESS TO PAGES \\
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

// STARTS SERVER AND BEGINS LISTENING \\
app.listen(PORT, function () {
  console.log(`App listening on port http://localhost:${PORT}`);
});
