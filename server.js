const express = require("express");
const path = require("path");
const app = express();

// const importData = require("./db/db.json");

let PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

// STARTS SERVER AND BEGINS LISTENING \\
app.listen(PORT, function () {
  console.log(`App listening on port http://localhost:${PORT}`);
});
